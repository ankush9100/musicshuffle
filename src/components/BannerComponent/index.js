import React from 'react'
import { View, Text, FlatList, StyleSheet, ImageBackground, Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window');
export default function Banner() {
    let banners = [
        {
            title: 'Metal City',
            subtitle: 'Dead April',
            image: require('../../assets/images/b1.jpg')
        },
        {
            title: 'Return to Forever',
            subtitle: 'Dead April',
            image: require('../../assets/images/b2.jpg')
        },
        {
            title: 'Your love remain',
            subtitle: 'The Rock music',
            image: require('../../assets/images/b4.jpg')
        }
    ]
    return (
        <View style={styles.container}>
            <FlatList
                data={banners}
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.banner}>
                            <ImageBackground style={styles.bannerImage} source={item.image}></ImageBackground>
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
    banner: {
        height: 200,
        width: width,
        borderRadius: 20
    },
    bannerImage: {
        height: 200,
        width: '100%',
        borderRadius: 20
    }
})