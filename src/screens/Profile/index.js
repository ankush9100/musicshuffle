import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import PlayerComponent from '../../components/Players';

class Profile extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        // let item = this.props.route.params.item;
        return (
            <View style={styles.container}>
                <PlayerComponent navigation={this.props.navigation} />
            </View>
        );
    }
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});