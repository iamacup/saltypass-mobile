/*
  eslint-disable import/prefer-default-export
*/

/*
  @TODO: Maybe replacing some of the random numbers in here with UUIDs would be better but for now not important!
*/

import uuidv4 from 'uuid/v4';

import analyticsReporter from '@lib/analyticsReporter';

import devSettings from '@config/dev';
import NavigationService from './NavigationService';

const initialRouteName = devSettings.settings.navigationStart;

export function goBack(originator, type = 'softwareButton') {
  NavigationService.goBack(originator, type);
}

export function navigateToInitialPage(originator) {
  const { _previousRouteName: navigateFrom } = NavigationService.navigate(initialRouteName, { });

  analyticsReporter.logEvent(analyticsReporter.MAIN_NAVIGATION_EVENT, {
    direction: 'forwards',
    originator,
    navigateFrom,
    navigateTo: initialRouteName,
  });
}

export function navigateToSeeMoreNewsInSection(originator, color, title, id, type, url) {
  const { _previousRouteName: navigateFrom } = NavigationService.navigate('NewsSeeMore', {
    color, title, id, type, url,
  });

  analyticsReporter.logEvent(analyticsReporter.MAIN_NAVIGATION_EVENT, {
    direction: 'forwards',
    originator,
    navigateFrom,
    navigateTo: 'NewsSeeMore',
    data: {
      title,
      id,
    },
  });
}

export function navigateToHome(originator) {
  const { _previousRouteName: navigateFrom } = NavigationService.navigate('Home');

  analyticsReporter.logEvent(analyticsReporter.MAIN_NAVIGATION_EVENT, {
    direction: 'forwards',
    originator,
    navigateFrom,
    navigateTo: 'Home',
  });
}

export function navigateToNews(originator) {
  const { _previousRouteName: navigateFrom } = NavigationService.navigate('Home', { showTab: 'news' });

  analyticsReporter.logEvent(analyticsReporter.MAIN_NAVIGATION_EVENT, {
    direction: 'forwards',
    originator,
    navigateFrom,
    navigateTo: 'Home',
    data: {
      showTab: 'News',
    },
  });
}

export function navigateToDiscussions(originator) {
  const { _previousRouteName: navigateFrom } = NavigationService.navigate('Home', { showTab: 'discussions', resetToLatestOrder: false });

  analyticsReporter.logEvent(analyticsReporter.MAIN_NAVIGATION_EVENT, {
    direction: 'forwards',
    originator,
    navigateFrom,
    navigateTo: 'Home',
    data: {
      showTab: 'Discussions',
    },
  });
}

export function navigateToDiscussionWithHilight(originator, hilightIDArray, resetToLatestOrder = false) {
  // so basically in order to provide resets every time this function is called with resetToLatestOrder as true
  // we just send a random number into the navigation stack and we check on the display component
  // to see if it is none false and not the same as the previous render - if it is then a reset happens
  let useResetFlag = false;

  if (resetToLatestOrder === true) {
    useResetFlag = uuidv4();
  }

  const { _previousRouteName: navigateFrom } = NavigationService.navigate('Home', { hilightIDArray, resetToLatestOrder: useResetFlag, showTab: 'discussions' });

  analyticsReporter.logEvent(analyticsReporter.MAIN_NAVIGATION_EVENT, {
    direction: 'forwards',
    originator,
    navigateFrom,
    navigateTo: 'Home',
    data: {
      showTab: 'Discussions',
    },
  });
}

export function navigateToSingleNewsArticle(originator, newsID) {
  const { _previousRouteName: navigateFrom } = NavigationService.navigate('NewsSingle', { newsID });

  analyticsReporter.logEvent(analyticsReporter.MAIN_NAVIGATION_EVENT, {
    direction: 'forwards',
    originator,
    navigateFrom,
    navigateTo: 'NewsSingle',
    data: {
      id: newsID,
    },
  });
}

export function navigateToAddCommentPage(originator, data, commentType, updateLocation, isRoot, successCallback) {
  const { _previousRouteName: navigateFrom } = NavigationService.navigate('AddComment', {
    data, commentType, successCallback, updateLocation, isRoot,
  });

  analyticsReporter.logEvent(analyticsReporter.MAIN_NAVIGATION_EVENT, {
    direction: 'forwards',
    originator,
    navigateFrom,
    navigateTo: 'AddComment',
    data: {
      contentType: commentType,
      id: data.id,
    },
  });
}

export function navigateToProfilePage(originator) {
  const { _previousRouteName: navigateFrom } = NavigationService.navigate('Profile', {});

  analyticsReporter.logEvent(analyticsReporter.MAIN_NAVIGATION_EVENT, {
    direction: 'forwards',
    originator,
    navigateFrom,
    navigateTo: 'Profile',
  });
}

export function navigateToProfilePageWithID(originator, id) {
  const { _previousRouteName: navigateFrom } = NavigationService.navigate('Profile', { id });

  analyticsReporter.logEvent(analyticsReporter.MAIN_NAVIGATION_EVENT, {
    direction: 'forwards',
    originator,
    navigateFrom,
    navigateTo: 'Profile',
    data: {
      id,
    },
  });
}

export function navigateToProfileEditPage(originator) {
  const { _previousRouteName: navigateFrom } = NavigationService.navigate('ProfileEdit', {});

  analyticsReporter.logEvent(analyticsReporter.MAIN_NAVIGATION_EVENT, {
    direction: 'forwards',
    originator,
    navigateFrom,
    navigateTo: 'ProfileEdit',
  });
}

export function navigateToEditTeamPage(originator) {
  const { _previousRouteName: navigateFrom } = NavigationService.navigate('EditTeam', {});

  analyticsReporter.logEvent(analyticsReporter.MAIN_NAVIGATION_EVENT, {
    direction: 'forwards',
    originator,
    navigateFrom,
    navigateTo: 'EditTeam',
  });
}

export function navigateToAccountSettingsPage(originator) {
  const { _previousRouteName: navigateFrom } = NavigationService.navigate('AccountSettings', {});

  analyticsReporter.logEvent(analyticsReporter.MAIN_NAVIGATION_EVENT, {
    direction: 'forwards',
    originator,
    navigateFrom,
    navigateTo: 'AccountSettings',
  });
}

export function navigateToTermsOfUsePage(originator) {
  const { _previousRouteName: navigateFrom } = NavigationService.navigate('TermsOfUse', {});

  analyticsReporter.logEvent(analyticsReporter.MAIN_NAVIGATION_EVENT, {
    direction: 'forwards',
    originator,
    navigateFrom,
    navigateTo: 'TermsOfUse',
  });
}

export function navigateToPrivacyPolicyPage(originator) {
  const { _previousRouteName: navigateFrom } = NavigationService.navigate('PrivacyPolicy', {});

  analyticsReporter.logEvent(analyticsReporter.MAIN_NAVIGATION_EVENT, {
    direction: 'forwards',
    originator,
    navigateFrom,
    navigateTo: 'PrivacyPolicy',
  });
}

export function navigateToTermsOfUsePageOB(originator) {
  const { _previousRouteName: navigateFrom } = NavigationService.navigate('TermsOfUseOB', {});

  analyticsReporter.logEvent(analyticsReporter.MAIN_NAVIGATION_EVENT, {
    direction: 'forwards',
    originator,
    navigateFrom,
    navigateTo: 'TermsOfUseOB',
  });
}

export function navigateToPrivacyPolicyPageOB(originator) {
  const { _previousRouteName: navigateFrom } = NavigationService.navigate('PrivacyPolicyOB', {});

  analyticsReporter.logEvent(analyticsReporter.MAIN_NAVIGATION_EVENT, {
    direction: 'forwards',
    originator,
    navigateFrom,
    navigateTo: 'PrivacyPolicyOB',
  });
}

export function navigateToLogoutPage(originator) {
  const { _previousRouteName: navigateFrom } = NavigationService.navigate('Logout', {});

  analyticsReporter.logEvent(analyticsReporter.MAIN_NAVIGATION_EVENT, {
    direction: 'forwards',
    originator,
    navigateFrom,
    navigateTo: 'Logout',
  });
}

export function navigateToLoginPage(originator) {
  const { _previousRouteName: navigateFrom } = NavigationService.navigate('Login', {});

  analyticsReporter.logEvent(analyticsReporter.MAIN_NAVIGATION_EVENT, {
    direction: 'forwards',
    originator,
    navigateFrom,
    navigateTo: 'Login',
  });
}

export function navigateToMainPage(originator) {
  const { _previousRouteName: navigateFrom } = NavigationService.navigate('Main', {});

  analyticsReporter.logEvent(analyticsReporter.MAIN_NAVIGATION_EVENT, {
    direction: 'forwards',
    originator,
    navigateFrom,
    navigateTo: 'Main',
  });
}

export function navigateToOnboardingPage(originator) {
  const { _previousRouteName: navigateFrom } = NavigationService.navigate('Onboarding', {});

  analyticsReporter.logEvent(analyticsReporter.MAIN_NAVIGATION_EVENT, {
    direction: 'forwards',
    originator,
    navigateFrom,
    navigateTo: 'Onboarding',
  });
}

export function navigateToDiscussionSinglePage(originator, id) {
  const { _previousRouteName: navigateFrom } = NavigationService.navigate('DiscussionSingle', { id });

  analyticsReporter.logEvent(analyticsReporter.MAIN_NAVIGATION_EVENT, {
    direction: 'forwards',
    originator,
    navigateFrom,
    navigateTo: 'DiscussionSingle',
    data: {
      id,
    },
  });
}

export function navigateToDiscussionsWithTag(originator, tagID, title, color) {
  const { _previousRouteName: navigateFrom } = NavigationService.navigate('DiscussionsWithTag', { tagID, title, color });

  analyticsReporter.logEvent(analyticsReporter.MAIN_NAVIGATION_EVENT, {
    direction: 'forwards',
    originator,
    navigateFrom,
    navigateTo: 'DiscussionsWithTag',
    data: {
      id: tagID,
      title,
    },
  });
}

export function navigateToPreferencesManagePage(originator) {
  const { _previousRouteName: navigateFrom } = NavigationService.navigate('PreferencesManage', {});

  analyticsReporter.logEvent(analyticsReporter.MAIN_NAVIGATION_EVENT, {
    direction: 'forwards',
    originator,
    navigateFrom,
    navigateTo: 'PreferencesManage',
  });
}

export function navigateToPreferencesManagePageWithNewPreferences(originator, newPreferences) {
  const { _previousRouteName: navigateFrom } = NavigationService.navigate('PreferencesManage', { newPreferences });

  analyticsReporter.logEvent(analyticsReporter.MAIN_NAVIGATION_EVENT, {
    direction: 'forwards',
    originator,
    navigateFrom,
    navigateTo: 'PreferencesManage',
  });
}

export function navigateToPreferencesSearchPage(originator, currentPreferences) {
  const { _previousRouteName: navigateFrom } = NavigationService.navigate('PreferencesSearch', { currentPreferences });

  analyticsReporter.logEvent(analyticsReporter.MAIN_NAVIGATION_EVENT, {
    direction: 'forwards',
    originator,
    navigateFrom,
    navigateTo: 'PreferencesSearch',
  });
}

export function navigateToPreferencesOverviewPage(originator) {
  const { _previousRouteName: navigateFrom } = NavigationService.navigate('PreferencesOverview', {});

  analyticsReporter.logEvent(analyticsReporter.MAIN_NAVIGATION_EVENT, {
    direction: 'forwards',
    originator,
    navigateFrom,
    navigateTo: 'PreferencesOverview',
  });
}

export function navigateToPostAddPage(originator, type) {
  const { _previousRouteName: navigateFrom } = NavigationService.navigate('PostAdd', { type });

  analyticsReporter.logEvent(analyticsReporter.MAIN_NAVIGATION_EVENT, {
    direction: 'forwards',
    originator,
    navigateFrom,
    navigateTo: 'PostAdd',
    data: {
      type,
    },
  });
}

export function navigateToPostPickerPage(originator) {
  const { _previousRouteName: navigateFrom } = NavigationService.navigate('PostPicker', {});

  analyticsReporter.logEvent(analyticsReporter.MAIN_NAVIGATION_EVENT, {
    direction: 'forwards',
    originator,
    navigateFrom,
    navigateTo: 'PostPicker',
  });
}

export function navigateToAlertsPage(originator) {
  const { _previousRouteName: navigateFrom } = NavigationService.navigate('Alerts', {});

  analyticsReporter.logEvent(analyticsReporter.MAIN_NAVIGATION_EVENT, {
    direction: 'forwards',
    originator,
    navigateFrom,
    navigateTo: 'Alerts',
  });
}

export function navigateToRulesOfEngagement(originator, backCallback) {
  const { _previousRouteName: navigateFrom } = NavigationService.navigate('RulesOfEngagement', { backCallback });

  analyticsReporter.logEvent(analyticsReporter.MAIN_NAVIGATION_EVENT, {
    direction: 'forwards',
    originator,
    navigateFrom,
    navigateTo: 'RulesOfEngagement',
  });
}

export function navigateToAlertsSettingsPage(originator) {
  const { _previousRouteName: navigateFrom } = NavigationService.navigate('AlertsSettings', {});

  analyticsReporter.logEvent(analyticsReporter.MAIN_NAVIGATION_EVENT, {
    direction: 'forwards',
    originator,
    navigateFrom,
    navigateTo: 'AlertsSettings',
  });
}

export function navigateToAboutPage(originator) {
  const { _previousRouteName: navigateFrom } = NavigationService.navigate('About', {});

  analyticsReporter.logEvent(analyticsReporter.MAIN_NAVIGATION_EVENT, {
    direction: 'forwards',
    originator,
    navigateFrom,
    navigateTo: 'About',
  });
}

export function navigateToWebview(originator, url) {
  const { _previousRouteName: navigateFrom } = NavigationService.navigate('Webview', { url });

  analyticsReporter.logEvent(analyticsReporter.MAIN_NAVIGATION_EVENT, {
    direction: 'forwards',
    originator,
    navigateFrom,
    navigateTo: 'Webview',
    data: {
      url,
    },
  });
}

export function navigateToStats(originator) {
  const { _previousRouteName: navigateFrom } = NavigationService.navigate('Stats');

  analyticsReporter.logEvent(analyticsReporter.MAIN_NAVIGATION_EVENT, {
    direction: 'forwards',
    originator,
    navigateFrom,
    navigateTo: 'Stats',
  });
}

export function navigateToSinglePoll(originator, id) {
  const { _previousRouteName: navigateFrom } = NavigationService.navigate('PollSingle', { id });

  analyticsReporter.logEvent(analyticsReporter.MAIN_NAVIGATION_EVENT, {
    direction: 'forwards',
    originator,
    navigateFrom,
    navigateTo: 'PollSingle',
    data: {
      id,
    },
  });
}

// this takes us to the top of whatever page we are on on the main navigation area
export function navigateToMainTop(originator) {
  const { _previousRouteName: navigateFrom } = NavigationService.navigate('Home', { scrollTop: true });

  analyticsReporter.logEvent(analyticsReporter.MAIN_NAVIGATION_EVENT, {
    direction: 'forwards',
    originator,
    navigateFrom,
    navigateTo: 'TopOfHome',
  });
}
