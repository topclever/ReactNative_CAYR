import { createSwitchNavigator } from 'react-navigation';

import { Loading } from '../screens';
import AuthStack from './AuthStack';
import AppStack from './AppStack';

const RootStack = createSwitchNavigator(
  {
    Loading,
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: 'Auth',
  }
);

export default RootStack;
