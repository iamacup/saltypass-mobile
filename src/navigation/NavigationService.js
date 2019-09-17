
import { BackHandler, Platform } from 'react-native';
import { NavigationActions } from 'react-navigation';

import uuidv4 from 'uuid/v4';

import { isDefined } from '../lib/isDefined';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function getCurrentNavElement({ nav }) {
  let navLevel = nav;

  while (isDefined(navLevel.index)) {
    navLevel = navLevel.routes[navLevel.index];
  }

  return navLevel.routeName;
}

function getCurrentNavRoute() {
  return getCurrentNavElement(_navigator.state);
}

function navigate(routeName, props) {
  // because of how the navigation stack gets mounted,
  // if we try to perform a navigation event during a component's didMount method
  // that is immediately in teh stack, the navigator ref will not be set so we have to retry
  if (!isDefined(_navigator)) {
    setTimeout(() => { navigate(routeName, props); }, 50);

    return {
      ...props,
      _uuid: uuidv4(),
      _previousRouteName: '',
    };
  }

  const previousRouteName = getCurrentNavElement(_navigator.state);

  const params = {
    ...props,
    _uuid: uuidv4(),
    _previousRouteName: previousRouteName,
  };

  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );

  return params;
}

function goBack(originator, type, key) {
  const previousRouteName = getCurrentNavElement(_navigator.state);

  console.log('todo specify the exit page here')
  if (previousRouteName === 'Home' && Platform.OS === 'android' && type === 'hardwareButton') {
    BackHandler.exitApp();
  }

  _navigator.dispatch(
    NavigationActions.back({
      key,
    }),
  );

  setTimeout(() => {
    if (isDefined(_navigator) && isDefined(_navigator.state)) {
      const postRouteName = getCurrentNavElement(_navigator.state);

      // do something with this if needed
    }
  }, 500);
}

export default {
  navigate,
  goBack,
  setTopLevelNavigator,
  getCurrentNavRoute,
};
