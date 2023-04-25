import React from "react"; 
import { View, Text, ImageBackground, Image } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import styled from "styled-components";

const TopDrawer = styled.View`
    display: flex;
    align-items: center;
    background: #222222;
    border: 1px solid #222222;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    top: -40px;
    padding: 40px 0 20px 0;
    margin: 0 0 -30px 0;
`

export const CustomDrawer = props => {
    return(
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props} 
                style={{
                    backgroundColor: '#000', 
                    borderColor: '#e6e6e6', 
                    borderRightWidth: 2,
                    borderTopWidth: 2,
                    borderBottomWidth: 2,
                }}
            >
                {/* <TopDrawer>
                    <Image source={require('../img/drawer/logo.png')}
                        style={{height: 100, width: 190, marginBottom: 15}}
                    />
                </TopDrawer> */}

                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        </View>

    )
}