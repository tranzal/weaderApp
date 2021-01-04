import React from 'react';
import PropTypes from 'prop-types';
import {View,Text,StyleSheet,StatusBar} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {LinearGradient} from "expo-linear-gradient";

const weatherOptions={
    Thunderstorm:{
        iconName:"cloud-lightning",
        gradient:["#4DA0B0","#D39D38"]
    },
    Drizzle:{
        iconName:"cloud-drizzle",
        gradient:["#4DA0B0","#D39D38"]
    },
    Rain:{
        iconName:"weather-pouring",
        gradient:["#4DA0B0","#D39D38"]
    },
    Snow:{
        iconName:"cloud-snow",
        gradient:["#4DA0B0","#D39D38"]
    },
    Clear:{
        iconName:"weather-sunny",
        gradient:["#4DA0B0","#D39D38"]
    },
    Clouds:{
        iconName:"weather-partly-cloudy",
        gradient:["#4DA0B0","#D39D38"]
    },
    Haze:{
        iconName:"weather-hail",
        gradient:["#4DA0B0","#D39D38"]
    },
    Mist:{
        iconName:"weather-fog",
        gradient:["#4DA0B0","#D39D38"]
    },
    Dust:{
        iconName:"weather-fog",
        gradient:["#4DA0B0","#D39D38"]
    },
    Atmosphere:{
        iconName:"weather-fog",
        gradient:["#4DA0B0","#D39D38"]
    }
}

export default function Weather({temp,condition}){
    console.log(condition);
    return (
        <LinearGradient colors={weatherOptions[condition].gradient}
                        style={styles.container}
        >
            <StatusBar barStyle={"light-content"}/>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons size={96} name={weatherOptions[condition].iconName} color={"white"}/>
                <Text style={styles.temp}>{temp}º</Text>
            </View>
            <View style={styles.halfContainer}>
                <Text style={styles.temp}>하하하하하</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp:PropTypes.number.isRequired,
    condition:PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust",
        "Atmosphere"
    ]).isRequired
}

const styles = StyleSheet.create({
   container : {
       flex: 1,
       justifyContent:"center",
       alignItems:"center"
   },
    halfContainer:{
       flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    temp:{
       fontSize:42,
        color:"white"
    }
});