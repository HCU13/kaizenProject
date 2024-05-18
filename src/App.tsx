import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './pages/HomePage/HomePage';
import DetailsPage from './pages/DetailsPage/DetailsPage';
import HomeStackNavigator from './navigators/TabNavigator';

import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import store from './redux/store';
const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <GestureHandlerRootView>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName="HomeStackNavigator">
            <Stack.Screen
              name="HomeStackNavigator"
              component={HomeStackNavigator}
            />
            <Stack.Screen name="HomePage" component={HomePage} />
            <Stack.Screen name="DetailsPage" component={DetailsPage} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
