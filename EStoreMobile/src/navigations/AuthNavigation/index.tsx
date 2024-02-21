import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen, SignUpScreen } from "../../screens";

const Stack = createNativeStackNavigator();

function AuthNavigation() {
  return (
      <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      </Stack.Navigator>
  );
}

export default AuthNavigation;