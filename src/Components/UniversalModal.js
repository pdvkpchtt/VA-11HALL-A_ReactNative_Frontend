import styled from "styled-components";
import { Pressable } from "react-native";

const ViewOverlayBackdrop = styled.View`
    flex: 1;
    width: 100%;
    height: 80%;
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
const TextOverlayClose = styled.Text`
    color: #7e7c7e;
    font-family: 'technofosiano';
    font-size: 13px;
    text-align: center;
`

export const UniversalModal = props => {
    return(
        <ViewOverlayBackdrop>
            <ViewOverlayBlock>
                <ViewContentBlock style={{justifyContent: 'center'}}>
                    {props.children}

                    <Pressable onPress={props.setModalState}
                        style={({pressed}) => [
                            {alignItems: 'center'},
                            pressed && {opacity: .6}
                        ]} 
                    >
                            <TextOverlayClose>{">"} Click here to go back...</TextOverlayClose>
                    </Pressable>
                </ViewContentBlock>
            </ViewOverlayBlock>
        </ViewOverlayBackdrop>
    )
}