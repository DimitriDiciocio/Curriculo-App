import {StyleSheet, View, Image, TouchableOpacity, Text} from 'react-native';
import {HeaderTabs} from "../../components/HeaderTabs";
import React from "react";


export function SkillsScreen() {

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.title}>Skills</Text>
                <View>
                    <View>
                        <Text style={styles.title}>Linguagens</Text>
                        <View>
                            <Text style={styles.tags}>Python</Text>
                            <Text style={styles.tags}>JavaScript</Text>
                            <Text style={styles.tags}>GoLang</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.title}>Frameworks</Text>
                        <View>
                            <Text style={styles.tags}>Flask</Text>
                            <Text style={styles.tags}>ReactJS</Text>
                            <Text style={styles.tags}>ReactNative</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.title}>Ferramentas</Text>
                        <View>
                            <Text style={styles.tags}>PyCharm</Text>
                            <Text style={styles.tags}>VSCode</Text>
                            <Text style={styles.tags}>WebStorm</Text>
                            <Text style={styles.tags}>GitHub</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        backgroundColor: '#223',
    },
})