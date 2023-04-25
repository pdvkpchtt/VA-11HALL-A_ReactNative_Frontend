import { FlatList, View, Pressable } from 'react-native';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

import { productSlice } from '../store/productSlice';
import { DropDown } from '../Components/DropDown';
import { ProductCard } from '../Components/ProductCard';

const ViewDropDownBlock = styled.Pressable`
  margin: 10px 20px;
  display: flex;
`
const ViewImageContainer = styled.Pressable`
  width: 50%;
  padding: 5px 0;
  align-items: center;
`
const TextSubmit = styled.Text`
  color: #7e7c7e;
  font-family: 'technofosiano';
`

const firstItems = ['All', 'Sour', 'Bubbly', 'Spicy', 'Sweet', 'Bitter']
const secondItems = ['All', 'Classy', 'Promo', 'Classic', 'Manly', 'Girly']

export const ProductsScreen = props => {
    const [firstDropDown, setFirstDropDown] = useState(false);
    const [secondDropDown, setsecondDropDown] = useState(false);
    const [fistSelected, setFistSelected] = useState('All');
    const [secondSelected, setSecondSelected] = useState('All');

    const handleFirstDropDown = (item) => {
      setFistSelected(item)
      setSecondSelected('All')
    }
    const handleSecondDropDown = (item) => {
      setSecondSelected(item)
      setFistSelected('All')
    }

    const dispatch = useDispatch()
    const products = useSelector(state => state.products.products)

    return(        
      <FlatList 
        data={products}
        ListHeaderComponent={() => (
          <ViewDropDownBlock>
            <DropDown name='Flavour' state={firstDropDown} setState={setFirstDropDown} items={firstItems} selected={fistSelected} setSelected={(item) => handleFirstDropDown(item)} />
            <DropDown name='Type' state={secondDropDown} setState={setsecondDropDown} items={secondItems} selected={secondSelected} setSelected={(item) => handleSecondDropDown(item)} />

            <Pressable
              onPress={() => dispatch(productSlice.actions.filterItems({flavour: fistSelected, type: secondSelected}))}
              style={({pressed}) => [
                pressed && {opacity: .6}
              ]} 
            >
              <TextSubmit>{'>'}Submit</TextSubmit>
            </Pressable>
          </ViewDropDownBlock>
        )}
        renderItem={({item}) => (
          <ViewImageContainer  onPress={() => {
              // передаем id продукта
              dispatch(productSlice.actions.setSelectedProduct(item.id))
              props.navigation.navigate('ProductDetails')
            }
          }>
            <ProductCard item={item} />
          </ViewImageContainer>
        )}
        numColumns={2}
      />
    )
}