import { Ionicons } from '@expo/vector-icons';
import { DimensionValue, Image, ImageStyle, StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";

export interface CoffeeItem {
    id: number;
    name: string;
    image: string;
    rating: number;
    price: number;
}

interface CardMenuProps {
    item: CoffeeItem;
    width?: DimensionValue;
    marginVertical?: DimensionValue;
    style?: ViewStyle;
    containerImgMenuStyle?: ViewStyle;
    imgMenuStyle?: ImageStyle;
    textTitleStyle?: TextStyle;
    priceContainerStyle?: ViewStyle;
    ratingTextStyle?: TextStyle;
    priceTextStyle?: TextStyle;
    iconSize?: number;
}


export function CardMenu({ item, style, containerImgMenuStyle, imgMenuStyle, textTitleStyle, priceContainerStyle, ratingTextStyle, priceTextStyle, iconSize = 24 }: CardMenuProps,) {
    const { name, image, rating, price } = item;
    return (
        <View style={[styles.cardMenu, style]} >
            <View style={[styles.containerImgMenu, containerImgMenuStyle]}>
                <Image
                    source={{ uri: image }}
                    style={[styles.imgMenu, imgMenuStyle]}
                />
            </View>
            <Text style={[{ textAlign: 'center', marginVertical: 10 }, textTitleStyle]}>{name}</Text>
            <View style={[{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }, priceContainerStyle]}>
                <View>
                    <Text style={[{ fontSize: 12 }, ratingTextStyle]}>⭐ {rating}</Text>
                    <Text style={[{ fontWeight: '600', color: '#B87C4C' }, priceTextStyle]}>${price}</Text>
                </View>
                <Ionicons name="basket" size={iconSize} color="#B87C4C" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardMenu: {
        backgroundColor: '#fff',
        minHeight: 200,
        padding: 10,
        borderRadius: 10,
        width: 150,
        marginVertical: 16,
        marginRight: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.8,
        elevation: 5,
    },
    containerImgMenu: {
        width: '100%',
        height: 110,
        backgroundColor: 'white',
        borderRadius: 10
    },
    imgMenu: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        resizeMode: 'cover'
    }
})