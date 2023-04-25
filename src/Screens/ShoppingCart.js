import { FlatList, StatusBar, View } from "react-native";
import styled from "styled-components";
import { CartItem } from "../Components/CartItem";
import { CustomButton } from "../Components/CustomButton";
import { useSelector } from "react-redux";
import { Pressable } from "react-native";
import { useState } from "react";
import Modal from "react-native-modal";

import { UniversalModal } from "../Components/UniversalModal";
import { WorkInProgress } from "../Components/WorkInProgress";

import { selectSubtotal, selectDeliveryPrice, selectTotal } from "../store/cartSlice";

const ShoppingCartBlock = styled.View`
    flex: 1;
    /* border: 1px solid red; */
`
const ShoppingCartFooter = styled.View`
    align-items: center;
    /* border: 1px solid red; */
`
const ShoppingCartFooterContent = styled.View`
    width: 90%;
    border: 3px solid #e6e6e6;
    background-color: black;
    padding: 15px;
    margin: 0 0 10px 0;
`
const ShoppingCartText = styled.Text`
    color: #e6e6e6;
    font-family: 'technofosiano';
    font-size: 14px;
`
const ShoppingCartPrice = styled.Text`
    color: #fc1783;
    opacity: .9;
    font-family: 'technofosiano';
    font-size: 16px;
`
const ShoppingCartIsEmpty = styled.Text`
    color: #e6e6e6;
    opacity: .7;
    text-align: center;
    margin: auto 0;
    font-family: 'technofosiano';
    font-size: 16px;
`

const shoppingCartTotals = () => {
    const subtotal = useSelector(selectSubtotal)
    const deliveryFee = useSelector(selectDeliveryPrice)
    const total = useSelector(selectTotal)

    return(
        <ShoppingCartFooterContent>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <ShoppingCartText style={{opacity: .6}}>Subtotal: </ShoppingCartText>
                <ShoppingCartPrice style={{opacity: .6}}>${subtotal}</ShoppingCartPrice>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <ShoppingCartText style={{opacity: .6}}>Delivery: </ShoppingCartText>
                <ShoppingCartPrice style={{opacity: .6}}>${deliveryFee}</ShoppingCartPrice>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <ShoppingCartText style={{fontSize: 16}}>Total: </ShoppingCartText>
                <ShoppingCartPrice style={{fontSize: 18}}>${total}</ShoppingCartPrice>
            </View>
        </ShoppingCartFooterContent>
    )
}


export const ShoppingCart = props => {
    const cartItem = useSelector((state) => state.cart.items)
    
    const [modalState, setModalState] = useState(false);

    return(
        <ShoppingCartBlock style={{ marginTop: StatusBar.currentHeight }}>
            {
                cartItem.length == 0 ?
                <ShoppingCartIsEmpty>Shopping cart is emty...</ShoppingCartIsEmpty> :
                <FlatList
                    data={cartItem}
                    renderItem={(item) => <CartItem item={item} />}
                />
            }
            <ShoppingCartFooter>
                
                { shoppingCartTotals() }

                <Pressable onPress={() => setModalState(true)} 
                    style={({pressed}) => [
                        {width: '100%', alignItems: 'center'},
                        pressed && {opacity: .8}
                    ]} 
                >
                    {({pressed}) => (
                        <CustomButton title={pressed ? '> Checkout' : 'Checkout'} isLittle={true} />
                    )}
                </Pressable>
            </ShoppingCartFooter>

            <Modal isVisible={modalState} backdropOpacity={.8} style={{ margin: 0 }} backdropTransitionOutTiming={10}>
                <UniversalModal setModalState={() => setModalState(false)}>
                    <WorkInProgress />
                </UniversalModal>
            </Modal>
        </ShoppingCartBlock>
    )
}