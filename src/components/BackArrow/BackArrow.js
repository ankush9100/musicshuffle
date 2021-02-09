import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { BackIcon } from '../../assets/images'
const BackArrow = () => {
    return (
        <View>
            <TouchableOpacity onPress={() => alert()}>
                {/* <BackIcon /> */}
            </TouchableOpacity>
            <Text>askd</Text>
        </View>

    )
}
export default BackArrow