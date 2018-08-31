import PopularScreen from '../views/popular'
import TrendingScreen from '../views/trending'
import FavoriteScreen from '../views/favorite'
import MyScreen from '../views/my'

export default {
	Popular: { screen: PopularScreen },
	Trending: { screen: TrendingScreen },
	Favorite: { screen: FavoriteScreen },
	My: { screen: MyScreen }
}

// 初始路由
export const routerConfig = {
	initialRouteName: 'Popular',

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
