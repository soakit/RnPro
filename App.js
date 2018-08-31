import { createStackNavigator } from 'react-navigation'
import router, { routerConfig } from './src/router'

const App = createStackNavigator(router, routerConfig)

export default App
