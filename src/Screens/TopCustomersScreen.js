import styled from "styled-components";
import { CustomerCard } from "../Components/CustomerCard";

import { useSelector } from "react-redux";
import { allCustomers } from "../store/customersSlice";
import { CustomButton } from "../Components/CustomButton";

const View_Content = styled.View`
    flex: 1;
    align-items: center;
`
const View_Sale = styled.View`
    background: #000;
    margin: 20px 0;
    width: 90%;
    border: 2px solid #e6e6e6;
    padding: 3px;
    justify-content: center;
`
const View_SubSale = styled.View`
    border: 1.5px solid #e6e6e6;
    padding: 3px;
    justify-content: center;
`
const Text_Sale = styled.Text`
    font-family: 'technofosiano';
    color: #e6e6e6;
    font-size: 15px;
    text-align: center;
`
const Text_SubSale = styled.Text`
    font-family: 'technofosiano';
    color: #7e7c7e;
    font-size: 13px;
    text-align: center;
    margin: 5px 0 0 0;
`
const Text_Price = styled.Text`
    color: #fc1783;
    opacity: .9;
    font-family: 'technofosiano';
`
const FlatList_Custom = styled.FlatList`
    width: 100%;
`

const SaleText = () => (
    <View_Sale>
        <View_SubSale>
            <Text_Sale>Sale 30% for all our top customres!!!</Text_Sale>
            <Text_SubSale>To become our new top cusomer spend more than <Text_Price>10000$</Text_Price> in a week</Text_SubSale>
        </View_SubSale>
    </View_Sale>
)


export const TopCustomersScreen = () => {
    const customers = useSelector((state) => state.customers.customers)

    return(
        <View_Content>
            <SaleText />

            <FlatList_Custom
                data={customers}
                renderItem={({item}) => (
                    <CustomerCard customres={item} />
                )}
            />
        </View_Content>
    )
}