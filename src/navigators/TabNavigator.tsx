import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CustomTabBar from '../components/CustomTabBar/CustomTabBar';
import HomePage from '../pages/HomePage/HomePage';

const Tab = createBottomTabNavigator();

const tabs = [
  {
    name: 'KEŞFET',
    component: HomePage,
    iconsurce: require('../assets/icons/compassIcon.png'),
  },
  {
    name: 'DAHA CÜZDAN',
    component: HomePage,
    iconsurce: require('../assets/icons/starIcon.png'),
  },
  {
    name: 'Ortadaki Buton',
    component: HomePage,
    icon: require('../assets/icons/tabMenuIcon.png'),
  },
];

// TabNavigator bileşeni
const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <CustomTabBar {...props} tabs={tabs} />}>
      {tabs.map((tab, index) => (
        <Tab.Screen key={index} name={tab.name} component={tab.component} />
      ))}
    </Tab.Navigator>
  );
};

export default TabNavigator;
