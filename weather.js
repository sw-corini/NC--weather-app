import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";

const weatherCases = {
    Rain: {
        colors: ["#00C6FB", "#005BEA"],
        title: "Raining",
        subtitle: "For more info look outside",
        icon: "weather-rainy"
    },
    Clear: {
        colors: ["#FEF253", "#FF7300"],
        title: "Sunny",
        subtitle: "Go get your ass burnt",
        icon: "weather-sunny"
    },
    Thunderstorm: {
        colors: ["#00ECBC", "#007ADF"],
        title: "Thunderstorm",
        subtitle: "Actually, outside of the house",
        icon: "weather-lightning"
    },
    Clouds: {
        colors: ["#D7D2CC", "#304352"],
        title: "Clouds",
        subtitle: "I know, fucking boring",
        icon: "weather-cloudy"
    },
    Snow: {
        colors: ["#7DE2FC", "#B9B6E5"],
        title: "Snow",
        subtitle: "Do you want to build a snowman?",
        icon: "weather-snowy"
    },
    Mist: {
        colors: ["#89F7FE", "#66A8FF"],
        title: "Mist",
        subtitle: "Mist...",
        icon: "weather-fog"
    },
    Drizzle: {
        colors: ["#89F7FE", "#66A8FF"],
        title: "Drizzle",
        subtitle: "Drizzle...",
        icon: "weather-hail"
    },
    Haze: {
        colors: ["#89F7FE", "#66A8FF"],
        title: "Haze",
        subtitle: "Haze...",
        icon: "weather-windy"
    }
};
function weather({ weatherName, temp }) {
    return (
        <LinearGradient
            colors={weatherCases[weatherName].colors}
            style={styles.container}
        >
            <View style={styles.upper}>
                <MaterialCommunityIcons
                    color="white"
                    size={150}
                    name={weatherCases[weatherName].icon}
                />
                <Text style={styles.temp}>{temp}℃</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>
                    {weatherCases[weatherName].title}
                </Text>
                <Text style={styles.subtitle}>
                    {weatherCases[weatherName].subtitle}
                </Text>
            </View>
        </LinearGradient>
    );
}

weather.PropTypes = {
    temp: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired
};
export default weather;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    temp: {
        fontSize: 48,
        backgroundColor: "transparent",
        color: "#fff"
    },
    lower: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingLeft: 25
    },
    title: {
        fontSize: 38,
        backgroundColor: "transparent",
        color: "#fff",
        marginBottom: 10,
        fontWeight: "300"
    },
    subtitle: {
        fontSize: 24,
        backgroundColor: "transparent",
        color: "#fff",
        marginBottom: 24
    }
});
