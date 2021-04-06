// import React, { useState } from 'react'
// import { View, Text, StyleSheet, StatusBar, Dimensions, TextInput, Image, FlatList, ImageBackground } from 'react-native'
// const { width, height } = Dimensions.get('window')
// export default function HomeScreen() {
//     const [tabValue, setTab] = useState("commerical")
//     return (
//         <View style={styles.container}>
//             <StatusBar translucent={true} backgroundColor="transparent" />
//             <Text style={styles.titleText}>Find the best music for you banger</Text>
//             <TextInput style={styles.textInput}
//                 placeholder="Search"
//                 placeholderStyle={{ fontSize: 20 }}
//                 placeholderTextColor="#878787"
//             />
//             <View style={styles.tabs}>
//                 <Text style={styles.tabText}>Commercial</Text>
//                 <Text style={styles.tabText}>Free</Text>
//             </View>
//             <FlatList

//                 data={[
//                     { id: 1, backgroundColor: '#402364', text: 'Cloud Rap' },
//                     { id: 2, backgroundColor: '#DE883C', text: 'Cloud Rap' },
//                     { id: 3, backgroundColor: '#E41F42', text: 'Low-fi' },
//                     { id: 4, backgroundColor: '#4031E3', text: 'Chilly Rap' }]}
//                 keyExtractor={item => item.id}
//                 contentContainerStyle={{ paddingBottom: 40, marginTop: 40, flexWrap: 'wrap', flexDirection: 'row' }}
//                 renderItem={({ item }) => {
//                     return (
//                         <View style={{ paddingBottom: 20, paddingRight: 15 }}>
//                             <View style={[{ width: 180, height: 180, borderRadius: 90, backgroundColor: item.backgroundColor, borderRadius: 90 },]}>
//                                 <ImageBackground source={{ uri: "https://images.pexels.com/photos/5282269/pexels-photo-5282269.jpeg?auto=compress&cs=tinysrgb&h=130" }}
//                                     style={{ width: 180, height: 180, borderRadius: 90, opacity: 0.6, justifyContent: 'center', alignItems: 'center' }}
//                                     imageStyle={{ borderRadius: 90 }}
//                                 >
//                                     <Text style={{ color: '#F1EFE9', fontWeight: 'bold', fontSize: 20 }}>{item.text}</Text>
//                                 </ImageBackground>

//                             </View>


//                         </View>
//                     )
//                 }}
//             />
//         </View >
//     )
// }
// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: '#0E0E0E',
//         flex: 1,
//         paddingLeft: 10,
//         paddingRight: 10
//     },
//     titleText: {
//         color: '#fff',
//         marginTop: 100,
//         fontSize: 40,
//         width: width - 40
//     },
//     textInput: {
//         backgroundColor: '#252525',
//         height: 60,
//         borderRadius: 20,
//         paddingLeft: 20,
//         fontSize: 25,
//         color: '#fff',
//         marginTop: 20
//     },
//     tabs: {
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         marginTop: 30,
//         borderWidth: 3,
//         paddingBottom: 15,
//         width: width - 40,
//         borderBottomColor: '#252525'
//     },
//     tabText: {
//         color: '#fff',
//         fontSize: 25,
//         flex: 1,
//         textAlign: 'center',
//         borderBottomColor: 'red',
//     },


// })

import React from 'react'
import { View, Text, StyleSheet, StatusBar, ScrollView } from 'react-native'
import Banner from '../../components/BannerComponent'
import Categories from '../../components/Categoriescomponent/Categories'
import Songs from '../../components/SongsComponent'
export default function Home({ navigation }) {

    return (
        <ScrollView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Text style={styles.title}>Music App</Text>
            <Banner />
            <Categories navigation={navigation} />
            <Text style={styles.title}>Recently Played</Text>
            <Songs title="Songs" navigation={navigation} />
        </ScrollView>
        // <View style={{ width: 200, height: 200, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: 'red' }}>
        //     <ScrollView style={{ width: 200 }}>
        //         <Text style={{ textAlign: 'center' }}>Hello</Text>
        //         <Text style={{ textAlign: 'center' }}>Hello</Text>
        //         <Text style={{ textAlign: 'center' }}>Hello</Text>
        //         <Text style={{ textAlign: 'center' }}>Hello</Text>
        //         <Text style={{ textAlign: 'center' }}>Hello</Text>
        //         <Text style={{ textAlign: 'center' }}>Hello</Text>
        //         <Text style={{ textAlign: 'center' }}>Hello</Text>
        //         <Text style={{ textAlign: 'center' }}>Hello</Text>
        //         <Text style={{ textAlign: 'center' }}>Hello</Text>
        //         <Text style={{ textAlign: 'center' }}>Hello</Text>
        //         <Text style={{ textAlign: 'center' }}>Hello</Text>
        //         <Text style={{ textAlign: 'center' }}>Hello</Text>
        //         <Text style={{ textAlign: 'center' }}>Hello</Text>
        //         <Text style={{ textAlign: 'center' }}>Hello</Text>
        //     </ScrollView>

        // </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F6FB'
    },
    title: {
        marginTop: 30,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        margin: 10,
        marginLeft: 15
    }
})