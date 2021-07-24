import React from 'react'
import { StyleSheet, Text, View,Image,Pressable } from 'react-native'
import { SharedElement } from 'react-navigation-shared-element';
import Animated,{ interpolate, useAnimatedStyle, useSharedValue, withDelay, withTiming } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

const ProductDetails = ({item,index,x,selectId,route}) => {
  const navigation = useNavigation();

  const animatedStyle = useAnimatedStyle(() => {
    return {
    transform:[{
      translateY:interpolate(x.value,[0,1],[0,14]),
    }]
    };
  });
  const onPress=()=>{
    navigation.push("ItemDetails",{
      itemImg:item.image,
      itemId:item.id,
      itemName:item.name,
      itemPrice:item.price
    })
  }
  return (
    <Animated.View style={[{padding:15,height:190},animatedStyle]}>
      <Pressable onPress={onPress}>
      <SharedElement id ={(selectId)?route.item.id:item.id}>
    <Image
    source={{uri:(selectId)?route.item.image:item.image}}
    style={[styles.Image]}
    />
      </SharedElement>
    </Pressable>
  
    <View style={{marginLeft:10,top:-10}}>
      <Text style={[styles.Name]}>{(selectId)?route.item.name:item.name}</Text>
      <Text style={styles.Price}>{(selectId)?route.item.price:item.price}</Text>
    </View>
      </Animated.View>
  )
}

export default ProductDetails

const styles = StyleSheet.create({
  Name:{
    fontSize:16,
    fontWeight:'bold',
    top:-20
  },
  Price:{
    fontSize:14,
    fontWeight:'bold',
    color:'gray',
    top:-20
  },
  Image:{
    width:170,
    height:170,
    resizeMode:'contain',
    top:-20
  },
})
