// The StackNavigator function name is deprecated, please use createStackNavigator instead
import { createStackNavigator } from 'react-navigation'

import PopularScreen from '../views/popular'
import TrendingScreen from '../views/trending'
import FavoriteScreen from '../views/favorite'
import MyScreen from '../views/my'

import ModalScreen from '../components/modal'

const routerConfig = {
	// 初始路由
	initialRouteName: 'Popular',

	// 路由的其他配置(meta)
	navigationOptions: {
		headerStyle: {
			backgroundColor: '#f4511e'
		},
		headerTintColor: '#fff',
		headerTitleStyle: {
			fontWeight: 'bold',
			textAlign: 'center'
		}
	}
}

export default createStackNavigator(
	{
		Main: {
			screen: createStackNavigator(
				{
					Popular: { screen: PopularScreen },
					Trending: { screen: TrendingScreen },
					Favorite: { screen: FavoriteScreen },
					My: { screen: MyScreen }
				},
				routerConfig
			)
		},
		MyModal: {
			screen: ModalScreen
		}
	},
	{
		mode: 'modal',
		headerMode: 'none'
	}
)
