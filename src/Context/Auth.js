import React, { createContext, useContext, useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { Post } from "../Api";
import { ToastAndroid } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [authLoading, setAuthLoading] = useState(true); // Only for initial app load

  // Load saved auth data on app start
  useEffect(() => {
    loadStoredAuth();
  }, []);

  const loadStoredAuth = async () => {
    try {
      const storedToken = await AsyncStorage.getItem("auth_token");
      const storedUser = await AsyncStorage.getItem("auth_user");

      if (storedToken && storedUser) {
        setToken(storedToken);
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.log("Error loading stored auth:", error);
    } finally {
      setAuthLoading(false);
    }
  };

  const saveAuthData = async (userData, authToken) => {
    try {
      await AsyncStorage.setItem("auth_token", authToken);
      await AsyncStorage.setItem("auth_user", JSON.stringify(userData));
      setToken(authToken);
      setUser(userData);
    } catch (error) {
      console.log("Error saving auth data:", error);
    }
  };

  const clearAuthData = async () => {
    try {
      await AsyncStorage.removeItem("auth_token");
      await AsyncStorage.removeItem("auth_user");
      setToken(null);
      setUser(null);
    } catch (error) {
      console.log("Error clearing auth data:", error);
    }
  };

  const loginMutation = useMutation({
    mutationFn: (data) =>
      Post({
        url: "/login",
        data,
      }),
    onSuccess: (res) => {
      console.log("Login Response:", res);
      if (res?.success && res?.data) {
        const { user: userData, token: authToken } = res.data;
        saveAuthData(userData, authToken);
        ToastAndroid.show("Login successful", ToastAndroid.SHORT);
      }
    },
    onError: (err) => {
      console.log("Login Error:", err.message);
      ToastAndroid.show(err.message || "Login failed", ToastAndroid.SHORT);
    },
  });

  const signupMutation = useMutation({
    mutationFn: (data) =>
      Post({
        url: "/register",
        data,
      }),
    onSuccess: (res) => {
      console.log("Signup Response:", res);
      if (res?.success && res?.data) {
        const { user: userData, token: authToken } = res.data;
        saveAuthData(userData, authToken);
        ToastAndroid.show("Account created successfully", ToastAndroid.SHORT);
      }
    },
    onError: (err) => {
      console.log("Signup Error:", err.message);
      ToastAndroid.show(err.message || "Signup failed", ToastAndroid.SHORT);
    },
  });

  const login = (email, password) =>
    loginMutation.mutateAsync({ email, password });

  const signup = (email, password, name) =>
    signupMutation.mutateAsync({ email, password, name });

  const logout = () => {
    clearAuthData();
    ToastAndroid.show("Logged out", ToastAndroid.SHORT);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        signup,
        logout,
        authLoading, // For initial app load splash screen
        isLoading: loginMutation.isPending || signupMutation.isPending, // For button loading state only
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
