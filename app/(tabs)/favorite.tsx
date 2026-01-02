import { CardMenu } from "@/components/card-menu";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated from 'react-native-reanimated';

export default function FavoriteScreen() {
    const coffeMenu = [
        {
            id: 1,
            name: 'Coffe Latte',
            image: 'https://images.unsplash.com/photo-1533776992670-a72f4c28235e?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            rating: 4.5,
            price: 15.00,
        },
        {
            id: 2,
            name: 'Cappuccino Cafe',
            image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            rating: 4.7,
            price: 20.00,
        },
        {
            id: 3,
            name: 'Espresso',
            image: 'https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            rating: 4.3,
            price: 10.00,
        },
        {
            id: 4,
            name: 'Americano Coffe',
            image: 'https://images.unsplash.com/photo-1517959105821-eaf2591984ca?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            rating: 4.6,
            price: 12.00,
        },
        {
            id: 5,
            name: 'Coffe Latte',
            image: 'https://images.unsplash.com/photo-1533776992670-a72f4c28235e?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            rating: 4.5,
            price: 15.00,
        },
        {
            id: 6,
            name: 'Cappuccino Cafe',
            image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            rating: 4.7,
            price: 20.00,
        },
        {
            id: 7,
            name: 'Espresso',
            image: 'https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            rating: 4.3,
            price: 10.00,
        },
        {
            id: 8,
            name: 'Americano Coffe',
            image: 'https://images.unsplash.com/photo-1517959105821-eaf2591984ca?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            rating: 4.6,
            price: 12.00,
        }
    ]

    const drinkMenu = [
        {
            id: 1,
            name: 'Matcha',
            image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            rating: 4.5,
            price: 15.00,
        },
        {
            id: 2,
            name: 'Juice Apple',
            image: 'https://images.unsplash.com/photo-1509459331813-67a0c10e527c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            rating: 4.7,
            price: 20.00,
        },
        {
            id: 3,
            name: 'Tea',
            image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            rating: 4.3,
            price: 10.00,
        },
        {
            id: 4,
            name: 'Thai Tea',
            image: 'https://images.unsplash.com/photo-1644203541701-0c534473e616?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            rating: 4.6,
            price: 12.00,
        },
        {
            id: 5,
            name: 'Milkshake',
            image: 'https://images.unsplash.com/photo-1553787499-6f9133860278?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            rating: 4.5,
            price: 15.00,
        },
        {
            id: 6,
            name: 'Milk Tea',
            image: 'https://images.unsplash.com/photo-1620360289473-bfafadc16c57?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            rating: 4.7,
            price: 20.00,
        },
        {
            id: 7,
            name: 'Juice Strawberry',
            image: 'https://plus.unsplash.com/premium_photo-1727119506444-6a9feb551521?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            rating: 4.3,
            price: 10.00,
        },
        {
            id: 8,
            name: 'Orange Juice',
            image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            rating: 4.6,
            price: 12.00,
        }
    ]

    const CoffeMenu = () => {
        return (
            <><Animated.View
                style={styles.containerListMenu}
            >
                {coffeMenu.map((item) => {
                    return (
                        <CardMenu
                            item={item}
                            key={item.id}
                            textTitleStyle={styles.textTile}
                            priceTextStyle={styles.textPrice}
                            ratingTextStyle={styles.textRating}
                            style={styles.containerCardMenu}
                            iconSize={30} />
                    );
                })}
            </Animated.View></>
        )
    }

    const DrinkMenu = () => {
        return (
            <><Animated.View
                style={styles.containerListMenu}
            >
                {drinkMenu.map((item) => {
                    return (
                        <CardMenu
                            item={item}
                            key={item.id}
                            textTitleStyle={styles.textTile}
                            priceTextStyle={styles.textPrice}
                            ratingTextStyle={styles.textRating}
                            style={styles.containerCardMenu}
                            iconSize={30} />
                    );
                })}
            </Animated.View></>
        )
    }

    const [selectedMenu, setSelectedMenu] = useState<'Coffee' | 'Drinks'>('Coffee');


    const handleMenuSelection = (menu: 'Coffee' | 'Drinks') => {
        setSelectedMenu(menu);
    }
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.containerButtonMenu}>
                <TouchableOpacity
                    style={[styles.buttonMenu, { backgroundColor: (selectedMenu === 'Coffee') ? '#B87C4C' : 'transparent' }]} onPress={() => handleMenuSelection('Coffee')}>
                    <Text style={{ color: (selectedMenu === 'Coffee') ? 'white' : 'black' }}>Coffee</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.buttonMenu, { backgroundColor: (selectedMenu === 'Coffee') ? 'transparent' : '#B87C4C' }]} onPress={() => handleMenuSelection('Drinks')}>
                    <Text style={{ color: (selectedMenu === 'Coffee') ? 'black' : 'white' }}>Drinks</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.containerMenu}>
                <View style={styles.mostPopular}>
                    <Text>Most Popular</Text>
                    <TouchableOpacity onPress={() => alert('See all')}>
                        <Text style={{ color: '#85409D' }}>See all</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {selectedMenu === 'Coffee' ? <CoffeMenu /> : <DrinkMenu />}
            {/* <View style={styles.containerMenu}>
                <View style={styles.mostPopular}>
                    <Text>Most Popular</Text>
                    <TouchableOpacity onPress={() => alert('See all')}>
                        <Text style={{ color: '#85409D' }}>See all</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View
                style={styles.containerListMenu}
            >
                {
                    coffeMenu.map((item) => {
                        return (
                            <CardMenu
                                item={item}
                                key={item.id}
                                textTitleStyle={styles.textTile}
                                priceTextStyle={styles.textPrice}
                                ratingTextStyle={styles.textRating}
                                style={styles.containerCardMenu}
                                iconSize={30}
                            />
                        );
                    })
                }
            </View> */}
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    containerButtonMenu: {
        flexDirection: 'row',
        marginTop: 16,
        backgroundColor: 'white',
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 20,
        marginHorizontal: 16,
        gap: 8,
        justifyContent: 'space-between'
    },
    buttonMenu: {
        width: '48%',
        // backgroundColor: '#B87C4C',
        paddingVertical: 8,
        alignItems: 'center',
        borderRadius: 20,
    },
    containerMenu: {
        margin: 16,
    },
    mostPopular: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    containerListMenu: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginHorizontal: 16
    },
    textTile: {
        fontWeight: '400',
    },
    textPrice: {
        fontSize: 16,
        fontWeight: '800',
    },
    textRating: {
        fontSize: 16,
    },
    containerCardMenu: {
        width: '45%',
        marginVertical: 10,
    }

})