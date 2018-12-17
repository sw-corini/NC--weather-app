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

export default class App extends Component {
    state = {
        isLoaded: false,
        error: null
    };
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({
                    isLoaded: true
                });
            },
            error => {
                this.setState({
                    error: error
                });
            }
        );
    }
    render() {
        const { isLoaded, error } = this.state;
        return (
            <View style={styles.container}>
                <StatusBar hidden={true} />
                {isLoaded ? (
                    <Weather />
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
