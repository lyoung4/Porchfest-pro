import React, { useState } from 'react';
import { Text, View, TouchableHighlight, TouchableOpacity, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapView from 'react-native-maps';
import Styles from './Styles.js';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import Performers from './performers.json';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen({ navigation }) {
    return (
        <View style={{
            flex: 1, justifyContent: 'center', alignItems: 'center'
        }}>
            <Text>Home!</Text>



            <TouchableHighlight
                onPress={() => navigation.navigate("Porchfest Pro")}
                activeOpacity={0.6}
                underlayColor='red'
            >
                <Text style={Styles.button}>Start App!</Text>
            </TouchableHighlight>

        </View>

    );
}

function AboutScreen() {
    return (
        <View style={{
            flex: 1, justifyContent: 'center', alignItems: 'center'
        }}>
            <Text>About!</Text>
        </View>


    );
}

function PerformersScreen() {
  const performerData = require("./performers.json");

  const onPressFavorite = (data) => {
    console.log("favorited: " + data.item.name);
  };

  const _onPressButton = (data) => {
    alert(
      "Performer: " +
        data.item.name +
        "\n" +
        "Time: " +
        data.item.time +
        "\n" +
        "Address: " +
        data.item.address +
        "\n" +
        "Description: " +
        data.item.description
    );
  };

  //This will be used to render and show only the name of the performer
  const renderPerformer = (data) => {
    return (
      <>
        <View style={Styles.list}>
          <TouchableOpacity onPress={() => onPressFavorite(data)}>
            <Ionicons
              name={"star"}
              size={35}
              color="white"
              style={{ marginLeft: -17 }}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => _onPressButton(data)}>
            <Text style={Styles.performer}>{data.item.name}</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  };

  //once the artist table is filled out with data this code will be used to create a list
  return (
    <View style={{ flex: 1 }}>
      <FlatList data={performerData} renderItem={renderPerformer} />
    </View>
  );
}

function ScheduleScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Schedule!</Text>
    </View>
  );
}

function MapScreen() {

    // 42.450471189820824, -76.49828872162905 --> lat/long of Fall Creek Area
    const [region, setRegion] = useState({
        latitude: 42.450471189820824,
        longitude: -76.49828872162905,
        latitudeDelta: 0.021100,
        longitudeDelta: 0.01314,
    });

    // console.log("latitudeDelta: " + region.latitudeDelta)
    // console.log("longitudeDelta: " + region.longitudeDelta)

    const onRegionChange = (region) => {
        setRegion(region)
    }

    return (
        <View>
            <MapView style={Styles.map}
                region={region}
                onRegionChange={onRegionChange}
            />
        </View>
    );
}

function FavoritesScreen() {
    return (
        <View style={{
            flex: 1, justifyContent: 'center', alignItems: 'center'
        }}>
            <Text>Favorites!</Text>

        </View>
    );
}

function Tabs() {
    return (

        <Tab.Navigator screenOptions={{ headerShown: false }} >
            <Tab.Screen name="About" component={AboutScreen} />
            <Tab.Screen name="Performers" component={PerformersScreen} />
            <Tab.Screen name="Schedule" component={ScheduleScreen} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Favorites" component={FavoritesScreen} />

        </Tab.Navigator>

    )

}

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name='Home' component={HomeScreen} />
                <Stack.Screen name='Porchfest Pro' component={Tabs} />
            </Stack.Navigator>
        </NavigationContainer>


        /*<NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name="Home"
                    component={HomeScreen} />
                <Tab.Screen name="Tabs" component={TabsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
        */

    );
}