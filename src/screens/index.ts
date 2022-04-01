import DashboardScreen from './Dashboard/Dashboard.container';
import {StackNavigationOptions} from '@react-navigation/stack';

export const commonOptions: StackNavigationOptions = {
  gestureEnabled: false,
  headerShown: true,
  headerTitleAlign: 'left',
  headerRightContainerStyle: {
    alignItems: 'flex-end',
    marginRight: 20,
  },
};

// ======== AUTH STACK

// ========= MAIN STACK
export type MainStackParamList = {
  Dashboard: undefined;
};

export const mainStackScreens = {
  Dashboard: {component: DashboardScreen, commonOptions},
};
