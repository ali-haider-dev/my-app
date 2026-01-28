import AsyncStorage from '@react-native-async-storage/async-storage';
import createContextHook from '@nkzw/create-context-hook';
import { useEffect, useState } from 'react';

export const [PaymentProvider, usePayment] = createContextHook(() => {
  const [hasBooksAccess, setHasBooksAccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadPaymentStatus();
  }, []);

  const loadPaymentStatus = async () => {
    try {
      const status = await AsyncStorage.getItem('books_access');
      setHasBooksAccess(status === 'true');
    } catch (error) {
      console.error('Failed to load payment status:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const purchaseBooksAccess = async () => {
    await AsyncStorage.setItem('books_access', 'true');
    setHasBooksAccess(true);
  };

  return {
    hasBooksAccess,
    isLoading,
    purchaseBooksAccess,
  };
});
