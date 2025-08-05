import {StyleSheet, View, Image, TouchableOpacity, Text} from 'react-native';
import {HeaderTabs} from "../../components/HeaderTabs";
import React from "react";


export function SkillsScreen() {
    const softSkills = ["comunicação eficaz", "liderança", "trabalho em equipe", "resolução de problemas", "inteligência emocional", "adaptabilidade e gestão do tempo"]
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.titleG}>Skills</Text>
                <View style={styles.row}>
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
                <View>
                    <Text style={[styles.title, styles.center]}>Soft Skills</Text>
                    {softSkills.map((item, index) => (
                        <Text key={index} style={[styles.tags, styles.center]}>{item}</Text>
                    ))}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#223',
        width: '100%',
    },
    titleG: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginTop: 10,
    },
    title: {
        fontSize: 18,
        color: '#6c63ff',
    },
    tags: {
        fontSize: 14,
        color: 'white',
        marginLeft: 5,
    },
    header: {
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 5,
    },
    center: {
        textAlign: 'center',
    },
    center2: {
        alignSelf: 'center',
    }
})