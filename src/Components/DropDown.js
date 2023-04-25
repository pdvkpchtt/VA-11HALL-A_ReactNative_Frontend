import styled from "styled-components"
import { useState } from "react"
import { Pressable } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";

const View_DropDown = styled.View`
    display: flex;
    flex-direction: row;
`
const View_Text = styled.Text`
    color: #e6e6e6;
    font-family: 'technofosiano';
    font-size: 14px;
    margin: 0 0 5px 0;
`
const View_TextType = styled.Text`
    flex: 1;
    color: #fc1783;
    opacity: .7;
    font-family: 'technofosiano';
    margin: 0 0 0 10px;
`

export const DropDown = ({ name = '', items = [], selected = '', state = false, setState = () => {}, setSelected = () => {} }) => {

    const handleItemPress = item => {
        setState(false)
        setSelected(item)
    }

    const renderItems = () => {
        return items.map((item, key) => (
            <Pressable
                key={key}
                onPress={() => handleItemPress(item)}
                style={({pressed}) => [
                    pressed && {opacity: .5}
                ]} 
            >
                <View_TextType>{item}</View_TextType>
            </Pressable>
        )) 
    }

    return(
        <View_DropDown>
            <View_Text>{name}:</View_Text>

            {
                state == true ?
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    { renderItems() }
                </ScrollView> :
                <Pressable
                    onPress={() => setState(!state)}
                    style={({pressed}) => [
                        pressed && {opacity: .5}
                    ]} 
                >
                    <View_TextType>{selected}</View_TextType>
                </Pressable>
            }

        </View_DropDown>
    )
}