import React from 'react'
import { StyleSheet, Text, View,Image ,Pressable} from 'react-native'

const ProductList = ({item,index}) => {
  return (
    <View style={styles.Container}>
     <Image
     source={{uri:item.image}}
     style={styles.IMG}
     />
     <View style={styles.TextList}>
       <Text style={styles.Name}>{item.name}</Text>
       <Text style={{fontSize:16,opacity:0.7}}>{item.price}</Text>
     </View>
    <Pressable style={styles.Button}>
     <Text style={styles.ButtonText}>Shop</Text>
    </Pressable>
    </View>
  )
}

export default ProductList

const styles = StyleSheet.create({
  Container:{
    flexDirection:'row',
    alignItems:'center',
    display:'flex',
    marginLeft:10
  },
  IMG:{
    width:120,
    height:120,
    resizeMode:"contain"
  },
  Button:{
    width:70,
    height:40,
    backgroundColor:'black',
    borderTopLeftRadius:10,
    top:15
    
  },
  ButtonText:{
    color:'white',
    textAlign:'center',
    top:8,
    fontSize:16,
    fontWeight:'bold',
  },
  TextList:{
    top:-15,
    marginLeft:20,
    width:170
  },
  Name:{
    fontSize:19,
    fontWeight:'bold',
    opacity:0.58
  }
})
