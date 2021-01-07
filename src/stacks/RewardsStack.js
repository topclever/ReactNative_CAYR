import { createStackNavigator } from 'react-navigation-stack';

import { Rewards, Rewards2,  } from '../screens';

import { stackOptionsOff, stackOptionsOn } from '../utils';
import { titles } from '../shared';

const RewardsStack = createStackNavigator(
  {
    
    Rewards: {
      screen: Rewards,
      navigationOptions: stackOptionsOff("")
    },
    Rewards2: {
      screen: Rewards2,
      navigationOptions: stackOptionsOn("")
    },
    
  }

);

export default RewardsStack;