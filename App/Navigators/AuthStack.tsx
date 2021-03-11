import 'react-native-gesture-handler';
import * as React from 'react';
import WelcomeScreen from '../Containers/WelcomeScreen';
import { Alert, Animated, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Appbar } from 'react-native-paper';
import { ParamListBase, useTheme } from '@react-navigation/native';
import {
  createStackNavigator,
  StackScreenProps,
  HeaderBackButton,
  useHeaderHeight,
  Header,
  StackHeaderProps,
} from '@react-navigation/stack';
type AuthStackProps = {
  WelcomeScreen: undefined;
};
function CustomHeader(props: StackHeaderProps): JSX.Element {
  const { current, next } = props.scene.progress;
  const progress = Animated.add(current, next || 0);
  // const opacity = process.interpolate({
  //     inputRange: [0, 1, 2],
  //     outputRange: [0, 1, 0],
  // });
  return (
    <>
      <Header {...props} />
      {/* <Animated.Text styles={[styles.banner]}>Why hello here, pardner!</Animated.Text> */}
    </>
  );
}
const Stack = createStackNavigator<AuthStackProps>();
type Props = Partial<React.ComponentProps<typeof Stack.Navigator>> & StackScreenProps<ParamListBase>;
function AuthStack({ navigation, ...rest }: Props): JSX.Element {
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  const { colors, dark } = useTheme();
  return (
    <Stack.Navigator {...rest} >
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={({ route }) => ({
          title: `Article by ${route.params?.author}`,
          header: CustomHeader,
          headerTintColor: '#fff',
          headerStyle: { backgroundColor: '#ff005d' },
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          headerBackImage: ({ tintColor }) => (
            <MaterialCommunityIcons
              name="arrow-left-circle-outline"
              color={tintColor}
              size={24}
              style={{ marginHorizontal: Platform.OS === 'ios' ? 8 : 0 }}
            />
          ),
          headerRight: ({ tintColor }) => (
            <Appbar.Action
              color={tintColor}
              icon="dots-horizontal-circle-outline"
              onPress={(): void =>
                Alert.alert(
                  'Never gonna give you up!',
                  'Never gonna let you down! Never gonna run around and desert you!',
                )
              }
            />
          ),
        })}
        initialParams={{ author: 'Gandalf' }}
      />

    </Stack.Navigator>
  );
}
export default AuthStack;
const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    padding: 8,
  },
  button: {
    margin: 8,
  },
  banner: {
    textAlign: 'center',
    color: 'tomato',
    backgroundColor: 'papayawhip',
    padding: 4,
  },
});
