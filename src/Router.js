import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from './components/home/Home';
import WishList from './components/wishList/WishList';
import Search from './components/search/Search';
import Film from './components/films/Film';

const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();

const SearchStack = createStackNavigator();

const WishListStack = createStackNavigator();

const options = {
  headerShown: false,
  gestureEnabled: false,
  cardOverlayEnabled: true,
};

const tabBarOptions = {
  activeTintColor: 'white',
  inactiveTintColor: 'gray',
  labelStyle: {
    fontSize: 13,
    fontWeight: '700',
  },
  style: {
    backgroundColor: '#000000',
    borderWidth: 0,
    borderTopColor: '#000000',
  },
};

function HomeStackScreen() {
  return (
    <HomeStack.Navigator initialRouteName="Home" screenOptions={options}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Film" component={Film} />
    </HomeStack.Navigator>
  );
}

function SearchStackScreen() {
  return (
    <SearchStack.Navigator initialRouteName="Search" screenOptions={options}>
      <SearchStack.Screen name="Search" component={Search} />
      <SearchStack.Screen name="Film" component={Film} />
    </SearchStack.Navigator>
  );
}

function WishListStackScreen() {
  return (
    <WishListStack.Navigator
      initialRouteName="WishList"
      screenOptions={options}>
      <WishListStack.Screen name="WishList" component={WishList} />
      <WishListStack.Screen name="Film" component={Film} />
    </WishListStack.Navigator>
  );
}

export default function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={tabBarOptions}>
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarLabel: 'Accueil',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchStackScreen}
          options={{
            tabBarLabel: 'Rechercher',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="magnify"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="WishList"
          component={WishListStackScreen}
          options={{
            tabBarLabel: 'Mes Films',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="heart" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
