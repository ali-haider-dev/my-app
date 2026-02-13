// reactQueryHooks.js
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Get, Post, Put, Delete } from "../Api";
import { ToastAndroid } from "react-native";

/**
 * ---------------------------
 * GET HOOK
 * ---------------------------
 */
export const useFetchData = ({ key, url, token }) => {
  return useQuery({
    queryKey: key,
    queryFn: () => Get({ url, token }),

    select: (res) => res.data,

    retry: 1,

    onError: (err) => {
      console.log("Fetch Error:", err?.error || err);
      ToastAndroid.show(
        err?.error || "Error fetching data",
        ToastAndroid.SHORT,
      );
    },
  });
};

/**
 * ---------------------------
 * POST / CREATE HOOK
 * ---------------------------
 */
export const useCreateData = ({ url, token, key, setErrors = () => {} }) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) =>
      Post({
        url,
        data,
        token,
        setErrors,
      }),

    onSuccess: (res) => {
      if (res?.success) {
        ToastAndroid.show("Created successfully!", ToastAndroid.SHORT);

        queryClient.invalidateQueries({
          queryKey: key,
        });
      }
    },

    onError: (err) => {
      console.log("Create Error:", err);
    },
  });
};

/**
 * ---------------------------
 * PUT / UPDATE HOOK
 * ---------------------------
 */
export const useUpdateData = ({ url, token, key, setErrors = () => {} }) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ data, id }) =>
      Put({
        url,
        data,
        id,
        token,
        setErrors,
      }),

    onSuccess: (res) => {
      if (res?.success) {
        ToastAndroid.show("Updated successfully!", ToastAndroid.SHORT);

        queryClient.invalidateQueries({
          queryKey: key,
        });
      }
    },

    onError: (err) => {
      console.log("Update Error:", err);
    },
  });
};

/**
 * ---------------------------
 * DELETE HOOK
 * ---------------------------
 */
export const useDeleteData = ({ url, token, key }) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) =>
      Delete({
        url,
        data,
        token,
      }),

    onSuccess: (res) => {
      if (res?.success) {
        ToastAndroid.show("Deleted successfully!", ToastAndroid.SHORT);

        queryClient.invalidateQueries({
          queryKey: key,
        });
      }
    },

    onError: (err) => {
      console.log("Delete Error:", err);
    },
  });
};
