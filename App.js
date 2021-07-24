import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import Home from './Component/Home';
import Product from './Component/Product';
import ItemDetails from './Component/ItemDetails';
import CardList from './Component/CardList';
import store from "./app/store"
import { Provider } from 'react-redux';
export default function App() {
  const Stack = createSharedElementStackNavigator();
  return (
    <Provider store={store}>
    <NavigationContainer>
    <Stack.Navigator
   
    initialRouteName="Home">
      <Stack.Screen options={{headerShown:false}} name="Home" component={Home} />
      <Stack.Screen
         options={()=>({
          gestureEnabled : false,
          headerShown:false,
          transitionSpec : {
            open : {animation:'timing', config : {duration:300}},
            close : {animation:'timing', config : {duration:300}}
          },
          cardStyleInterpolator : ({current : {progress}}) => {
              return {
                cardStyle : {
                  opacity : progress,
               
                
                },
              }
          }
        })}
      name="Product" component={Product} />

       <Stack.Screen
        options={()=>({
          gestureEnabled : false,
          headerShown:false,
          title:false,
          transitionSpec : {
            open : {animation:'timing', config : {duration:300}},
            close : {animation:'timing', config : {duration:300}}
          },
          headerStyle:{
            elevation:0,
            shadowOffset:0,
          },
          cardStyleInterpolator : ({current : {progress}}) => {
              return {
                cardStyle : {
                  opacity : progress,
                },
               
              }
          },
  

        })}
       name="ItemDetails" component={ItemDetails} />
       <Stack.Screen name="CardList"
           options={{
             headerShown:false,
             transitionSpec : {
              open : {animation:'timing', config : {duration:300}},
              close : {animation:'timing', config : {duration:300}}
            },
            cardStyleInterpolator : ({current : {progress}}) => {
              return {
                cardStyle : {
                  opacity : progress,
                },
               
              }
          },
           }}
       component={CardList}/>
     
    </Stack.Navigator>
  </NavigationContainer>
  </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
