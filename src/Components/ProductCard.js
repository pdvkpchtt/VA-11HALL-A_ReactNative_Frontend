import styled from "styled-components"
import { ProductCardOptions } from "./ProductCardOptions"

const ViewCard = styled.View`
    align-items: center;
`
const ImageCard = styled.Image`
    width: 50%;
    aspect-ratio: 1;
`
const TextHeadCard = styled.Text`
    color: #e6e6e6;
    font-family: 'technofosiano';
    font-size: 16px;
    margin: 0 0 5px 0;
`

export const ProductCard = props => {
    return(
        <ViewCard>
            <ImageCard source={{ uri: props.item.image }} />  
            <TextHeadCard>{props.item.name}</TextHeadCard>

            <ProductCardOptions head='Flavour' option={props.item.flavour} />
            <ProductCardOptions head='Type' option={props.item.type} />
            <ProductCardOptions head='Price' option={props.item.price} />
        </ViewCard>
    )
}