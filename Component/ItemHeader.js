import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {  useSelector } from 'react-redux';
import { selectArray, selectStart } from '../features/ItemSlice';

const ItemHeader = ({image,name,price,id}) => {  
  const array=useSelector(selectArray)
  const open=useSelector(selectStart)
  const navigation = useNavigation();
  const handlePress=()=>{
    navigation.push("CardList",{
      image,
      name,
      price,
      id
    })
  }
  return (
    <View style={styles.Header}>
     <AntDesign name="arrowleft" size={24} color="black" />
     <Ionicons onPress={handlePress} name="lock-closed-outline" style={{marginRight:28,position:'relative',marginLeft:340}} size={24} color="black" />
     {
      
      open?<View style={styles.CardNum}>
       <Text style={styles.Text} >{array?.length}</Text>
       </View>: <Ionicons onPress={handlePress} name="lock-closed-outline" style={{marginRight:28,position:'relative',marginLeft:340}} size={24} color="black" />
     }
    
    </View>
  )
}

export default ItemHeader

const styles = StyleSheet.create({
  Header:{
    flexDirection:'row',
    alignItems:'center',
    top:15,
    paddingHorizontal:10,
    height:80
  },
  CardNum:{
    position:"absolute",
    color:'black',
    left:383,
    top:15,
    backgroundColor:'red',
    padding:5,
    borderRadius:100,
    fontSize:13,
    width:22,
    height:22,
    textAlign:"center",
    

  },
  Text:{
    fontSize:16,
    top:-5,
  }
})
