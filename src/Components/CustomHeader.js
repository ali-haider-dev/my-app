import { Text, TouchableOpacity, View } from "react-native";
import { FONT_FAMILY } from "../constants";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native"; 

export const CustomHeader = ({ title, backgroundColor }) => {
  const navigation = useNavigation(); 

  return (
    <View style={{
      height: 70,
      backgroundColor: backgroundColor,
      flexDirection: 'row',
      alignItems: 'flex-end',
      paddingHorizontal: 15,
      paddingBottom: 12,
      elevation: 5,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
    }}>
      
   
      <TouchableOpacity 
        onPress={() => navigation.goBack()} 
        style={{ 
          flexDirection: 'row', 
          alignItems: 'center', 
          position: 'absolute', 
          left: 15, 
          bottom: 12, 
          zIndex: 10 
        }}
      >
        <Ionicons name="arrow-back" size={22} color="#fff" />
        <Text style={{ 
          color: '#fff', 
          fontSize: 16, 
          fontFamily: FONT_FAMILY.PoppinsMedium500, 
          marginLeft: 4 
        }}>
          Back
        </Text>
      </TouchableOpacity>

      {/* Middle: Title */}
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text style={{
          fontFamily: FONT_FAMILY.PoppinsSemiBoldItalic600,
          fontSize: 18,
          color: "#fff",
          textAlign: "center",
          textTransform: 'capitalize'
        }}>
          {title}
        </Text>
      </View>

     
      
    </View>
  );
};