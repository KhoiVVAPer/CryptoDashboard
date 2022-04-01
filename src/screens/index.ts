import DashboardScreen from './Dashboard/Dashboard.container';
import {StackNavigationOptions} from '@react-navigation/stack';

const commonOptions: StackNavigationOptions = {
  gestureEnabled: false,
  headerShown: false,
};

// ======== AUTH STACK

// ========= MAIN STACK
export type MainStackParamList = {
  Dashboard: undefined;
};

export const mainStackScreens = {
  Dashboard: {component: DashboardScreen, commonOptions},
};
