import React, { useState } from 'react'
import { StyleSheet, Text, View,Image,Pressable } from 'react-native'
import { SharedElement } from 'react-navigation-shared-element';
import ItemHeader from './ItemHeader';
import { setItem} from "../features/ItemSlice"
import { useDispatch } from 'react-redux';
const ItemDetails = ({route}) => {
  const dispatch = useDispatch();
  const AddToCard=()=>{
  
    dispatch(setItem({
      item:route.params,
      array:route.params,
    }))

  }
  return (
    <View style={{backgroundColor:'#fff',flex:1}}>
      <ItemHeader image={route.params.itemImg} name={route.params.itemName} price={route.params.itemPrice}id={route.params.itemId}/>
        <SharedElement id ={route.params.itemId}>
     <Image
     source={{uri:route.params.itemImg}}
     style={styles.Image}
     />
     </SharedElement>
     <View style={styles.TextList}>
       <Text style={styles.Name}>{route.params.itemName}</Text>
       <Text style={styles.Price}>{route.params.itemPrice}</Text>
        <View style={{flexDirection:'row',marginLeft:250,top:-16}}>
          {
            Array(5).
            fill().map((v,i)=>
            <Text key={i}>⭐</Text>
            )
          }
        </View>
        <Text style={styles.Color}>Colors</Text>
        <View style={styles.BoxList}>
        <View style={styles.Box1}/>
        <View style={styles.Box2}/>
        <View style={styles.Box3}/>
        <View style={styles.Box4}/>
        </View>
        <Text style={styles.Description}>Description</Text>
        <Text numberOfLines={2} style={styles.DescriptionText}>For ridiculously good value, high quality sofas, chairs & beds in glorious fabrics, visit sofa.com. Hop on over to create your perfect sofa or bed today.</Text>
        <View style={{flexDirection:'row',top:40}}>
          <Text style={styles.Buy}>Buy</Text>
          <Text style={styles.Catagori1}>325</Text>
        </View>
        <View style={{flexDirection:'row',top:40}}>
          <Text style={styles.Buy}>Catagories</Text>
          <Text style={styles.Catagori2}>Furniture Accessories </Text>
        </View>
        <Pressable style={styles.Button} onPress={AddToCard}>
          <Text style={styles.ButtonText}>ADD TO CARD</Text>
        </Pressable>
     </View>
    </View>
  )
}
ItemDetails.sharedElements = (route) => {
 
  return [
    {
      id:route.params.itemId,
      animation: 'move',
      resize: 'clip'
    }
  ];
}
export default ItemDetails

const styles = StyleSheet.create({
  Image:{
    width:200,
    height:200,
    resizeMode:'contain',
    left:110,
    top:40
  },
  Name:{
    fontSize:23,
    fontWeight:'bold',
    color:'black'
  },
  Price:{
    fontSize:18,
    fontWeight:'bold',
    color:'red',
    opacity:0.7,
    top:5
  },
  TextList:{
    marginLeft:30,
    top:30
  },
  Color:{
    fontSize:16,
    fontWeight:'bold',
    top:10
  },
  Box1:{
    backgroundColor:'red',
    width:65,
    height:65,
    borderRadius:32,
    top:20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.80,
    shadowRadius: 60,
    elevation:10
  },
  BoxList:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly',
    marginLeft:-40
  },
  Box2:{
    backgroundColor:'gray',
    width:50,
    height:50,
    borderRadius:25,
    top:20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.80,
    shadowRadius: 60,
    elevation:10
  },
  Box3:{
    backgroundColor:'orange',
    width:50,
    height:50,
    borderRadius:25,
    top:20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.80,
    shadowRadius: 60,
    elevation:10
  },
  Box4:{
    backgroundColor:'yellow',
    width:50,
    height:50,
    borderRadius:25,
    top:20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.80,
    shadowRadius: 60,
    elevation:10
  },
  Description:{
    fontSize:17,
    fontWeight:"bold",
    color:'black',
    top:30
  },
  DescriptionText:{
    fontSize:14,
    fontWeight:'bold',
    color:'black',
    top:35,
    opacity:0.7
  },
  Buy:{
    marginRight:60,
    fontSize:15,
    color:'black',
    fontWeight:'bold',
    top:10
  },
  Catagori1:{
    fontSize:16,
    fontWeight:'bold',
    marginLeft:50,
    top:10,
    opacity:0.7
  }
  ,
  Catagori2:{
    fontSize:16,
      fontWeight:'bold',
      top:10,
      opacity:0.7
  },
  Button:{
    width:360,
    height:48,
    backgroundColor:'black',
    top:70,
    alignSelf:'center',
    marginLeft:-20,
    shadowColor: "#000",
    shadowOffset: {
      width: 20,
      height: 20,
    },
    shadowOpacity:1,
    shadowRadius: 100,
    elevation:15
  },
  ButtonText:{
    color:'white',
    textAlign:"center",
    top:12,
    fontSize:16,
    fontWeight:'bold'
  }

})
