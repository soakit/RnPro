import React from 'react'
import { View, Text, Button } from 'react-native'

class TrendingScreen extends React.Component {
	static navigationOptions = ({ navigation, navigationOptions }) => {
		return {
			// title: '趋势',
			headerTitle: <Text style={{ flex: 1, fontWeight: 'bold', textAlign: 'center', marginRight: 60 }}>趋势</Text>,
			headerStyle: {
				backgroundColor: navigationOptions.headerStyle.backgroundColor
			},
			headerTintColor: navigationOptions.headerTintColor,
			headerTitleStyle: navigationOptions.headerTitleStyle
		}
	}
	render() {
		const { navigation } = this.props
		const key = navigation.getParam('key', 'Some Default Value')

		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>Trending Screen</Text>
				<Text>接收到的key: {JSON.stringify(key)}</Text>
				<Button
					title="再去趋势页"
					onPress={() => this.props.navigation.push('Trending')}
				/>
				<Button
					title="热门页"
					onPress={() => this.props.navigation.navigate('Popular')}
				/>
				<Button title="后退" onPress={() => this.props.navigation.goBack()} />
			</View>
		)
	}
}

export default TrendingScreen
