import React from 'react';
import { View, Text } from 'react-native'
class MyScreen extends React.Component {
	static navigationOptions = {
		title: '我的'
	}
	render() {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>My Screen</Text>
			</View>
		)
	}
}

export default MyScreen
