import { mockGames } from "../mocks/games";

import { LinearGradient } from "expo-linear-gradient";

import { Feather } from "@expo/vector-icons";
import React from "react";
import {
  Alert,
  Pressable,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";

export default function GamesScreen() {
  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={mockGames}
          keyExtractor={(item) => item.id}
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          ListHeaderComponent={
            <View style={styles.header}>
              <Text style={styles.headerTitle}>Play Free Games</Text>
              <Text style={styles.headerSubtitle}>
                No payment required - start playing now!
              </Text>
            </View>
          }
          renderItem={({ item: game }) => (
            <Pressable
              style={styles.gameCard}
              onPress={() =>
                Alert.alert(game.title, `${game.description}\n\nComing soon!`)
              }
            >
              <Image source={{ uri: game.image }} style={styles.gameImage} />
              <LinearGradient
                colors={["transparent", "rgba(0,0,0,0.8)"]}
                style={styles.gameOverlay}
              >
                <View style={styles.gameContent}>
                  <View style={styles.gameBadge}>
                    <Text style={styles.gameBadgeText}>{game.category}</Text>
                  </View>
                  <Text style={styles.gameTitle}>{game.title}</Text>
                  <Text style={styles.gameDescription} numberOfLines={2}>
                    {game.description}
                  </Text>
                  <View style={styles.gameMeta}>
                    <View style={styles.metaItem}>
                      <Feather name="users" size={24} color="#fff" />
                      <Text style={styles.metaText}>{game.players}</Text>
                    </View>
                    <View style={styles.playButton}>
                      <Feather
                        name="play"
                        size={24}
                        color="#10b981"
                        fill="#10b981"
                      />
                    </View>
                  </View>
                </View>
              </LinearGradient>
            </Pressable>
          )}
        />
      </View>
    </>
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
  gamesGrid: {
    gap: 16,
  },
  gameCard: {
    borderRadius: 20,
    overflow: "hidden",
    height: 240,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    marginBottom: 20,
  },
  gameImage: {
    width: "100%",
    height: "100%",
  },
  gameOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
  },
  gameContent: {
    gap: 8,
  },
  gameBadge: {
    backgroundColor: "rgba(16, 185, 129, 0.9)",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 6,
    alignSelf: "flex-start",
  },
  gameBadgeText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#fff",
  },
  gameTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#fff",
  },
  gameDescription: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.9)",
  },
  gameMeta: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 4,
  },
  metaItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  metaText: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "600",
  },
  playButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
