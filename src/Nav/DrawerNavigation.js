import React from "react";
import 'react-native-gesture-handler';
import styled from "styled-components";

import { createDrawerNavigator } from '@react-navigation/drawer';
import { Pressable } from 'react-native';

import { ProductsScreen } from "../Screens/ProductsScreen";
import { CustomDrawer } from "./CustomDrawer";
import { GoToCart } from "../Components/GoToCart";
import { TopCustomersScreen } from "../Screens/TopCustomersScreen";
import { Quiz } from '../Screens/Quiz'

import { useSelector } from "react-redux";
import { selectNumberOfCart } from "../store/cartSlice";

const Drawer = createDrawerNavigator()

const Circle = styled.View`
    background: #e2036d;
    border: 1px solid #ac0253;
    border-radius: 5px;    
    width: 10px;
    height: 10px;
    position: absolute;
    right: 10px;
`

export const DrawerNavigation = props => {
    const isCartEmpty = useSelector(selectNumberOfCart)

    return(
        <Drawer.Navigator
            useLegacyImplementation={true}  // помогает не крашиться react reanimated
            initialRouteName="Proucts"
            screenOptions={({navigation}) => ({
                // headerShown: false,
                headerTintColor: '#e6e6e6',
                headerStyle: { 
                    backgroundColor: '#000', 
                    borderBottomWidth: 2, 
                    borderLeftWidth: 2, 
                    borderRightWidth: 2, 
                    borderColor: '#e6e6e6',
                },
                headerTitleStyle: {
                    fontFamily: "technofosiano",
                    fontSize: 18,
                },
                headerTitleAlign: "center",

                drawerActiveTintColor: '#7d7d7d',
                drawerActiveBackgroundColor: '#000',
                drawerInactiveBackgroundColor: '#000',
                drawerInactiveTintColor: '#e6e6e6', 
                drawerLabelStyle: {
                    fontFamily: 'technofosiano',
                    fontSize: 16,
                },
                headerRight: () => (
                    <Pressable onPress={() => navigation.navigate('ShoppingCart')}>
                        <GoToCart />
                        {
                            isCartEmpty == 0 ?
                            null :
                            <Circle />
                        }
                    </Pressable>
                )
                // headerStatusBarHeight: 0,
            })}
            
            drawerContent={props => <CustomDrawer {...props} />}
        >
            <Drawer.Screen name="Proucts" component={ProductsScreen} 
                options={{
                    title: "Menu.exe",
                }} 
            />
            <Drawer.Screen name="TopCustomersScreen" component={TopCustomersScreen} 
                options={{
                    title: "TopCustomers.exe",
                }} 
            />
            <Drawer.Screen name="..." component={Quiz} 
                options={{
                    title: "....exe",
                }} 
            />

        </Drawer.Navigator>
    )
}