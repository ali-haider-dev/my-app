import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { FONT_FAMILY } from "../constants";

const ProfileScreen = () => {
  // Mock User Data
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    avatar: "https://i.pravatar.cc/302",
    bio: "React Native Enthusiast | UI/UX Designer"
  };

  const MenuItem = ({ icon, title, color, onPress }) => (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <View style={[styles.iconContainer, { backgroundColor: color + '15' }]}>
        <Feather name={icon} size={20} color={color} />
      </View>
      <Text style={styles.menuText}>{title}</Text>
      <Feather name="chevron-right" size={18} color="#ccc" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* Header / Profile Info */}
        <View style={styles.header}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: user.avatar }} style={styles.profileImage} />
            <TouchableOpacity style={styles.editButton}>
              <Feather name="edit-2" size={16} color="#fff" />
            </TouchableOpacity>
          </View>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userBio}>{user.bio}</Text>
        </View>

        {/* Stats Row */}
        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Orders</Text>
          </View>
          <View style={[styles.statBox, styles.statBorder]}>
            <Text style={styles.statNumber}>5</Text>
            <Text style={styles.statLabel}>Wishlist</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>150</Text>
            <Text style={styles.statLabel}>Points</Text>
          </View>
        </View>

        {/* Settings Menu */}
        <View style={styles.menuSection}>
          <Text style={styles.sectionTitle}>Account Settings</Text>
          <MenuItem icon="user" title="Personal Information" color="#6366f1" />
          <MenuItem icon="shopping-bag" title="My Orders" color="#f59e0b" />
          <MenuItem icon="heart" title="Favorites" color="#ef4444" />
          <MenuItem icon="bell" title="Notifications" color="#10b981" />
        </View>

        <View style={styles.menuSection}>
          <Text style={styles.sectionTitle}>Support</Text>
          <MenuItem icon="help-circle" title="Help Center" color="#0ea5e9" />
          <MenuItem icon="shield" title="Privacy Policy" color="#64748b" />
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton}>
          <Feather name="log-out" size={20} color="#ef4444" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8fafc' },
  header: { alignItems: 'center', marginTop: 30, paddingHorizontal: 20 },
  imageContainer: { position: 'relative' },
  profileImage: { width: 110, height: 110, borderRadius: 55, borderWidth: 4, borderColor: '#fff' },
  editButton: { 
    position: 'absolute', bottom: 0, right: 0, 
    backgroundColor: '#6366f1', padding: 8, borderRadius: 20,
    elevation: 4, shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 3
  },
  userName: { 
    fontSize: 22, color: '#1e293b', marginTop: 15,
    fontFamily: FONT_FAMILY.PoppinsSemiBold600 
  },
  userBio: { 
    fontSize: 14, color: '#64748b', marginTop: 5,
    fontFamily: FONT_FAMILY.PoppinsMedium500 
  },
  statsRow: { 
    flexDirection: 'row', backgroundColor: '#fff', margin: 20, 
    borderRadius: 15, paddingVertical: 15, elevation: 2,
    shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 10
  },
  statBox: { flex: 1, alignItems: 'center' },
  statBorder: { borderLeftWidth: 1, borderRightWidth: 1, borderColor: '#f1f5f9' },
  statNumber: { fontSize: 18, color: '#1e293b', fontWeight: 'bold' },
  statLabel: { fontSize: 12, color: '#94a3b8', marginTop: 2 },
  menuSection: { paddingHorizontal: 20, marginTop: 10 },
  sectionTitle: { 
    fontSize: 14, color: '#94a3b8', marginBottom: 10, textTransform: 'uppercase',
    letterSpacing: 1, fontFamily: FONT_FAMILY.PoppinsMedium500
  },
  menuItem: { 
    flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', 
    padding: 15, borderRadius: 12, marginBottom: 10 
  },
  iconContainer: { padding: 8, borderRadius: 10, marginRight: 15 },
  menuText: { flex: 1, fontSize: 16, color: '#334155', fontFamily: FONT_FAMILY.PoppinsMedium500 },
  logoutButton: { 
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center', 
    marginHorizontal: 20, marginTop: 20, padding: 15, 
    borderRadius: 12, borderWidth: 1, borderColor: '#fee2e2'
  },
  logoutText: { color: '#ef4444', fontSize: 16, marginLeft: 10, fontWeight: '600' }
});

export default ProfileScreen;