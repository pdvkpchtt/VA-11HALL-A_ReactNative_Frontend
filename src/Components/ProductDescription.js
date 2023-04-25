import styled from "styled-components";
import { Recipe } from "./Recipe";
import { Category } from "./Category";

const ViewDescriptionBlock = styled.View`
    width: 90%;
    margin: 20px 0;
    padding: 15px;
    background: #000;
    border: 3px solid #e6e6e6;
`
const ViewDescriptionHead = styled.View`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
`
const TextDescriptionHead = styled.Text`
    color: #e6e6e6;
    font-family: 'technofosiano';
    font-size: 20px;
    margin: 0 0 10px 0;
`
const TextDescriptionPrice = styled.Text`
    color: #fc1783;
    opacity: .9;
    font-family: 'technofosiano';
    font-size: 20px;
    margin: 0 0 10px 0;
`
const TextDescription = styled.Text`
    color: #e6e6e6;
    font-family: 'technofosiano';
    margin: 0 0 10px 0;
`

export const ProductDescription = props => {
    return(
        <ViewDescriptionBlock>
            <ViewDescriptionHead>
                <TextDescriptionHead>{props.products.name}</TextDescriptionHead>
                <TextDescriptionPrice>${props.products.price}</TextDescriptionPrice>
            </ViewDescriptionHead>

            <TextDescription>{props.products.description}</TextDescription>

            <Category 
                flavour={props.products.flavour} 
                type={props.products.type} 
                category={props.products.category} 
            />

            <Recipe 
                name={props.products.name}
                a={props.products.a}  
                b={props.products.b}
                d={props.products.d}
                f={props.products.f}
                k={props.products.k}
                recipe={props.products.recipe}
            />
        </ViewDescriptionBlock>
    )
}
