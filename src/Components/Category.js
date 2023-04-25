import styled from "styled-components";

const TextCategory = styled.Text`
    font-family: 'technofosiano';
    color: #e6e6e6;
    margin: 0 0 10px 0;
`
const TextCategoryPink = styled.Text`
    color: #fc1783;
    opacity: .9;
`

export const Category = props => {
    return(
        <TextCategory>
            It's a 
            <TextCategoryPink> {props.flavour}</TextCategoryPink>
            ,
            <TextCategoryPink> {props.type}</TextCategoryPink>
            ,
            <TextCategoryPink> {props.category} </TextCategoryPink>
            drink.
        </TextCategory>
    )
}