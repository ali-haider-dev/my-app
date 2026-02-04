import axios from "axios";
import { BASE_URL } from "./constants/index";
import { ToastAndroid } from "react-native";

export const Post = async ({
  url,
  data,
  showError = true,
  token,
  setErrors = () => {},
}) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    };
    const response = await axios.post(`${BASE_URL}${url}`, data, {
      headers,
    });

    return { success: true, data: response.data };
  } catch (error) {
    console.log("API Error:", error.response?.data || error.message);

    if (error.response?.status === 400) {
      const messages = error.response.data.message;

      // Handle validation errors (object with field errors)
      if (typeof messages === "object" && messages !== null) {
        let errorObj = {};
        Object.keys(messages).forEach((key) => {
          errorObj[key] = Array.isArray(messages[key])
            ? messages[key][0]
            : messages[key];
        });
        setErrors(errorObj);
      }
    }

    // Extract error message
    const errorMessage =
      error.response?.data?.message ||
      error.response?.data?.error ||
      error.message ||
      "Something went wrong";

    // THROW error so React Query's onError works
    throw new Error(
      typeof errorMessage === "string" ? errorMessage : "Request failed",
    );
  }
};

export const Get = async ({ url, data, token }) => {
  try {
    const response = await axios.get(`${BASE_URL}${url}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      params: data,
    });

    return { success: true, data: response.data };
  } catch (error) {
    console.error("API Error:", error.response?.data || error.message);
    ToastAndroid.show(
      error.response?.data?.message || error.message,
      ToastAndroid.SHORT,
    );
    return { success: false, error: error?.response?.data?.message };
  }
};

export const Put = async ({ url, token, data, id, setErrors = () => {} }) => {
  try {
    // If id exists, append it to the URL; otherwise, use the URL without id
    const requestUrl = id ? `${BASE_URL}${url}/${id}` : `${BASE_URL}${url}`;

    const response = await axios.put(requestUrl, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return { success: true, data: response.data };
  } catch (error) {
    console.error("API Error:", error.response?.data || error.message);

    if (error.response?.status === 400) {
      const messages = error.response.data.message;

      let errorObj = {};
      Object.keys(messages).forEach((key) => {
        errorObj[key] = messages[key][0];
      });

      setErrors(errorObj);
    }

    ToastAndroid.show(
      error.response?.data?.message || error.message,
      ToastAndroid.SHORT,
    );

    return { success: false, error: error?.response?.data?.message };
  }
};

export const Delete = async ({ url, data, token }) => {
  try {
    const response = await axios.delete(`${BASE_URL}${url}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data, // axios supports sending data in DELETE requests
    });

    return { success: true, data: response.data };
  } catch (error) {
    console.error("API Error:", error.response?.data || error.message);

    ToastAndroid.show(
      error.response?.data?.message || error.message,
      ToastAndroid.SHORT,
    );

    return { success: false, error: error?.response?.data?.message };
  }
};

// import { useIsFocused } from '@react-navigation/native';
// const isFocused = useIsFocused();

// useEffect(() => {
//   if (isFocused) {
//      console.log('Is inFocused Block', isFocused);
//      loadData();
//   }
// }, [isFocused]);
