import styled from "styled-components";
import Modal from "react-native-modal";
import { useState } from "react";
import { Pressable, StatusBar, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { TopNavButtons } from "../Components/TopNavButtons";
import { ProductDescription } from "../Components/ProductDescription";
import { CustomButton } from "../Components/CustomButton";
import { OverlayMenu } from "../Components/OverlayMenu";
import { cartSlice } from "../store/cartSlice";
import { SuccessModal } from "../Components/SuccessModal";

const ViewDetailsBlock = styled.View`
  align-items: center;
  flex: 1;
  /* border: 1px solid red; */
`;

const ViewImage = styled.View`
  width: 100%;
  align-items: center;
  background: #000;
  border: 6px solid #0d202f;
`;

const ImageDetailsBlock = styled.Image`
  width: 50%;
  aspect-ratio: 1;
`;

const ViewButtonsBlock = styled.View`
  margin-top: auto;
  width: 100%;
  align-items: center;
`;

export const ProductDetailsScreen = (props) => {
  const product = useSelector((state) => state.products.selectedProduct);
  const dispatch = useDispatch();

  const [backDrop, setBackDrop] = useState(false);
  const [setSuccess, setSetSuccess] = useState(false);

  const addToCard = () => {
    setSetSuccess(true);

    dispatch(cartSlice.actions.addCartItem({ product: product }));
  };

  return (
    <ViewDetailsBlock style={{ marginTop: StatusBar.currentHeight }}>
      {/* <TopNavButtons nav={props.navigation.navigate} id={product.id} titleOne='Prev cocktail' titleTwo="Next cocktail" /> */}

      <ViewImage>
        <ImageDetailsBlock source={{ uri: product.image }} />
      </ViewImage>

      <ProductDescription products={product} />

      <ViewButtonsBlock>
        <Pressable
          onPress={() => addToCard()}
          style={({ pressed }) => [
            styles.pressableStyle,
            pressed && { opacity: 0.8 },
          ]}
        >
          {({ pressed }) => (
            <CustomButton title={pressed ? "> Add to cart" : "Add to cart"} />
          )}
        </Pressable>
        <Pressable
          onPress={() => {
            setBackDrop(true);
          }}
          style={({ pressed }) => [
            styles.pressableStyle,
            pressed && { opacity: 0.8 },
          ]}
        >
          {({ pressed }) => (
            <CustomButton title={pressed ? "> Book a table" : "Book a table"} />
          )}
        </Pressable>
      </ViewButtonsBlock>

      <Modal
        isVisible={backDrop}
        backdropOpacity={0.8}
        style={{ margin: 0 }}
        backdropTransitionOutTiming={10}
      >
        <OverlayMenu setBackDrop={() => setBackDrop(false)} />
      </Modal>
      <Modal
        isVisible={setSuccess}
        backdropOpacity={0.8}
        style={{ margin: 0 }}
        backdropTransitionOutTiming={10}
      >
        <SuccessModal setSetSuccess={() => setSetSuccess(false)} />
      </Modal>
      {/* 
            {
                backDrop ? 
                <OverlayMenu setBackDrop={() => setBackDrop(false)} /> :
                null
            } */}
    </ViewDetailsBlock>
  );
};

const styles = StyleSheet.create({
  pressableStyle: {
    width: "100%",
    alignItems: "center",
  },
});
