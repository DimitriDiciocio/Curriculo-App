import * as React from "react";
import { StyleSheet, Dimensions, View } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";

import { SobreScreen } from "../Sobre";
import { SkillsScreen } from "../Skills";
import { ProjetosScreen } from "../Projetos";
import { EXPScreen } from "../EXP";
import { ContatoScreen } from "../Contato";
import {HeaderTabs} from "../../components/HeaderTabs";

const initialLayout = { width: Dimensions.get("window").width };

export function Home() {
    const [index, setIndex] = React.useState(0);

    const [routes] = React.useState([
        { key: "sobre", title: "Sobre" },
        { key: "skills", title: "Skills" },
        { key: "projetos", title: "Projetos" },
        { key: "exp", title: "EXP" },
        { key: "contato", title: "Contato" },
    ]);

    const renderScene = SceneMap({
        sobre: SobreScreen,
        skills: SkillsScreen,
        projetos: ProjetosScreen,
        exp: EXPScreen,
        contato: ContatoScreen,
    });

    return (
        <View style={styles.container}>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                renderTabBar={props => <HeaderTabs {...props} />} // se quiser usar seu HeaderTabs personalizado
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#223",
    },
});
