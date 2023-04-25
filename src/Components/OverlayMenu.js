import { Pressable, View, StyleSheet, Vibration } from "react-native";
import styled from "styled-components";
import { ConsoleLikeInput } from "./ConsoleLikeInput";
import { CustomButton } from "./CustomButton";
import { useState } from "react";
import Animated, { SlideInDown, SlideOutDown, SlideInRight, SlideOutLeft, AnimationLayout, Layout } from "react-native-reanimated";

const ViewOverlayBackdrop = styled.View`
    flex: 1;
    width: 100%;
    height: 100%;
    /* background: rgba(0, 0, 0, 0.8); */
    position: absolute;
    align-items: center;
    justify-content: center;
`
const ViewOverlayBlock = styled.View`
    width: 80%;
    height: 50%;
    background: #000;
    border: 2px solid #e6e6e6;
    padding: 3px;
`
const ViewContentBlock = styled.View`
    flex: 1;
    border: 1.5px solid #e6e6e6;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const TextOverlayHead = styled.Text`
    color: #e6e6e6;
    font-family: 'technofosiano';
    font-size: 20px;
    text-align: center;
`
const TextOverlayOptional = styled.Text`
    color: #4276ac;
    font-family: 'technofosiano';
    font-size: 16px;
    margin: 10px 0 0 0;
`
const TextOverlayInvalid = styled.Text`
    color: #d01e1e;
    font-family: 'technofosiano';
    font-size: 13px;
    text-align: center;
`
const TextOverlayClose = styled.Text`
    color: #7e7c7e;
    font-family: 'technofosiano';
    font-size: 13px;
    text-align: center;
`
const ViewKeyboardContainer = styled.View`
    flex: 1;
    border: 1.5px solid #e6e6e6;
    padding: 20px 50px 22px 50px;
    margin-bottom: -4px;
    align-items: center;
`
const Keyboard = styled.View`
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
`
const KeysBock = styled.Text`
    text-align: center;
    justify-content: center;
    color: #e6e6e6;
    font-family: 'technofosiano';
    border: 1px solid #e6e6e6;
    padding: 10px 25px;
    font-size: 20px;
    margin: 3px;
`
const TextConfirmed = styled.Text`
    color: #39c139;
    font-family: 'technofosiano';
    font-size: 18px;
    text-align: center;
    margin-bottom: auto;
    margin-top: auto;
`

export const OverlayMenu = props => {
    const avalibleTables = [2, 4, 7]

    const [keyboardState, setKeyboardState] = useState(false);
    const [validState, setValidState] = useState(true);
    const [orderDone, setOrderDoneState] = useState(false);
    const [whichInput, setWhichInput] = useState(0);
    const [valueStateOne, setValueStateOne] = useState('');
    const [valueStateTwo, setValueStateTwo] = useState('');

    const renderKeys = () => {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((item, key) => (
            <Pressable key={key}
                onPress={ 
                    whichInput == 0 ?
                    item == 'Clear..' ? () => setValueStateOne('') : () => setValueStateOne(valueStateOne + `${item}`) :
                    item == 'Clear..' ? () => setValueStateTwo('') : () => setValueStateTwo(valueStateTwo + `${item}`)
                } 
                onPressIn={
                    Vibration.vibrate(20)
                }
                style={({pressed}) => [
                    pressed && {opacity: .6}
                ]} 
            >
                <KeysBock>
                    {item}
                </KeysBock>
            </Pressable>
        ))
    }

    const confirmHandler = () => {
        let valid = false
        for (const table of avalibleTables) {
            if (valueStateOne == table) {
                valid = true
            }
        }

        if (valueStateOne == '' || valueStateTwo == '') {
            valid = false
        }

        setValidState(valid)
        setOrderDoneState(valid)
    }

    return(
        <ViewOverlayBackdrop>
            <ViewOverlayBlock>
                {
                    !orderDone ?

                    <ViewContentBlock>
                        <View>
                            <TextOverlayHead>Select a table</TextOverlayHead>
                            
                            <TextOverlayOptional>Avalible tables: {
                                avalibleTables.map((item, key)=>{
                                    return(
                                        <TextOverlayOptional key={key}>{item}{key != avalibleTables.length - 1 ? ', ' : ':'}</TextOverlayOptional>
                                    )})
                            }</TextOverlayOptional>
                            <ConsoleLikeInput 
                                onFocus={() => {setKeyboardState(true), setWhichInput(0)}} 
                                value={valueStateOne} 
                                onChangeText={() => null} 
                                numeric={true} 
                                maxLength={2} 
                            />

                            <TextOverlayOptional>Enter your phone number:</TextOverlayOptional>
                            <ConsoleLikeInput 
                                onFocus={() => {setKeyboardState(true), setWhichInput(1)}} 
                                value={valueStateTwo} 
                                numeric={true} 
                                maxLength={11} 
                            />
                        </View>
                        
                            {
                                validState ? 
                                <TextOverlayClose>
                                    We'll call you back {'\n'}to confirm your booking.
                                </TextOverlayClose> :
                                <TextOverlayInvalid>
                                    Error{'\n'}This table is unavailable {'>:(\n'}or{'\n'}input fileds are empty
                                </TextOverlayInvalid>
                            }
                        

                        <View>
                            <Pressable onPress={() => confirmHandler()}
                                style={({pressed}) => [
                                    styles.pressableStyle,
                                    pressed && {opacity: .8}
                                ]} 
                            >
                                {({pressed}) => (
                                    <CustomButton title={pressed ? '> Confirm' : 'Confirm'} isLittle={true} />
                                )}
                            </Pressable>
                            <Pressable onPress={props.setBackDrop}
                                style={({pressed}) => [
                                    styles.pressableStyle,
                                    pressed && {opacity: .6}
                                ]} 
                            >
                                <TextOverlayClose >{">"} Click here to go back...</TextOverlayClose>
                            </Pressable>
                        </View> 
                    </ViewContentBlock> :
                    <ViewContentBlock style={{justifyContent: 'center'}}>
                        <TextConfirmed>
                            Confirmed!
                        </TextConfirmed>
                        <Pressable onPress={props.setBackDrop}
                                style={({pressed}) => [
                                    styles.pressableStyle,
                                    pressed && {opacity: .6}
                                ]} 
                            >
                                <TextOverlayClose >{">"} Click here to go back...</TextOverlayClose>
                        </Pressable>
                    </ViewContentBlock>
                }
            </ViewOverlayBlock>
                
            {/* keyboard */}
            {
                keyboardState ?
                <Animated.View style={styles.ViewKeyboardBlock} entering={SlideInDown} exiting={SlideOutDown}>
                    <ViewKeyboardContainer>
                        <Keyboard>
                            {
                                renderKeys()
                            }
                        </Keyboard>
                        

                        <TextOverlayClose onPress={
                            whichInput == 0 ?
                                () => setValueStateOne('') :
                                () => setValueStateTwo('')
                            } 
                            style={{marginTop: 20}} 
                        >
                                {">"} Clear...
                        </TextOverlayClose>
                        <Pressable onPress={() => setKeyboardState(false)}
                                style={({pressed}) => [
                                    { marginTop: 20 },
                                    pressed && {opacity: .6}
                                ]} 
                            >
                                <TextOverlayClose >{">"} Click here to close...</TextOverlayClose>
                        </Pressable>
                    </ViewKeyboardContainer>
                </Animated.View> :
                null
            }
        </ViewOverlayBackdrop>
    )
}

const styles = StyleSheet.create({
    ViewKeyboardBlock: {
        position: 'absolute',
        width: '100%',
        backgroundColor: '#000',
        paddingBottom: 20,
        paddingLeft: 3,
        paddingRight: 3,
        paddingTop: 3,
        marginBottom: -20,
        bottom: 0,
        borderColor: '#e6e6e6',
        borderTopWidth: 2,
        borderLeftWidth: 2,
        borderBottomWidth: 2,
        borderRightWidth: 2
    },
    pressableStyle: {
        alignItems: 'center',
    }
})

// const ViewKeyboardBlock = styled.View`
//     position: absolute;
//     width: 100%;
//     background: #000;
//     border: 2px solid #e6e6e6;
//     padding: 3px 3px 20px 3px;
//     margin-bottom: -20px;
//     bottom: 0;
// `