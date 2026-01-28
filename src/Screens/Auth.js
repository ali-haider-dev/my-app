import { LinearGradient } from "expo-linear-gradient";

import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import InputField from "../Components/InputField";
import { useAuth } from "../Context/Auth";

export default function AuthScreen({ navigation }) {
  const [isLogin, setIsLogin] = useState(true);
  const { login, signup,isLoading } = useAuth();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    // console.log("Form Data:", data);
    (isLogin
      ? await login(data.email, data.password)
      : await signup(data.email, data.password, data.name),
      reset());
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#1a1a2e", "#16213e", "#0f3460"]}
        style={styles.gradient}
      >
        <SafeAreaView style={styles.safeArea}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.keyboardView}
          >
            <ScrollView
              contentContainerStyle={styles.scrollContent}
              keyboardShouldPersistTaps="handled"
            >
              <View style={styles.header}>
                <View style={styles.iconContainer}>
                  <Ionicons name="book-outline" size={48} color="#3b82f6" />
                </View>
                <Text style={styles.title}>ContentHub</Text>
                <Text style={styles.subtitle}>Books, Games & More</Text>
              </View>

              <View style={styles.formContainer}>
                <View style={styles.toggleContainer}>
                  <Pressable
                    style={[
                      styles.toggleButton,
                      isLogin && styles.toggleButtonActive,
                    ]}
                    onPress={() => {
                      (setIsLogin(true), reset());
                    }}
                  >
                    <Text
                      style={[
                        styles.toggleText,
                        isLogin && styles.toggleTextActive,
                      ]}
                    >
                      Login
                    </Text>
                  </Pressable>
                  <Pressable
                    style={[
                      styles.toggleButton,
                      !isLogin && styles.toggleButtonActive,
                    ]}
                    onPress={() => {
                      (setIsLogin(false), reset());
                    }}
                  >
                    <Text
                      style={[
                        styles.toggleText,
                        !isLogin && styles.toggleTextActive,
                      ]}
                    >
                      Sign Up
                    </Text>
                  </Pressable>
                </View>

                {!isLogin && (
                  <Controller
                    control={control}
                    name="name"
                    rules={{ required: "Name is required" }}
                    render={({ field: { onChange, value } }) => (
                      <InputField
                        heading="Name"
                        value={value}
                        onChangeText={onChange}
                        placeholder="Enter your name"
                        error={errors.name?.message}
                      />
                    )}
                  />
                )}

                {/* Email */}
                <Controller
                  control={control}
                  name="email"
                  rules={{
                    required: "Email is required",
                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
                  }}
                  render={({ field: { onChange, value } }) => (
                    <InputField
                      heading="Email"
                      value={value}
                      onChangeText={onChange}
                      placeholder="Enter your email"
                      error={errors.email?.message}
                      keyboardType="email-address"
                    />
                  )}
                />

                {/* Password */}
                <Controller
                  control={control}
                  name="password"
                  rules={{
                    required: "Password is required",
                    minLength: { value: 6, message: "Min 6 characters" },
                  }}
                  render={({ field: { onChange, value } }) => (
                    <InputField
                      heading="Password"
                      value={value}
                      onChangeText={onChange}
                      placeholder="Enter your password"
                      secureTextEntry={true}
                      error={errors.password?.message}
                    />
                  )}
                />

                <TouchableOpacity
                  style={[styles.button, isLoading && styles.buttonDisabled]}
                  onPress={handleSubmit(onSubmit)}
                  disabled={isLoading}
                >
                  <LinearGradient
                    colors={["#3b82f6", "#2563eb"]}
                    style={styles.buttonGradient}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                  >
                    <Text style={styles.buttonText}>
                      {isLoading
                        ? "Please wait..."
                        : isLogin
                          ? "Login"
                          : "Create Account"}
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 24,
  },
  header: {
    alignItems: "center",
    marginBottom: 48,
  },
  iconContainer: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: "rgba(59, 130, 246, 0.2)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
    borderWidth: 2,
    borderColor: "rgba(59, 130, 246, 0.3)",
  },
  title: {
    fontSize: 36,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#94a3b8",
  },
  formContainer: {
    gap: 16,
  },
  toggleContainer: {
    flexDirection: "row",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 12,
    padding: 4,
    marginBottom: 8,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 8,
  },
  toggleButtonActive: {
    backgroundColor: "rgba(59, 130, 246, 0.3)",
  },
  toggleText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#94a3b8",
  },
  toggleTextActive: {
    color: "#fff",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 56,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#fff",
  },
  button: {
    marginTop: 8,
    borderRadius: 12,
    overflow: "hidden",
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonGradient: {
    paddingVertical: 16,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
  },
});
