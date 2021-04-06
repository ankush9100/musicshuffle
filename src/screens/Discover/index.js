import React from 'react'
import { View, Text, StyleSheet, StatusBar, ScrollView, TextInput } from 'react-native'
import Banner from '../../components/BannerComponent'
import Categories from '../../components/Categoriescomponent/Categories'
import Songs from '../../components/SongsComponent'
import Icon from 'react-native-vector-icons/EvilIcons';
export default function Discover({ navigation }) {

    return (
        <ScrollView >
            <StatusBar barStyle="dark-content" />
            <Text style={styles.title}>Discover</Text>
            <View style={{ flexDirection: 'row' }}>
                <TextInput placeholder="Search" style={styles.textInput} />
                <Icon name="search" color="gray" size={30} style={{ position: 'absolute', right: 20, top: 12 }} />

            </View>
            <Text style={styles.title}>Recently Searched</Text>
            <Songs title="Recently Searched" navigation={navigation} />
            <Categories navigation={navigation} />

        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    title: {
        marginTop: 30,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        margin: 10,
        marginLeft: 15
    },
    textInput: {
        backgroundColor: '#e5e5e5',
        width: '95%',
        borderRadius: 40,
        paddingLeft: 20,
        fontSize: 20,
        marginLeft: 10

    }
})