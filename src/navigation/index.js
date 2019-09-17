
import React, { Component } from 'react';

import { Platform } from 'react-native';
import NavigationStack from './NavigationStack';
import NavigationService from './NavigationService';

class AppNavigator extends Component {
  render() {
    return (
      <NavigationStack
        ref={(navigatorRef) => {
          this.navigator = navigatorRef;
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
        screenProps={{

        }}
      />
    );
  }
}

export default AppNavigator;
