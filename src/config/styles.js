/*
 * Provides universal color configs used in the app.
 * Provides universal fonts used in the app.
 */

import { StatusBar, Platform } from 'react-native';
// import { RFPercentage } from 'react-native-responsive-fontsize';

// const obj = {height: StatusBar.currentHeight};

const AppStyles = {
  // androidStatusBarFix: {
  //   paddingTop: Platform.OS !== 'ios' ? StatusBar.currentHeight : 0,
  //   flex: 1,
  // },
  // keep hex values for consistency
  color: {
    primary: 'purple',
    secondary: 'green',
    color: 'grey',
    paleGrey: '#d8d8d8',
    fadedWhite: '#fefefe',
  },
  textSize: {
    mini: 10,
    small: 10,
    medium: 10,
    large: 10,
    xlage: 10,
    xxlarge: 10,
    xxxlarge: 10,
    // mini: RFPercentage(1.5),
    // small: RFPercentage(2),
    // medium: RFPercentage(2.4),
    // mediumPlus: RFPercentage(2.6),
    // large: RFPercentage(3),
    // xlarge: RFPercentage(3.5),
    // xxlarge: RFPercentage(5),
  },
};

export default AppStyles;
