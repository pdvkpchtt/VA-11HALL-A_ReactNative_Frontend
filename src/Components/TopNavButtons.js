import { Vibration } from "react-native";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { productSlice } from "../store/productSlice";

const ViewBlock = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const ButtonNav = styled.Pressable`
  width: 50%;
  align-items: center;
  border: 6px solid #0d202f;
  background: #000;
  padding: 7px 15px;
  flex-direction: row;
  display: flex;
  flex: 1;
  justify-content: space-between;
`;

const TextButtonTitle = styled.Text`
  color: #e2ef9f;
  font-family: "technofosiano";
  font-size: 13px;
`;

const ImageIconArrow = styled.Image`
  width: 25px;
  height: 10px;
`;

export const TopNavButtons = (props) => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  var id = props.id;

  const navToNext = () => {
    if (id <= products[products.length - 1].id) {
      id += 1;
      dispatch(productSlice.actions.setSelectedProduct(id));
      props.nav("ProductDetails");
    }
    if (id > products[products.length - 1].id) {
      id = 1;
      dispatch(productSlice.actions.setSelectedProduct(id));
      props.nav("ProductDetails");
    }
    // console.warn(id)
  };
  const navToPrev = () => {
    if (id >= 1) {
      id -= 1;
      dispatch(productSlice.actions.setSelectedProduct(id));
      props.nav("ProductDetails");
    }
    if (id < 1) {
      id = products[products.length - 1].id;
      dispatch(productSlice.actions.setSelectedProduct(id));
      props.nav("ProductDetails");
    }
    // console.warn(id)
  };

  return (
    <ViewBlock>
      <ButtonNav
        onPress={() => {
          navToPrev();
          Vibration.vibrate(30);
        }}
        style={({ pressed }) => [
          { borderRightWidth: 3 },
          pressed && { opacity: 0.6 },
        ]}
      >
        <ImageIconArrow source={require("../img/icons/left.png")} />
        <TextButtonTitle>{props.titleOne}</TextButtonTitle>
      </ButtonNav>
      <ButtonNav
        onPress={() => {
          navToNext();
          Vibration.vibrate(30);
        }}
        style={({ pressed }) => [
          { borderLeftWidth: 3 },
          pressed && { opacity: 0.6 },
        ]}
      >
        <TextButtonTitle>{props.titleTwo}</TextButtonTitle>
        <ImageIconArrow source={require("../img/icons/right.png")} />
      </ButtonNav>
    </ViewBlock>
  );
};
