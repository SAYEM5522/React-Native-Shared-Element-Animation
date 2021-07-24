import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
const Header = () => {
  return (
    <View>
    <View style={styles.Header}>
     <AntDesign name="menuunfold" size={24} color="black" />
     <View style={styles.HeaderRight}>
     <AntDesign name="search1" style={{marginRight:20}} size={24} color="black" />
     <Ionicons name="lock-closed-outline" size={24} color="black" />
     </View>
     </View>
     
     <Text style={styles.Title}>Discover</Text>
     </View>
  )
}

export default Header

const styles = StyleSheet.create({
  Header:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:"space-between",
    padding:20,
    top:14
  
  },
  HeaderRight:{
    flexDirection:'row',
    alignItems:'center',
    marginRight:10
  },
  Title:{
    fontSize:30,
    fontWeight:'bold',
    color:'black',
    padding:10,
    marginLeft:10,
    top:7
  },
})
