import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    ActivityIndicator,
    StatusBar
} from "react-native";
import Weather from "./weather";

const API_KEY = "8d7d216fb52b34f60c9eaba0bbdb4931";
//api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}
export default class App extends Component {
    state = {
        isLoaded: false,
        error: null,
        temperature: null,
        name: null
    };
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            position => {
                this._getWeater(
                    position.coords.latitude,
                    position.coords.longitude
                );
            },
            error => {
                this.setState({
                    error: error
                });
            }
        );
    }
    _getWeater = (lat, lon) => {
        fetch(
            `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`
        )
            .then(response => response.json())
            .then(json => {
                this.setState({
                    temperature: json.main.temp,
                    name: json.weather[0].main,
                    isLoaded: true
                });
            });
    };
    render() {
        const { isLoaded, error, temperature, name } = this.state;
        return (
            <View style={styles.container}>
                <StatusBar hidden={true} />
                {isLoaded ? (
                    <Weather
                        weatherName={name}
                        temp={Math.floor(temperature - 273.15)}
                    />
                ) : (
                    <View style={styles.loading}>
                        <Text style={styles.loadingText}>
                            Getting the f-weather
                            {error ? (
                                <Text style={styles.errorText}>{error}</Text>
                            ) : null}
                        </Text>
                    </View>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    errorText: {
        color: "red",
        backgroundColor: "transparent",
        marginBottom: 40
    },
    loading: {
        flex: 1,
        backgroundColor: "#FDF6AA",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    loadingText: {
        fontSize: 38,
        marginBottom: 100
    }
});
