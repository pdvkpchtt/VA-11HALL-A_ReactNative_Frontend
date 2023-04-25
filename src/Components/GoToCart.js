import styled from "styled-components";

const ImageCart = styled.Image`
    width: 26px;
    height: 26px;
    margin: 0 15px 0 0;
`

export const GoToCart = props => {
    return(
        <ImageCart source={require('../img/icons/cartIcon.png')} />
    )
}