import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LaunchScreen from './screens/launch_screen';
import SignInScreen from './screens/signin_screen';
import SignUpScreen from './screens/signup_screen';
import ForgotPasswordScreen from './screens/forgot_Password_Screen';
import RecoveryScreen from './screens/recovery_screen';
import HomeDashboard from './screens/home_dashboard';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LaunchScreen">
        <Stack.Screen name="LaunchScreen" component={LaunchScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="RecoveryScreen" component={RecoveryScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="HomeDashboard" component={HomeDashboard} options={{ headerShown: false }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
