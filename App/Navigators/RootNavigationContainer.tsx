import 'react-native-gesture-handler';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button, Appbar } from 'react-native-paper';
import { NavigationContainer, ParamListBase, useTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context'

import AuthStack from './AuthStack';

const RootStack = createStackNavigator();

function RootNavigationContainer(): JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStack.Navigator >
          <RootStack.Screen name="AuthStack"
            component={AuthStack} />
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>

  );
}

export default RootNavigationContainer;
