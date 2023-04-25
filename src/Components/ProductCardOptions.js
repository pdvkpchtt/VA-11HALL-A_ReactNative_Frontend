import styled from "styled-components";

const ViewTextCard = styled.View`
    flex-direction: row;
`
const TextCard = styled.Text`
    color: #e6e6e6;
    opacity: .5;
    font-family: 'technofosiano';
`
const SubTextCard = styled.Text`
    color: #e6e6e6;
    opacity: .7;
    font-family: 'technofosiano';
`
const TextPriceCard = styled.Text`
    color: #fc1783;
    opacity: .7;
    font-family: 'technofosiano';
`

export const ProductCardOptions = props => {
    return(
        <ViewTextCard>
            <TextCard>{props.head}: </TextCard>
            {
                props.head != 'Price' ?
                <SubTextCard>{props.option}</SubTextCard> :
                <TextPriceCard>${props.option}</TextPriceCard>
            }
        </ViewTextCard>
    )
}