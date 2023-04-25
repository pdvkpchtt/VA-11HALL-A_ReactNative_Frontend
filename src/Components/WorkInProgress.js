import styled from "styled-components";

const View_Content = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`
const Image_Sprite = styled.Image`
    width: 120px;
    height: 170px;
`
const Text_WorkInProgress = styled.Text`
    font-family: 'technofosiano';
    color: #e6e6e6;
    font-size: 18px;
    margin: 20px 0 0 0;
`


export const WorkInProgress = props => {
    return(
        <View_Content>
            <Image_Sprite source={require('../img/sprites/dorothy.png')} />
            <Text_WorkInProgress>Work in progress...</Text_WorkInProgress>
        </View_Content>
    )
}