import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import { View, TouchableOpacity, Text } from 'react-native';
import { FC } from 'react';
import { HomeScreen, ProfileScreen, SettingScreen } from '../../screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductListingScreen from '../../screens/ProductListingScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
interface CustomTabBarProps {
  props: { 
    state: any,
    descriptors: any,
    navigation: any 
  };
}

function MainNavigation() {

  const BottomNav = () => {
    const MyTabBar: FC<CustomTabBarProps> = ({ props }) => {
      const { state, descriptors, navigation } = props;
      return (
        <View style={{ flexDirection: 'row', height: 80, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff' }}>
          {state?.routes.map((route: {key: number, name: string}, index: number) => {
            const { options } = descriptors[route.key];
            const label =
              options?.tabBarLabel !== undefined
                ? options?.tabBarLabel
                : options?.title !== undefined
                  ? options?.title
                  : route.name;
  
            const isFocused = state.index === index;
  
            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });
  
              if (!isFocused && !event.defaultPrevented) {
                // The `merge: true` option makes sure that the params inside the tab screen are preserved
                navigation.navigate({ name: route.name, merge: true });
              }
            };
  
            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };
  
            return (
              <View key={index} style={{ flex: 1, height: '100%', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#ffffff', gap: 10, }}>
  
                <View style={[{ borderColor: '#fff', borderTopWidth: 4, width: '100%' }, isFocused ? { borderColor: '#FF9B25' } : null]}></View>
  
                <TouchableOpacity
                  accessibilityRole="button"
                  accessibilityState={isFocused ? { selected: true } : {}}
                  accessibilityLabel={options?.tabBarAccessibilityLabel}
                  testID={options?.tabBarTestID}
                  onPress={onPress}
                  onLongPress={onLongPress}
                  style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}
                >
                  {options?.tabBarIcon({
                    color: isFocused ? '#FF9B25' : '#848484'
                  })}
                  <Text style={{ color: isFocused ? '#FF9B25' : '#848484' }}>
                    {label}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      );
  
    }
  
  
    return (
        <Tab.Navigator
          tabBar={(props) => <MyTabBar props={props} />}
          screenOptions={(props) => {
            return {
              tabBarHideOnKeyboard: true,
              headerShown: false,
              tabBarStyle: { position: 'absolute' },
              tabBarLabelStyle: { fontFamily: 'Inter' },
            }
          }}
        >
          <Tab.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: (props) => (
                <MaterialCommunityIcons name="home-outline" size={30} style={{ color: props.color }} />
              ),
              tabBarLabelStyle: { fontFamily: 'Inter' }
            }}
          />
          <Tab.Screen
            name="SettingScreen"
            component={SettingScreen}
            options={{
              tabBarLabel: 'Settings',
              tabBarIcon: (props) => (
                <MaterialCommunityIcons name="cog-outline" size={30} style={{ color: props.color }} />
              ),
              tabBarLabelStyle: { fontFamily: 'Inter' }
            }}
          />
          <Tab.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: (props) => (
                <Feather name="user" size={30} style={{ color: props.color }} />
              ),
              tabBarLabelStyle: { fontFamily: 'Inter' }
            }}
          />
        </Tab.Navigator>
    );
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Group>
        <Stack.Screen name="main" component={BottomNav} />
      </Stack.Group>
      {/* ------------- FULLSCREENS ------------- */}
      <Stack.Group>
        <Stack.Screen name="ProductListingScreen" component={ProductListingScreen} />

      </Stack.Group>
    </Stack.Navigator>
  )
}

export default MainNavigation;