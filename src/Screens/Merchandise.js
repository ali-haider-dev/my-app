import { mockProducts } from "../mocks/product";
import { Ionicons } from "@expo/vector-icons";
// import { StripeProvider, useStripe } from '@stripe/stripe-react-native';

import React, { useState } from "react";
import {
  Alert,
  Platform,
  Pressable,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";

function MerchandiseContent() {
  //   const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);

  const handlePurchase = async (productName, price) => {
    if (Platform.OS === "web") {
      Alert.alert(
        "Purchase",
        `${productName} - $${price.toFixed(2)}\n\nStripe checkout would open here on native devices.`,
        [{ text: "OK" }],
      );
      return;
    }

    setLoading(true);
    try {
      Alert.alert(
        "Purchase",
        `${productName} - $${price.toFixed(2)}\n\nIn a production app, this would:\n1. Create payment intent on your server\n2. Initialize Stripe payment sheet\n3. Process the payment`,
        [{ text: "OK" }],
      );
    } catch (error) {
      Alert.alert("Error", "Payment failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={mockProducts}
          keyExtractor={(item) => item.id}
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          ListHeaderComponent={
            <View style={styles.header}>
              <Text style={styles.headerTitle}>Shop Merchandise</Text>
              <Text style={styles.headerSubtitle}>
                Official products delivered to your door
              </Text>
            </View>
          }
          renderItem={({ item: product }) => (
            <View style={styles.productCard}>
              <Image
                source={{ uri: product.image }}
                style={styles.productImage}
              />
              <View style={styles.productInfo}>
                <View style={styles.productBadge}>
                  <Text style={styles.productBadgeText}>
                    {product.category}
                  </Text>
                </View>
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productDescription} numberOfLines={2}>
                  {product.description}
                </Text>
                <View style={styles.productFooter}>
                  <Text style={styles.productPrice}>
                    ${product.price.toFixed(2)}
                  </Text>
                  <Pressable
                    style={[
                      styles.buyButton,
                      loading && styles.buyButtonDisabled,
                    ]}
                    onPress={() => handlePurchase(product.name, product.price)}
                    disabled={loading}
                  >
                    <Ionicons name="cart-outline" size={16} color="#fff" />
                    <Text style={styles.buyButtonText}>Buy Now</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </>
  );
}

export default function MerchandiseScreen() {
  return (
    // <StripeProvider publishableKey="pk_test_placeholder">

    // </StripeProvider>
    <MerchandiseContent />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#64748b",
  },
  productsGrid: {
    gap: 16,
  },
  productCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    overflow: "hidden",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  productImage: {
    width: "100%",
    height: 200,
  },
  productInfo: {
    padding: 16,
  },
  productBadge: {
    backgroundColor: "#f0fdf4",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    alignSelf: "flex-start",
    marginBottom: 8,
  },
  productBadgeText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#059669",
  },
  productName: {
    fontSize: 20,
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: 6,
  },
  productDescription: {
    fontSize: 14,
    color: "#64748b",
    marginBottom: 16,
  },
  productFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  productPrice: {
    fontSize: 24,
    fontWeight: "700",
    color: "#0f172a",
  },
  buyButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#f59e0b",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buyButtonDisabled: {
    opacity: 0.6,
  },
  buyButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
  },
});
