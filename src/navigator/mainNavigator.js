import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile209394Navigator from '../features/UserProfile209394/navigator';
import Tutorial209393Navigator from '../features/Tutorial209393/navigator';
import NotificationList209365Navigator from '../features/NotificationList209365/navigator';
import Settings209364Navigator from '../features/Settings209364/navigator';
import Settings209356Navigator from '../features/Settings209356/navigator';
import UserProfile209354Navigator from '../features/UserProfile209354/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile209394: { screen: UserProfile209394Navigator },
Tutorial209393: { screen: Tutorial209393Navigator },
NotificationList209365: { screen: NotificationList209365Navigator },
Settings209364: { screen: Settings209364Navigator },
Settings209356: { screen: Settings209356Navigator },
UserProfile209354: { screen: UserProfile209354Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
