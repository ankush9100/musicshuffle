import React from 'react'
import { View, Text, StyleSheet, FlatList, ImageBackground, TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/Foundation';
import Icons from 'react-native-vector-icons/AntDesign';
export default function Categories({ navigation }) {
    let categories = [
        {
            name: 'Rock',
            image: require('../../assets/images/c1.jpg')
        },
        {
            name: 'Rock',
            image: require('../../assets/images/c2.jpg')
        },
        {
            name: 'Rock',
            image: require('../../assets/images/c3.jpg')
        },
        {
            name: 'Rock',
            image: require('../../assets/images/c4.jpg')
        },
        {
            name: 'Rock',
            image: require('../../assets/images/c5.jpg')
        }
    ]
    return (
        <View>
            <Text style={styles.title}>Categories</Text>

            <FlatList
                showsHorizontalScrollIndicator={false}
                data={categories}
                horizontal={true}
                contentContainerStyle={{
                    margin: 10,
                    marginLeft: 15
                }}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.surface}>
                            <TouchableWithoutFeedback onPress={() => navigation.navigate('CategoryDetails', { item: item })}>
                                <ImageBackground source={item.image} style={styles.img} blurRadius={3}>
                                    <Icon name="music" size={22} color="#fff" />
                                    <View style={{ position: 'absolute', bottom: 10, width: "100%", marginLeft: 10, height: 35, backgroundColor: 'white', opacity: 0.3, borderRadius: 50 }}>

                                    </View>
                                    <Icons name="play" color="white" size={20} style={{ position: 'absolute', bottom: 17, right: 20 }} />
                                    <Text style={styles.name}>{item.name}</Text>
                                </ImageBackground>
                            </TouchableWithoutFeedback>
                        </View>
                    )
                }}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        margin: 10,
        marginLeft: 15
    },
    surface: {
        marginRight: 25,
        width: 150,
        height: 150,
        elevation: 15,
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: 150,
        height: 150,
        borderRadius: 10,
        padding: 10
    },
    name: {
        position: 'absolute',
        bottom: 16,
        color: '#fff',
        left: 25,
        fontWeight: 'bold',
        fontSize: 14
    }
})
