import React from 'react';
import { View, Text } from 'react-native'
class FavoriteScreen extends React.Component {
	static navigationOptions = ({ navigation, navigationOptions }) => {
		return {
			title: '收藏',
			headerStyle: {
				backgroundColor: navigationOptions.headerTintColor
			},
			headerTintColor: navigationOptions.headerStyle.backgroundColor
		}
	}
	render() {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>Favorite Screen</Text>
			</View>
		)
	}
}

export default FavoriteScreen
