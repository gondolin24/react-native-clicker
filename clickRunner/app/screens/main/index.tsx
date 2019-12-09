import React from 'react';
import {Button, ScrollView, StyleSheet, Text, View} from "react-native";
import FridgeItemView from "../../components/fridgeItemView";

const styles = StyleSheet.create({
    componentContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
    },
    scrollViewStyle: {
        flex: 1
    }
});

const Main = () => {

    return (
        <View style={styles.componentContainer}>
            <View>
                <Text>
                    CURRENT DEVELOPMENT
                </Text>
            </View>

            <ScrollView style={styles.scrollViewStyle}
                        bounces={true}
            >
                <FridgeItemView fridgeItem={"MILK"}/>
                <FridgeItemView fridgeItem={"Cream"}/>
                <FridgeItemView fridgeItem={"Carrots"}/>
                <FridgeItemView fridgeItem={"Steak"}/>
                <FridgeItemView fridgeItem={"perogies"}/>
            </ScrollView>

            <Button title={"hello"} onPress={()=> console.log("hi")}/>

        </View>
    )
};
export default Main;
