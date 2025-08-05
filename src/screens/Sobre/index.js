import {StyleSheet, View, Image, TouchableOpacity, Text} from 'react-native';
import {HeaderTabs} from "../../components/HeaderTabs";
import React from "react";


export function SobreScreen() {

    return (
        <>
            <View style={styles.container}>
                <View style={styles.row}>
                    <Image style={styles.image} source={require('../../assets/perfil.png')} />
                    <View style={styles.marginLeft}>
                        <Text style={styles.title}>Dimitri Dev</Text>
                        <Text style={styles.subtitle}>Desenvolvedor Full Stack</Text>
                        <Text style={styles.description}>Sou apaixonado por código e atualmente estudo React Native e desenvolvimento web full stack</Text>
                    </View>
                </View>
            </View>
            <View style={styles.divisor}/>
            <View style={styles.container}>
                <View>
                    <Text style={styles.title2}>Por que Programação</Text>
                    <Text style={styles.description2}>Sempre fui curioso sobre como os aplicativos funcionam e como a tecnologia pode resolver problemas do dia a dia. Escolhi a programação porque acredito que ela é uma ferramenta poderosa para transformar ideias em soluções reais, além de ser uma área que estimula o raciocínio lógico e a criatividade.</Text>
                </View>
                <View>
                    <Text style={styles.title2}>Pontos Fortes</Text>
                    <Text style={styles.description2}>Sou uma pessoa organizada, dedicada e com facilidade para aprender coisas novas. Tenho boa comunicação, gosto de trabalhar em equipe e estou sempre buscando melhorar minhas habilidades, seja em projetos pessoais ou colaborando com outras pessoas desenvolvedoras.</Text>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        backgroundColor: '#223',
    },
    row: {
        flexDirection: 'row',
        marginTop: 30,
        marginLeft: 20,
    },
    image: {
        resizeMode: 'cover',
        width: '150',
        height: '150',
        borderRadius: 100,
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
    subtitle: {
        color: '#6c63ff',
        fontSize: 18,
    },
    marginLeft: {
        marginLeft: 10,
        width: '57%',
    },
    description: {
        color: 'white',
        fontSize: 14,
    },
    divisor: {
        width: '100%',
        height: 1,
        backgroundColor: '#555',
        marginTop: 15,
        marginBottom: 15,
    },
    center: {
        alignItems: 'center',
    },
    title2: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
    },
    description2: {
        color: 'white',
        fontSize: 14,
        marginBottom: 10,
        textAlign: 'justify',
        marginLeft: 5,
        marginRight: 5,
    }
})