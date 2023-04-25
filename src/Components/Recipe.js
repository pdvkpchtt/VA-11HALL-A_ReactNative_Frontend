import styled from "styled-components";

const TextRecipeBlock = styled.Text`
    font-family: 'technofosiano';
    color: #e6e6e6;
    font-size: 15px;
`
const TextA = styled.Text`
    color: #f21637;
`
const TextB = styled.Text`
    color: #FFD230;
`
const TextD = styled.Text`
    color: #87acf3;
`
const TextF = styled.Text`
    color: #a6d26d;
`
const TextK = styled.Text`
    color: #47D4D4;
`

export const Recipe = props => {
    return(
        <TextRecipeBlock>
            A {props.name} is:
            { 
                props.a != '-' ?
                <TextA>{'\t\n'+props.a} Adelhyde</TextA> :
                null
            }
            { 
                props.b != '-' ?
                <TextB>{'\t\n'+props.b} Bronson Extract</TextB> :
                null
            }
            { 
                props.d != '-' ?
                <TextD>{'\t\n'+props.d} Powdered Delta</TextD> :
                null
            }
            { 
                props.f != '-' ?
                <TextF>{'\t\n'+props.f} Flanergide</TextF> :
                null
            }
            { 
                props.k != '-' ?
                <TextK>{'\t\n'+props.k} Karmotrine</TextK> :
                null
            }
            {'\t\n'+props.recipe}
        </TextRecipeBlock>
    )
}