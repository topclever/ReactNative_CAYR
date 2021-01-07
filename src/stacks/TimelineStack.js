import { createStackNavigator } from 'react-navigation-stack';

import { Timeline, Timeline2,  } from '../screens';

import { stackOptionsOff, stackOptionsOn } from '../utils';
import { titles } from '../shared';

const TimelineStack = createStackNavigator(
  {
    
    Timeline: {
      screen: Timeline,
      navigationOptions: stackOptionsOff('')
    },
    Timeline2: {
      screen: Timeline2,
      navigationOptions: stackOptionsOn("")
    },
    
  }

);

export default TimelineStack;