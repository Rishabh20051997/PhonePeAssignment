import { FlatList, Image, Pressable, Text, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { styles } from "./home-screen-style"
import { memo } from "react"

const ProductCard = memo(({ item, navigation }: { item: IProductItem, navigation: any }) => {

    const PriceComponent = () => {
        return <View style={styles.priceContainer}>
        <Text style ={styles.discountText} numberOfLines={2} ellipsizeMode="tail">{item.discountPercentage} %</Text>
        <Text style ={styles.discountPriceText} numberOfLines={2} ellipsizeMode="tail">{item.price}</Text>
        <Text style ={styles.priceText} numberOfLines={2} ellipsizeMode="tail">₹{item.price}</Text>
    </View>
    }

    const BankOfferComponent = () => {
        return <View style={styles.priceContainer}>
        <Text style ={styles.bankDiscountText} numberOfLines={2} ellipsizeMode="tail">₹{item.price}</Text>
        <Text style ={styles.bankDiscountTextSecondary} numberOfLines={2} ellipsizeMode="tail"> with bank offer</Text>
    </View>
    }

    const ProductCountComponent = () => {
        return  <Text style ={styles.stockCountText} numberOfLines={2} ellipsizeMode="tail">Only {item.stock} left</Text>
    }

    const DeliveryDetail = () => {
        return  <Text style ={styles.deliveryDetailText} numberOfLines={2} ellipsizeMode="tail">Free Delivery</Text>
    }

    const LeftContainer = () => {
        return <View style={styles.leftContainer}>
            <Image source={{ uri: item.thumbnail }} style={styles.imageStyle} resizeMode="cover" />
        </View>
    }

    const RightContainer = () => {
        return <View  style={styles.rightContainer}>
            <Text style ={styles.titleText} numberOfLines={2} ellipsizeMode="tail">{item.title}</Text>
           <PriceComponent/>
           <BankOfferComponent/>
           <ProductCountComponent/>
           <DeliveryDetail/>
        </View>
    }

    const onProductItemClicked = () => {
        navigation.navigate('Detail', { item: item})
    }

    const WishListContainer = () => {
        return <View style={{ position: 'absolute', top: 5, right: 5}}>
        <Text>💙</Text>
        </View> 
    }

    return <Pressable 
    onPress={onProductItemClicked}
    style={styles.mainCardLayout}>
        <WishListContainer/>
        <LeftContainer />
        <RightContainer />
    </Pressable>

})

const HomeScreenView = ({
    list = [],
    fetchMoreData
}: IHomeScreenData) => {
    const navigation = useNavigation<any>()

    return <FlatList
        data={list}
        renderItem={({ item }) => <ProductCard item={item} navigation={navigation}/>}
        keyExtractor={item => item.id}
        // initialNumToRender={10}
        // windowSize={21}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.7}
        onEndReached={fetchMoreData}
        removeClippedSubviews={true}
    />
}

export default HomeScreenView