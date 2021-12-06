import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import WelcomeScreen from './src/screens/WelcomeScreen';
/* import HomeScreen from './src/screens/HomeScreen';
import ListenScreen from './src/screens/ListenScreen';
import TypeScreen from './src/screens/TypeScreen';
import ResultScreen from './src/screens/ResultScreen'; */

const navigator = createStackNavigator(
  {
    Welcome: WelcomeScreen,
/*     Home: HomeScreen,
    Listen: ListenScreen,
    Type: TypeScreen,
    Result: ResultScreen, */
  },
  {
    initialRouteName: 'Welcome',
    defaultNavigationOptions: {
      title: 'App',
      header: null,
    },
  }
);

export default createAppContainer(navigator);
