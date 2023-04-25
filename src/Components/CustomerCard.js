import styled from "styled-components";
import { StyleSheet, View } from "react-native";

const View_Content = styled.View`
    border: 6px solid #0d202f;
    margin: 5px 10px;
    flex-direction: row;
    /* border: 1px solid red; */
`
const View_LeftBlock = styled.View`
    border: 6px solid #0d202f;
    border-left-width: 0px;
    border-top-width: 0px;
    border-bottom-width: 0px;
    align-items: center;
    justify-content: center;
    width: 40%;
`
const Image_ProfileImage = styled.Image`
    width: 100%;
    aspect-ratio: 1;
`
const View_RightBlock = styled.View`
    flex: 1;
    background: #000;
    padding: 10px 10px 0 10px;
`
const Text_Card = styled.Text`
    color: #e6e6e6;
    opacity: .7;
    font-family: 'technofosiano';
`
const Text_SubTextCard = styled.Text`
    color: #e6e6e6;
    opacity: .9;
    font-family: 'technofosiano';
`
const Text_SubTextCard_Unknown = styled.Text`
    color: #e6e6e6;
    opacity: .3;
    font-family: 'technofosiano';
`
const Text_Price = styled.Text`
    color: #fc1783;
    opacity: .9;
    font-family: 'technofosiano';
`

export const CustomerCard = props => {
    return(
        <View_Content>
            <View_LeftBlock>
                <Image_ProfileImage source={{ uri: props.customres.image }} />
            </View_LeftBlock>

            <View_RightBlock>
                <View style={styles.flexStyle}>
                    <Text_Card>Name: </Text_Card>
                    {
                        props.customres.name == 'unknown' ?
                        <Text_SubTextCard_Unknown>{props.customres.name}</Text_SubTextCard_Unknown> :
                        <Text_SubTextCard>{props.customres.name}</Text_SubTextCard>
                    }
                </View>
                <View style={styles.flexStyle}>
                    <Text_Card>Age: </Text_Card>
                    {
                        props.customres.age == 'unknown' ?
                        <Text_SubTextCard_Unknown>{props.customres.age}</Text_SubTextCard_Unknown> :
                        <Text_SubTextCard>{props.customres.age}</Text_SubTextCard>
                    }
                </View>
                <View style={styles.flexStyle}>
                    <Text_Card>Birthday: </Text_Card>
                    {
                        props.customres.birth == 'unknown' ?
                        <Text_SubTextCard_Unknown>{props.customres.birth}</Text_SubTextCard_Unknown> :
                        <Text_SubTextCard>{props.customres.birth}</Text_SubTextCard>
                    }
                </View>
                <View style={styles.flexStyle}>
                    <Text_Card>Gender: </Text_Card>
                    {
                        props.customres.gender == 'unknown' ?
                        <Text_SubTextCard_Unknown>{props.customres.gender}</Text_SubTextCard_Unknown> :
                        <Text_SubTextCard>{props.customres.gender}</Text_SubTextCard>
                    }
                </View>
                <View style={styles.flexStyle}>
                    <Text_Card>Fav drink: </Text_Card>
                    {
                        props.customres.favDrink == 'unknown' ?
                        <Text_SubTextCard_Unknown>{props.customres.favDrink}</Text_SubTextCard_Unknown> :
                        <Text_Price>{props.customres.favDrink}</Text_Price>
                    }
                </View>
            </View_RightBlock>
        </View_Content>
    )
}

const styles = StyleSheet.create({
    flexStyle: {
        flexDirection: 'row'
    }
})