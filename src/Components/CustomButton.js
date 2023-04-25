import styled from "styled-components";
import { StyleSheet, Text } from "react-native";

const ViewButtonBlock = styled.View`
    width: 90%;
    padding: 3px;
    background: #000;
    border: 2px solid #e6e6e6;
    margin: 0 0 10px 0;
`

export const CustomButton = props => {
    return(
        <ViewButtonBlock>
            <Text style={ !props.isLittle ? styles.buttonBig : styles.buttonLittle }>{props.title}</Text> 
        </ViewButtonBlock>
    )
}

const styles = StyleSheet.create({
    buttonBig: {
        color: '#e6e6e6',
        fontFamily: 'technofosiano',
        fontSize: 16,
        borderColor: '#e6e6e6',
        borderTopWidth: 1.5,
        borderBottomWidth: 1.5,
        borderLeftWidth: 1.5,
        borderRightWidth: 1.5,
        textAlign: 'center',
        padding: 15
    },
    buttonLittle: {
        color: '#e6e6e6',
        fontFamily: 'technofosiano',
        textAlign: 'center',
        padding: 8
    }
})

// const TextButtonTitle = styled.Text`
//     color: #e6e6e6;
//     font-family: 'technofosiano';
//     font-size: 16px;
//     border: 1.5px solid #e6e6e6;
//     text-align: center;
//     padding: 15px;
// `
// const TextButtonLittle = styled.Text`
//     color: #e6e6e6;
//     font-family: 'technofosiano';
//     text-align: center;
//     padding: 8px;
// `
