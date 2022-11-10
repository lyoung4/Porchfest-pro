import * as React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Styles from './Styles.js';

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
    //This will be used to render and show only the name of the performer
    const renderPerfomer = (performer) => (
        <View style={styles.item}>
          <Text style={styles.title}>{performer.item.name}</Text>
        </View >
      );

    //once the artist table is filled out with data this code will be used to create a list 
    //<FlatList
    //    data={artist}
    //    renderPerformer={renderPerformer} />

    return (
        <View style={{
            flex: 1, justifyContent: 'center', alignItems: 'center'
        }}>
            <Text>Performers!</Text>

        </View>
    );
}

function ScheduleScreen() {
    return (
        <View style={{
            flex: 1, justifyContent: 'center', alignItems: 'center'
        }}>
            <Text>Schedule!</Text>

        </View>
    );
}

function MapScreen() {
    return (
        <View style={{
            flex: 1, justifyContent: 'center', alignItems: 'center'
        }}>
            <Text>Map!</Text>

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

        <Tab.Navigator screenOptions = {{ headerShown: false}} >
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
                <Stack.Screen name = 'Porchfest Pro' component={Tabs}/>
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