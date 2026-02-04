import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import InputField from "../Components/InputField";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCreateData } from "../Hooks/UserHooks";
const Signup = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const createUser = useCreateData({ url: "/users", token, setErrors });
  const onSubmit = (data) => {
    console.log("Form Data:", data);
    createUser.mutate(data, {
      onSuccess: () => reset(), // optional: reset form after success
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.title}>Create Account</Text>

          {/* Name */}
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

          {/* Signup Button */}
          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          {/* Already have account */}
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.loginText}>Already have an account? Login</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    alignSelf: "center",
    color: "#333",
  },
  button: {
    backgroundColor: "#ff4d4d",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 15,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  loginText: {
    color: "#ff4d4d",
    alignSelf: "center",
    marginTop: 10,
    fontWeight: "500",
  },
});
