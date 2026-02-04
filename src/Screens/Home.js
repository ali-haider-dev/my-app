import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useAuth } from "../Context/Auth";
import { usePayment } from "../Context/payment";
import { useIsFocused } from "@react-navigation/native";

// Wrapper that only renders content when focused (React Navigation v7 workaround for unmountOnBlur)
export default function HomeScreen({ navigation }) {
  const isFocused = useIsFocused();

  if (!isFocused) {
    return null;
  }

  return <HomeContent navigation={navigation} />;
}

function HomeContent({ navigation }) {
  const { user, logout } = useAuth();
  const { hasBooksAccess } = usePayment();

  // useEffect(() => {
  //   console.log("Home MOUNTED");
  //   return () => console.log("Home UNMOUNTED");
  // }, []);

  const handleLogout = async () => {
    await logout();
  };

  const cards = [
    {
      id: "books",
      title: "Books",
      description: "Ebooks & Audiobooks",
      icon: "book-outline",
      colors: ["#8b5cf6", "#6d28d9"],
      locked: !hasBooksAccess,
      route: "books",
    },
    {
      id: "games",
      title: "Games",
      description: "Play Free Games",
      icon: "game-controller-outline",
      colors: ["#10b981", "#059669"],
      locked: false,
      route: "games",
    },
    {
      id: "merchandise",
      title: "Merchandise",
      description: "Shop Products",
      icon: "bag-outline",
      colors: ["#f59e0b", "#d97706"],
      locked: false,
      route: "merchandise",
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Welcome back,</Text>
            <Text style={styles.userName}>{user?.name || "User"}</Text>
          </View>
          <Pressable onPress={handleLogout} style={styles.logoutButton}>
            <Ionicons name="log-out-outline" size={24} color="#ef4444" />
          </Pressable>
        </View>

        <View style={styles.cardsContainer}>
          {cards.map((card) => (
            <Pressable
              key={card.id}
              style={styles.card}
              onPress={() => navigation.navigate(card.route)}
            >
              <LinearGradient
                colors={card.colors}
                style={styles.cardGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <View style={styles.cardContent}>
                  <View style={styles.cardIcon}>
                    <Ionicons name={card.icon} size={40} color="#fff" />
                  </View>
                  <Text style={styles.cardTitle}>{card.title}</Text>
                  <Text style={styles.cardDescription}>{card.description}</Text>
                  {card.locked && (
                    <View style={styles.lockBadge}>
                      <Text style={styles.lockText}>Payment Required</Text>
                    </View>
                  )}
                </View>
              </LinearGradient>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 32,
  },
  greeting: {
    fontSize: 16,
    color: "#64748b",
  },
  userName: {
    fontSize: 28,
    fontWeight: "700",
    color: "#0f172a",
    marginTop: 4,
  },
  logoutButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#fee2e2",
    alignItems: "center",
    justifyContent: "center",
  },
  cardsContainer: {
    gap: 16,
  },
  card: {
    borderRadius: 20,
    overflow: "hidden",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
  },
  cardGradient: {
    padding: 24,
    minHeight: 180,
  },
  cardContent: {
    flex: 1,
  },
  cardIcon: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 6,
  },
  cardDescription: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.9)",
  },
  lockBadge: {
    marginTop: 12,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  lockText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#fff",
  },
});
