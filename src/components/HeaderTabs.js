import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export const HeaderTabs = ({ navigationState, jumpTo }) => {
    const { index, routes } = navigationState;

    return (
        <>
            <View style={styles.header}>
                <Image style={styles.logo} source={require("../assets/logo.png")} />
            </View>

            <View style={styles.categories}>
                {routes.map((route, i) => {
                    const active = i === index;
                    return (
                        <TouchableOpacity
                            key={route.key}
                            onPress={() => jumpTo(route.key)}
                            style={[styles.tab, active && styles.activeTab]}
                        >
                            <Text style={[styles.tabText, active && styles.activeText]}>
                                {route.title}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>

            <View style={styles.divisor} />
        </>
    );
};

const styles = StyleSheet.create({
    header: {
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingLeft: 15,
        paddingTop: 10,
    },
    logo: {
        width: 200,
        height: 128,
        resizeMode: "contain",
    },
    categories: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    tab: {
        padding: 10,
    },
    activeText: {
        color: "#48419e",
    },
    tabText: {
        color: "white",
        fontSize: 14,
    },
    divisor: {
        width: "100%",
        height: 1,
        backgroundColor: "#555",
    },
});
