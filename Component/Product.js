import React from 'react'
import { StyleSheet, Text, View,Image,FlatList } from 'react-native'
import Header from './Header'

import Animated,{ interpolate, useAnimatedStyle, useSharedValue, withDelay, withTiming } from 'react-native-reanimated';
import { useEffect } from 'react';
import ProductDetails from './ProductDetails';
const  data=[{
  id:"1",
  image:"https://purepng.com/public/uploads/large/purepng.com-sofasofafurniturearmrestsentirely-upholsteredloungecouchbedsteaddivan-1701527997330cokdo.png",
 
  name:"Grey Fabric Sofa",
  price:"$1000"
},
{
  id:"2",
  
  image:"https://purepng.com/public/uploads/large/purepng.com-sofasofafurniturearmrestsentirely-upholsteredloungecouchbedsteaddivan-1701527959707ljjuw.png",
  name:"Ikea Ektorp Sofa",
  price:"$1000"
},
{
  id:"3",
  image:"https://purepng.com/public/uploads/large/21502322939gpeuymkv79h9rizji8ehe8hfb7zaqqkeyo56snax7vcazr1ksq4epptyyklsfhg56yulf2aevac9sgr7brf4v2bl7xztouifkjm0.png",
  name:" Leather Sofa",
  price:"$1000"
},
{
  id:"4",
  image:"https://purepng.com/public/uploads/large/purepng.com-sofasofafurniturearmrestsentirely-upholsteredloungecouchbedsteaddivan-1701527997119tteiz.png",
  name:"Sofa",
  price:"$1000"
},
{
  id:"5",
  image:"https://purepng.com/public/uploads/large/purepng.com-sofasofafurniturearmrestsentirely-upholsteredloungecouchbedsteaddivan-1701527996906npjr8.png",
  name:"Sofa",
  price:"$1000"
},
{
  id:"6",
  image:"http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c279.png",
  name:"Sofa",
  price:"$1000"
},
{
  id:"7",
  image:"https://purepng.com/public/uploads/large/purepng.com-sofasofafurniturearmrestsentirely-upholsteredloungecouchbedsteaddivan-1701527996906npjr8.png",
  name:"Sofa",
  price:"$1000"
},
{
  id:"8",
  image:"http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c279.png",
  name:"Sofa",
  price:"$1000"
}
]

const Product = ({route}) => {
 
  const x=useSharedValue(0);
 
  useEffect(()=>{
    x.value=withTiming(1,{duration:1160});
  },[x])

  const renderItem=({item,index})=>{
   
    const selectId=route.params.item.id===item.id

    return(
  
    <ProductDetails item={item} index={index} x={x} route={route.params} selectId={selectId} />
      
    )
  }
  return (
    <View >
     <Header/>
     <View style={styles.BottomSheet}>
     <View style ={styles.line}/>
       <FlatList
       data={data}
       keyExtractor={(item)=>item.id}
       renderItem={renderItem}
       showsVerticalScrollIndicator={false}
       numColumns={2}
       />
     </View>
    </View>
  )
}
Product.sharedElements = (route) => {
 
  return [
    {
      id:route.params.item.id,
      animation: 'move',
      resize: 'clip'
    }
  ];
}
export default Product

const styles = StyleSheet.create({
  BottomSheet:{
    backgroundColor:"#fff",
    height:610,
    top:20,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    width:"100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.80,
    shadowRadius: 60,
    elevation:10

  },
 
  line:{
    width:100,
    height:6,
    borderRadius:10,
    backgroundColor:"lightgray",
    justifyContent:"center",
    alignSelf:'center',
    top:5
  },
 
})
