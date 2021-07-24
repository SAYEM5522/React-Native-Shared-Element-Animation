import React from 'react'
import { StyleSheet, Text, View,Image,Pressable, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated,{ useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { SharedElement } from 'react-navigation-shared-element';
import { useSelector } from 'react-redux';
import { selectArray, selectItem } from '../features/ItemSlice';

const CardList = ({route}) => {
  const Y = useSharedValue(0);
  const item=useSelector(selectItem)
  const array=useSelector(selectArray)
  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startX = Y.value;
    },
    onActive: (event, ctx) => {
      Y.value = ctx.startX + event.translationY;
    },
    onEnd: (_) => {
      
      if(Y.value<-40){
        Y.value = withSpring(-622);
      }
    },
  });
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: Y.value,
        },
      ],
    };
  });
  return (
    <View >
      <View style={{height:650}}>
      <View style={styles.Card}>
      <LinearGradient
          colors={['#FC466B','#FFAFBD',]}
          style={styles.Gradient}
          start={[0, 0]}
           end={[1, 0]}
          />
        <Text style={{color:'white',fontSize:27,top:15,fontWeight:'bold',marginLeft:300,right:25,position:'absolute'}}>ITEM :{array?.length}</Text>

        <Text style={{color:'white',fontSize:27,top:100,fontWeight:'bold',marginLeft:30,position:'absolute'}}>
        {
          route.params.price
        }
        </Text>
      </View>

      <ScrollView>
      {
        array.map((array,index)=>(
       <View key={index} style={{height:190,zIndex:-100}}>
      <View style={{flexDirection:'row',left:20,top:50}}>
      <SharedElement id ={route.params.id}>
     <Image 
     source={{uri:array.array.itemImg}}
     style={styles.IMG}
     />
     </SharedElement>
     <View style={{marginLeft:25,top:10}} >
       <Text style={{fontSize:18,fontWeight:'bold',color:"black"}}>
         {array.array.itemName}
       </Text>
       <Text style={{fontSize:15,fontWeight:'bold',color:"black"}}>
         {array.array.itemPrice}
       </Text>
       <Pressable
       style={styles.Button}
       >
         <Text style={styles.ButtonText}>Remove</Text>
       </Pressable>
     </View>
     </View>
     </View>
        ))
        
      }
      
    </ScrollView>



{/* 
      <View style={{flexDirection:'row',left:20,top:50}}>
      <SharedElement id ={route.params.id}>
     <Image 
     source={{uri:item.item.itemImg}}
     style={styles.IMG}
     />
     </SharedElement>
     <View style={{marginLeft:25,top:10}} >
       <Text style={{fontSize:18,fontWeight:'bold',color:"black"}}>
         {item.item.itemName}
       </Text>
       <Text style={{fontSize:15,fontWeight:'bold',color:"black"}}>
         {item.item.itemPrice}
       </Text>
       <Pressable
       style={styles.Button}
       >
         <Text style={styles.ButtonText}>Remove</Text>
       </Pressable>
     </View>
     </View> */}
     </View>
     <PanGestureHandler onGestureEvent={gestureHandler}>
     <Animated.View style={[styles.BottomSheet,animatedStyle]}>
     <View style ={styles.line}/>
   
     </Animated.View>
     </PanGestureHandler>
    </View>
  )
}

export default CardList

  
const styles = StyleSheet.create({
    Card:{
  width:"98%",
  height:170,
  top:30,
  borderRadius:20,
  alignSelf:'center',
  shadowColor: "#000",
  shadowOffset: {
    width: 20,
    height: 20,
  },
  shadowOpacity:0,
  shadowRadius: 100,
  elevation:0,
  position:'relative',
  zIndex:-100,

    },
  IMG:{
    width:150,
    height:150,
    resizeMode:'contain'
  },
  Button:{
    width:160,
    height:47,
    borderRadius:10,
    backgroundColor:'rgba(0,0,0,0.9)',
    top:10,
  },
  ButtonText:{
    color:'white',
    textAlign:'center',
    top:11,
    fontSize:16,
    fontWeight:'bold',
    zIndex:-100
  },
  BottomSheet:{
    width:"100%",
    height:"100%",
    backgroundColor:'rgba(0,0,0,0.98)',
    
    borderTopLeftRadius:40,
    borderTopRightRadius:40,
    // ...StyleSheet.absoluteFillObject,
    zIndex:100
    
  },
  line:{
    width:100,
    height:6,
    borderRadius:10,
    backgroundColor:"whitesmoke",
    justifyContent:"center",
    alignSelf:'center',
    top:5
  },
  Gradient:{
    height:170,
    width:"100%",
    borderRadius:30
  }
})
