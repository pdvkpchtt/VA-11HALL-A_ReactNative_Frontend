import { Pressable } from "react-native";
import styled from "styled-components";
import { Category } from "./Category";

import { useDispatch } from "react-redux";
import { cartSlice } from "../store/cartSlice";

const CartItemBlock = styled.View`
    border: 6px solid #0d202f;
    margin: 5px 10px;
    flex-direction: row;
`
const CartLeftBlock = styled.View`
    border: 6px solid #0d202f;
    border-left-width: 0px;
    border-top-width: 0px;
    border-bottom-width: 0px;
    align-items: center;
    justify-content: center;
    width: 30%;
    /* background: #000; */
`
const CartImage = styled.Image`
    width: 100%;
    aspect-ratio: 1;
`
const CartRightBlock = styled.View`
    flex: 1;
    background: #000;
    padding: 10px 10px 0 10px;
`
const CartHead = styled.Text`
    color: #e6e6e6;
    font-family: 'technofosiano';
    font-size: 18px;
`
const CartItemBottom = styled.View`
    margin-top: auto;
    flex-direction: row;
    justify-content: space-between;
`
const CartItemCounter = styled.View`
    /* border: 1px solid red; */
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 10px 0 5px 0;
`
const CartItemCounterIcon = styled.Text`
    /* border: 1px solid red; */
    color: #e6e6e6;
    font-family: 'technofosiano';
    font-size: 16px;
    padding: 5px 7px 0 7px;
    opacity: .5;
`
const  CartItemPrice = styled.Text`
    color: #fc1783;
    opacity: .9;
    font-family: 'technofosiano';
    font-size: 20px;
    margin: auto 0 10px 0;
`

export const CartItem = props => {
    const item = props.item.item

    const dispatch = useDispatch()

    const plusButton = () => {
        dispatch(cartSlice.actions.changeQuantity({productId: item.product.id, amount: 1}))
    }

    const minusButton = () => {
        dispatch(cartSlice.actions.changeQuantity({productId: item.product.id, amount: -1}))
    }

    return(
        <CartItemBlock>
            <CartLeftBlock>
                <CartImage source={{ uri: item.product.image }} />
            </CartLeftBlock>

            <CartRightBlock>
                <CartHead>{item.product.name}</CartHead>
                <Category 
                    flavour={item.product.flavour} 
                    type={item.product.type} 
                    category={item.product.category} 
                />

                <CartItemBottom>
                    <CartItemCounter>
                    <Pressable onPress={() => minusButton()} 
                            style={({pressed}) => [
                                {justifyContent: 'center', alignItems: 'center'},
                                pressed && {opacity: .5}
                            ]} 
                        >
                            <CartItemCounterIcon style={{fontSize: 24, opacity: 1}}>
                                -
                            </CartItemCounterIcon>
                        </Pressable>

                        <CartItemCounterIcon>
                            {item.countCart}
                        </CartItemCounterIcon>

                        <Pressable onPress={() => plusButton()} 
                            style={({pressed}) => [
                                {justifyContent: 'center', alignItems: 'center'},
                                pressed && {opacity: .5}
                            ]} 
                        >
                            <CartItemCounterIcon style={{fontSize: 24, opacity: 1}}>
                                +
                            </CartItemCounterIcon>
                        </Pressable>
                    </CartItemCounter>

                    <CartItemPrice>${item.product.price * item.countCart}</CartItemPrice>
                </CartItemBottom>
            </CartRightBlock>
        </CartItemBlock>
    )
}