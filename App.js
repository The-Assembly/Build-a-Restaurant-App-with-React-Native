import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import SearchScreen from './src/screens/SearchScreen'
import ResultShowScreen from './src/screens/ResultsShowScreen';



const navigator = createStackNavigator({
    Search: SearchScreen,
    ResultsShow: ResultShowScreen
},{
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Search Screen'
  }
});


export default createAppContainer(navigator);