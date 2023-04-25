import styled from "styled-components";

const InputOverlayBlock = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    /* border: 1px solid red; */
`
const TextOverlayConsole = styled.Text`
    color: #fff;
    font-family: 'technofosiano';
    font-size: 25px;
    margin: 0 5px 0 0;
`
const InputOverlay = styled.TextInput`
    flex: 1;
    color: #fff;
    font-family: 'technofosiano';
    height: 30px;
`

export const ConsoleLikeInput = props => {
    return(
        <InputOverlayBlock>
            <TextOverlayConsole>{'>'}</TextOverlayConsole>
            <InputOverlay 
                onFocus={props.onFocus}
                showSoftInputOnFocus={false}
                keyboardType={props.numeric ? "numeric" : null}
                maxLength={props.maxLength}
                value={props.value ? `${props.value}` : null}
            />
        </InputOverlayBlock>
    )
}