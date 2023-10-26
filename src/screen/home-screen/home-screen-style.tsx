import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainCardLayout: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        elevation: 2,
        shadowColor: '#ccc',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        margin: 8
    },
    leftContainer: {
        flex: 0.3
    },
    imageStyle: {
     width: '100%', height: 100
    },
    rightContainer: {
        flex: 0.7,
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    priceContainer: { flexDirection: 'row', flexShrink: 1, overflow: 'hidden'},
    titleText: {
        fontSize: 16,
        color: '#333',
        paddingVertical:2,
        marginRight: 5
    },
    discountText: {
        fontSize: 14,
        color: 'green'
    },
    discountPriceText: {
        fontSize: 14,
        color: '#ccc',
        textDecorationLine: 'line-through',
        paddingLeft: 10
    },
    priceText: {
        fontSize: 14,
        color: '#111', 
        fontWeight: '700',
        paddingLeft: 10
    },
    bankDiscountText: {
        fontSize: 10,
        color: 'green',
        paddingVertical:2
    },
    bankDiscountTextSecondary: {
        fontSize: 10,
        color: '#333',
        paddingVertical:2
    },
    stockCountText: {
        fontSize: 10,
        color: 'red',
        paddingVertical:2,
        fontWeight: '600',
    },
    deliveryDetailText: {
        fontSize: 10,
        color: '#333',
    }
})