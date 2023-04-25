import styled from "styled-components"

const ViewContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0 7px 0 0;
`
const RedCircle = styled.View`
    background-color: #fc5753;
    width: 11px;
    height: 11px;
    border: 1px solid #df4744;
    border-radius: 5.5px;
    opacity: .8;
    margin: 0 0 0 4px;
`
const YellowCircle = styled.View`
    background-color: #fdbc40;
    width: 11px;
    height: 11px;
    border: 1px solid #de9f34;
    border-radius: 5.5px;
    opacity: .8;
    margin: 0 0 0 4px;
`
const GreenCircle = styled.View`
    background-color: #33c748;
    width: 11px;
    height: 11px;
    border: 1px solid #27aa35;
    border-radius: 5.5px;
    opacity: .8;
`

export const UbuntuRightTopButtons = () => {
    return(
        <ViewContainer>
            <GreenCircle />
            <YellowCircle />
            <RedCircle />
        </ViewContainer>
    )
}