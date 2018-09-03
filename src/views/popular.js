import React from 'react'
import { View, Text, Button } from 'react-native'
class PopularScreen extends React.Component {
	static navigationOptions = ({ navigation, navigationOptions }) => {
		return {
			title: '热门',
			headerRight: (
				<Button
					onPress={() => navigation.navigate('MyModal')}
					title="Modal"
					color="#000"
				/>
			),
			headerStyle: {
				backgroundColor: navigationOptions.headerStyle.backgroundColor
			},
			headerTintColor: navigationOptions.headerTintColor,
			headerTitleStyle: navigationOptions.headerTitleStyle
		}
	}
	componentWillMount() {
		// ctrl + M remote JS Debugging
		// 查看控制台
		console.log('componentWillMount')
	}
	render() {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>Popular Screen</Text>
				<Button
					title="趋势页"
					onPress={() =>
						this.props.navigation.navigate('Trending', {
							key: 'haha...'
						})
					}
				/>
			</View>
		)
	}
}

export default PopularScreen
