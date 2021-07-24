import React from 'react'
import { StyleSheet, Text, View,FlatList,Image,Pressable } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import ProductList from './ProductList';
import { useNavigation } from '@react-navigation/native';
import Header from './Header';
import { SharedElement } from 'react-navigation-shared-element';
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
}
]
const Home = () => {
  const navigation = useNavigation();
  const renderItem=({item,index})=>{
    return(
      <View style={{height:270}}>
        <Pressable onPress={()=>navigation.push("Product",{
        item:item

        })}  >
        <SharedElement id={item.id}>
        <Image
        source={{uri:item.image}}
        style={styles.Image}
        />
        </SharedElement>
        </Pressable>
        <Text style={styles.Name}>{item.name}</Text>
        <Text style={styles.Price}>{item.price}</Text>
      </View>
    )
  }
  const renderItem2=({item,index})=>{
    return(
     <ProductList item={item} index={index} />
    )
  }
  return (
    <View style={styles.Container}>
    
    <Header/>
     <View >
       <FlatList
       data={data}
       keyExtractor={(data)=>data.id}
       renderItem={renderItem}
       horizontal
       showsHorizontalScrollIndicator={false}
       />
     </View>
     <View style={styles.Trending}>
       <Text style={styles.TrendingText}>Trending</Text>
       <AntDesign name="appstore1" style={{opacity:0.7}} size={24} color="black" />
     </View>
     <FlatList
       data={data}
       keyExtractor={(data)=>data.id}
       renderItem={renderItem2}
       showsVerticalScrollIndicator={false}
       />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  Container:{
    flex:1,
  },

  Image:{
    width:210,
    height:210,
    resizeMode:'contain',
    marginRight:20,
    top:-15

  },
  Name:{
    fontSize:16,
    fontWeight:'bold',
    color:'black',
    marginLeft:20,
    top:-15

  },
  Price:{
    fontSize:14,
    fontWeight:'bold',
    color:'gray',
    marginLeft:20,
    top:-15
  },
 
  Trending:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginLeft:10,
    marginRight:10,
  },
  TrendingText:{
    fontSize:20,
    fontWeight:'bold'
  }
})
