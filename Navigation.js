import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  FlatList,
  TextInput,
  Alert,
  Modal,
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MapView from "react-native-maps";
import Styles from "./Styles.js";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Marker } from "react-native-maps";

export default function Navigation() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const performerData = require("./performers.json");
  const [favorites, setFavorites] = useState([]);

  function HomeScreen({ navigation }) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Home!</Text>

        <TouchableHighlight
          onPress={() => navigation.navigate("Porchfest Pro")}
          activeOpacity={0.6}
          underlayColor="red"
        >
          <Text style={Styles.button}>Start App!</Text>
        </TouchableHighlight>
      </View>
    );
  }

  function AboutScreen() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>About!</Text>
      </View>
    );
  }

  function PerformersScreen() {
    const [search, setSearch] = useState("");
    const [performers, setPerformers] = useState(performerData);
    const [modalVisible, setModalVisible] = useState(false);
    const [name, setName] = useState("");
    const [time, setTime] = useState("");
    const [address, setAddress] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
      // need useEffect to prevent infinite re-rendering
      if (search.length == 0) {
        setPerformers(performerData);
      } else {
        const result = performers.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        );
        setPerformers(result);
      }
    }, [search]);

    const onPressFavorite = (data) => {
      if (data.item.isFavorited != true) {
        data.item.isFavorited = true;
        var tempArr = [];
        tempArr = favorites.slice();
        tempArr.push({
          name: data.item.name,
          time: data.item.time,
          address: data.item.address,
          description: data.item.description,
          latlng: {
            latitude: data.item.latlng.latitude,
            longitude: data.item.latlng.longitude,
          },
          isFavorited: data.item.isFavorited,
        });
        Alert.alert("Favorited " + data.item.name);
        setFavorites(tempArr);
      } else {
        data.item.isFavorited = false;
        var newArr = [];
        newArr = favorites.slice();
        newArr = newArr.filter((performer) => performer.name != data.item.name);
        Alert.alert("Unfavorited " + data.item.name);
        setFavorites(newArr);
      }
    };

    const _onPressButton = (data) => {
      setName(data.item.name);
      setTime(data.item.time);
      setAddress(data.item.address);
      setDescription(data.item.description);
      setModalVisible(true);
    };

    const renderPerformer = (data) => {
      return (
        <>
          <View style={Styles.performerList}>
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
        <TextInput
          style={Styles.searchbar}
          onChangeText={setSearch}
          value={search}
          placeholder="Search performer"
        />
        <FlatList data={performers} renderItem={renderPerformer} />
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={Styles.centeredView}>
            <View style={Styles.modalView}>
              <Text style={Styles.modalText}>{name} </Text>
              <Text style={Styles.modalText}>{time} </Text>
              <Text style={Styles.modalText}>{address} </Text>
              <Text style={Styles.modalText}>{description} </Text>

              <TouchableHighlight
                style={{ ...Styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={Styles.textStyle}>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    );
  }

  function ScheduleScreen() {
    const [schedule, setSchedule] = useState([
      {
        time: "12-1 pm",
        performers: [],
      },
      {
        time: "1-2 pm",
        performers: [],
      },
      {
        time: "2-3 pm",
        performers: [],
      },
      {
        time: "3-4 pm",
        performers: [],
      },
      {
        time: "4-5 pm",
        performers: [],
      },
      {
        time: "5-6 pm",
        performers: [],
      },
    ]);

    useEffect(() => {
      var performersArr = [...schedule];
      for (var i = 0; i < performersArr.length; i++) {
        var newArr = performerData.filter(
          (val) => val.time === performersArr[i].time
        );
        performersArr[i].performers = newArr.map((performer) => performer.name);
      }
      setSchedule(performersArr);
    }, []);

    const renderSchedule = (data) => {
      return (
        <>
          <View style={Styles.scheduleList}>
            <Text style={Styles.performer}>{data.item.time}</Text>
          </View>
          <View>
            {data.item.performers.map((ele, index) => (
              <Text style={Styles.scheduled} key={index}>
                {"\u2022"} {ele}
              </Text>
            ))}
          </View>
        </>
      );
    };

    return (
      <View style={{ flex: 1 }}>
        <FlatList data={schedule} renderItem={renderSchedule} />
      </View>
    );
  }

  function MapScreen() {
    const [markers, setMarkers] = useState(performerData);
    const [region, setRegion] = useState({
      latitude: 42.450471189820824,
      longitude: -76.49828872162905,
      latitudeDelta: 0.0211,
      longitudeDelta: 0.01314,
    });

    const onRegionChange = (region) => {
      setRegion(region);
    };

    return (
      <View>
        <MapView
          style={Styles.map}
          region={region}
          onRegionChange={onRegionChange}
        >
          {markers.map((marker, index) => (
            <Marker
              key={index}
              coordinate={marker.latlng}
              title={marker.name}
              description={marker.address}
              pinColor="blue"
            />
          ))}
        </MapView>
      </View>
    );
  }

  function FavoritesScreen() {
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

    const renderFavorites = (data) => {
      return (
        <>
          <View style={Styles.favoritedList}>
            <TouchableOpacity onPress={() => _onPressButton(data)}>
              <Text style={Styles.performer}>{data.item.name}</Text>
            </TouchableOpacity>
          </View>
        </>
      );
    };

    return (
      <View style={{ flex: 1 }}>
        <FlatList data={favorites} renderItem={renderFavorites} />
      </View>
    );
  }

  function Tabs() {
    return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="About"
          component={AboutScreen}
          options={{
            // tabBarActiveTintColor: "#6FD6F6",
            tabBarIcon: ({ focused, color, size }) => {
              let iconName = focused
                ? "information-circle"
                : "information-circle-outline";
              return <Ionicons name={iconName} color={color} size={size} />;
            },
            tabBarActiveTintColor: "#6FD6F6",
            tabBarInactiveTintColor: "#6FD6F6",
          }}
        />
        <Tab.Screen
          name="Performers"
          component={PerformersScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              let iconName = focused ? "people" : "people-outline";
              return <Ionicons name={iconName} color={color} size={size} />;
            },
            tabBarActiveTintColor: "#6FD6F6",
            tabBarInactiveTintColor: "#6FD6F6",
          }}
        />
        <Tab.Screen
          name="Schedule"
          component={ScheduleScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              let iconName = focused ? "ios-calendar" : "ios-calendar-outline";
              return <Ionicons name={iconName} color={color} size={size} />;
            },
            tabBarActiveTintColor: "#6FD6F6",
            tabBarInactiveTintColor: "#6FD6F6",
          }}
        />
        <Tab.Screen
          name="Map"
          component={MapScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              let iconName = focused ? "map" : "map-outline";
              return <Ionicons name={iconName} color={color} size={size} />;
            },
            tabBarActiveTintColor: "#6FD6F6",
            tabBarInactiveTintColor: "#6FD6F6",
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              let iconName = focused ? "star" : "star-outline";
              return <Ionicons name={iconName} color={color} size={size} />;
            },
            tabBarActiveTintColor: "#6FD6F6",
            tabBarInactiveTintColor: "#6FD6F6",
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Porchfest Pro" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
