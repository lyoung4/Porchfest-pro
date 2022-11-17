import React, { useEffect, useState } from 'react';
import { Text, View, TouchableHighlight, TouchableOpacity, FlatList, Alert } from 'react-native';
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

function PerformersScreen({ navigation }) {
  const performerData = require("./performers.json");
  const [favorites, setFavorites] = useState([]); // an array of performers that have been favorited
  // const [isFavorited, setIsFavorited] = useState();

  useEffect(()=> {
    console.log('useEffect triggered when favorites state is updated')
    console.log(favorites.length)
  }, [favorites]);

  const onPressFavorite = (data) => { // if the star is clicked, add favorited item to the array 
    if (data.item.isFavorited != true){
      data.item.isFavorited = true;
      // setIsFavorited(true);
      alert('favorited performer: ' + data.item.name)
      var tempArr = [];

      tempArr = favorites.slice();
        tempArr.push({
          "name": data.item.name,
          "time": data.item.time,
          "address": data.item.address,
          "description": data.item.description,
          "latlng": { "latitude": data.item.latlng.latitude, "longitude": data.item.latlng.longitude },
          "isFavorited": data.item.isFavorited
        });
        setFavorites(tempArr);

    }
    else { // if star is clicked again, the item is unfavorited and removed from the array
      data.item.isFavorited = false;
      // setIsFavorited(false);
      alert('unfavorited performer: ' + data.item.name)
      var newArr = [];
      newArr = favorites.slice();
      newArr = newArr.filter(performer => performer.name != data.item.name)

      setFavorites(newArr);
    }
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

  const renderPerformer = (data) => {
    return (
      <>
        <View style={Styles.list}>
          <TouchableOpacity onPress={() => onPressFavorite(data)}>
            <Ionicons
              name={"star"}
              size={35}
              color={data.item.isFavorited ? "gold" : "white"}
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
    );
}