
/* eslint react/prop-types: 0 */

import React from 'react';
import {
 createAppContainer,
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import Home from '../features/home/';

// import FoundationIcon from 'react-native-vector-icons/Foundation';

import AppStyles from '../config/styles';

const BottomTabs = createMaterialBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
      // tabBarOnPress: () => {
      //   navigateToMainTop('Main App Bottom Tabs');
      // },
      // tabBarIcon: ({ tintColor }) => (
      //   <FoundationIcon size={30} name="home" style={{ color: 'red' }} />
      // ),
    },
  },
}, {
  headerMode: 'none',
  initialRouteName: 'Home',
  activeColor: AppStyles.color.primary,
  inactiveColor: AppStyles.color.grey,
  barStyle: {
    backgroundColor: AppStyles.color.fadedWhite,
    borderTopWidth: 0.2,
    borderTopColor: AppStyles.color.paleGrey,
  },
});

const MainStack = createStackNavigator(
  {
    // our main tab stuff
    MainTabs: {
      screen: BottomTabs,
      navigationOptions: { header: null },
    },
  },
  {
    initialRouteName: 'MainTabs',
    headerMode: 'none',
  },
);


const appNavigation = createAppContainer(MainStack);

export default appNavigation;
