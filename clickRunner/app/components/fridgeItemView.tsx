import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {TYPOGRAPHY} from "../styles";


const styles = StyleSheet.create({
    componentContainer: {
        flex: 1,
        marginLeft: 24,
        marginRight: 24,
        height: 200,
        borderColor: '#D3D3D3',
        borderRadius: 20,
        marginTop: 16,
        marginBottom: 16,
        elevation: 3
    },
    heading: {
        alignItems: 'center'
    }
});

interface fridgeItemViewProp {
    fridgeItem: string
}

const FridgeItemView = (props: fridgeItemViewProp) => {

    const {
        fridgeItem
    } = props;

    return (
        <View style={styles.componentContainer}>
            <View style={styles.heading}>
                <Text style={TYPOGRAPHY.Heading}>
                    {fridgeItem}
                </Text>
            </View>


        </View>
    )

};
export default FridgeItemView
