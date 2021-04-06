// // import React, { Component } from 'react';
// // import Player from './src/components/Player/Player';
// // import Navigation from './src/navigation';
// // import HomeScreen from './src/screens/HomeScreen'
// // export const TRACKS = [
// //   {
// //     title: 'Stressed Out',
// //     artist: 'Twenty One Pilots',
// //     albumArtUrl: "http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg",
// //     audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
// //   },
// //   {
// //     title: 'Love Yourself',
// //     artist: 'Justin Bieber',
// //     albumArtUrl: "http://arrestedmotion.com/wp-content/uploads/2015/10/JB_Purpose-digital-deluxe-album-cover_lr.jpg",
// //     audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
// //   },
// //   {
// //     title: 'Hotline Bling',
// //     artist: 'Drake',
// //     albumArtUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Drake_-_Hotline_Bling.png',
// //     audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
// //   },
// // ];

// // export default class App extends Component {
// //   render() {
// //     // return <Player tracks={TRACKS} />
// //     // return (<HomeScreen />)
// //     return (<Navigation />)
// //   }
// // }





// import React, { Component } from 'react';
// import {
//   View,
//   Text,
//   StatusBar,
//   StyleSheet,
//   Image,
//   Animated,
//   TouchableWithoutFeedback,
//   TouchableOpacity,
// } from 'react-native';
// import { NavigationContainer, DrawerActions } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import * as Animatable from 'react-native-animatable';
// import dynamicLinks from '@react-native-firebase/dynamic-links';

// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Icon2 from 'react-native-vector-icons/Ionicons';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import Player from './src/screens/Profile';


// import Tabs from './src/navigation';
// import Profile from './src/screens/Profile';
// import CategoryDetails from './src/screens/CategoryDetails'

// class App extends Component {
//   constructor(props) {
//     super(props);
//   }
//   componentDidMount() {
//     const unsubscribe = dynamicLinks().onLink(this.handleDynamicLink);
//   }
//   handleDynamicLink = link => {
//     // Handle dynamic link inside your own application
//     console.log(link.url)
//     if (link.url === 'https://google.com/test') {
//       this.props.navigation.navigate('Tabs')
//       // ...navigate to your offers screen
//     }
//   };
//   goToTabs() {
//     this.props.navigation.navigate('Tabs');
//   }

//   render() {
//     const zoomIn = {
//       0: {
//         scale: 0,
//       },
//       0.5: {
//         scale: 0.5,
//       },
//       1: {
//         scale: 1,
//       },
//     };
//     return (
//       <View style={styles.container}>
//         <StatusBar barStyle="dark-content" backgroundColor="#F6F6FB" />
//         <Text style={styles.title}>Music App</Text>
//         <Animatable.Image
//           animation={zoomIn}
//           source={require('./src/assets/images/logo.png')}
//           style={styles.logo}
//         />
//         <TouchableOpacity style={styles.btn} onPress={() => this.goToTabs()}>
//           <Text style={styles.text}>Start Listening</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// const Stack = createStackNavigator();

// function Stacks() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="App"
//         component={App}
//         options={{
//           headerShown: false,
//         }}
//       />
//       <Stack.Screen
//         name="Tabs"
//         component={Tabs}
//         options={{
//           headerShown: false,
//         }}
//       />
//       <Stack.Screen
//         name="Player"
//         component={Profile}
//         options={{
//           headerShown: false,
//         }}
//       />
//       <Stack.Screen
//         name="CategoryDetails"
//         component={CategoryDetails}
//         options={{
//           headerShown: false,
//         }}
//       />

//     </Stack.Navigator>
//   );
// }

// function MainScreen() {
//   return (
//     <NavigationContainer>
//       <Stacks />
//     </NavigationContainer>
//   );
// }

// export default MainScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//     alignContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 32,
//     color: '#000',
//     fontWeight: 'bold',
//   },
//   logo: {
//     height: 220,
//     width: '80%',
//     marginBottom: 40,
//     marginTop: 20,
//   },
//   btn: {
//     width: '60%',
//     height: 50,
//     borderRadius: 20,
//     backgroundColor: '#ff5b77',
//     justifyContent: 'center',
//     alignContent: 'center',
//     alignItems: 'center',
//     elevation: 15,
//   },
//   text: {
//     color: '#fff',
//     fontSize: 20,
//   },
// });





import React, { Component } from 'react';
import {
  TextField,
  FilledTextField,
  OutlinedTextField,
} from 'react-native-material-textfield';
import { View } from 'react-native'
export default class App extends Component {
  fieldRef = React.createRef();

  onSubmit = () => {
    let { current: field } = this.fieldRef;

    console.log(field.value());
  };

  formatText = (text) => {
    return text.replace(/[^+\d]/g, '');
  };
onChangeText=(text)=>{
  
}
  render() {
    return (
      // <View style={{ width: 200, flex: 1, justifyContent: 'center', alignItems: 'center', }}>
      // <OutlinedTextField
      //   label='Phone number'
      //   keyboardType='phone-pad'
      //   formatText={this.formatText}
      //   onSubmitEditing={this.onSubmit}
      //   ref={this.fieldRef}
      // />
      // </View>
      <OutlinedTextField
        returnKeyLabel='Done'
        returnKeyType='default'
        style={{
          flex: 1,
          marginTop: 150,
          width: 100
        }}
        label="Hello"
        multiline={true}
        keyboardType={this.keyboardType}
        maxLength={this.maxInputLength}
        onBlur={this.onSubmit}
        formatText={this.formatText}
        onSubmitEditing={this.onSubmit}
        numberOfLines={2}
        value="This is a long"
        onChangeText={(text) => onChangeText(text)}

        ref={this.fieldRef}
      ></OutlinedTextField>

    );
  }
}
