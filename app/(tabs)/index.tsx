import { CardMenu } from '@/components/card-menu';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Image, Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const data = [
    {
      id: 1,
      name: 'Hot Coffee',
      icon: require('../../assets/images/coffee-cup.png'),
    },
    {
      id: 2,
      name: 'Drinks',
      icon: require('../../assets/images/cocktail.png'),
    },
    {
      id: 3,
      name: 'Ice Cream',
      icon: require('../../assets/images/ice-cream.png'),
    },
    {
      id: 4,
      name: 'Tea',
      icon: require('../../assets/images/tea.png'),
    }
  ];

  const dataMenu = [
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
    }
  ]

  const [activeMenu, setActiveMenu] = useState(1);
  const [isFocused, setIsFocused] = useState(false)
  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: isFocused ? 16 : 0 }}
        >
          <View style={styles.containerProfile}>
            <View>
              <Text>Hi !</Text>
              <Text style={styles.textPromo}>Which product do you want to buy?</Text>
            </View>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1654110455429-cf322b40a906?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
              style={styles.imageProfile}
            />
          </View>
          <View style={styles.containerSearch}>

            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.containerTextInput}>
                <TextInput
                  onFocus={() => setIsFocused(true)}
                  placeholder="Search for coffe"
                  style={styles.textInput} />
                <Ionicons name="search" size={20} color="gray" style={styles.icon} />
              </View>
            </TouchableWithoutFeedback>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ padding: 16 }}
          >
            {data.map((item) => {
              const isActive = activeMenu === item.id;
              return (
                <View
                  style={[styles.containerMenu, { backgroundColor: isActive ? '#B87C4C' : '#E6E6E6' }]} key={item.id}
                  onTouchStart={() => setActiveMenu(item.id)}>
                  <View style={styles.containerIamgeMenu}>
                    <Image
                      source={item.icon}
                      style={styles.iconMenuSelected} />
                  </View>
                  <Text style={styles.textMenuSelected}>{item.name}</Text>
                </View>
              );
            })}
          </ScrollView>
          <View style={styles.containerPromo}>
            <Text style={styles.textSpecialPromo}>Today's Special</Text>
            <Image
              source={require('../../assets/images/poster.png')}
              style={styles.cardPromo}
            />
          </View>
          <View style={{ marginVertical: 16 }}>
            <Text style={[styles.textSpecialPromo, { marginHorizontal: 16 }]}>Today's Special</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 16 }}
            >
              {dataMenu.map((item) => {
                return <CardMenu item={item} key={item.id} />;
              })}
            </ScrollView>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerProfile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 16,
  },
  textPromo: {
    fontWeight: '800',
  },
  imageProfile: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginLeft: 12,
  },
  containerSearch: {
    marginVertical: 16,
    marginHorizontal: 16,
  },
  containerTextInput: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    height: 45,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    backgroundColor: 'transparent',
  },
  textInput: {
    flex: 1,
    height: '100%',
    paddingVertical: 0,
  },
  icon: {
    marginLeft: 10,
  },
  containerMenu: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
    gap: 8,
    padding: 8,
    borderRadius: 50,
    marginRight: 8,
  },
  containerIamgeMenu: {
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 100
  },
  iconMenuSelected: {
    width: 15,
    height: 15,
  },
  textMenuSelected: {
    color: '#fff',
  },
  containerPromo: {
    marginHorizontal: 16,
    marginVertical: 16,
  },
  textSpecialPromo: {
    fontWeight: '700',
    fontSize: 18,
  },
  cardPromo: {
    width: 'auto',
    height: 160,
    borderRadius: 18,
    resizeMode: 'cover',
    marginTop: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.8,
    elevation: 5,
  }

})

