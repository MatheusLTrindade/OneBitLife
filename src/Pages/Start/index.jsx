import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

export default function Start(){
    
    return(
        <View style={styles.container}>
            <ScrollView showVerticalScrollIndicator={false}>
                <View style={{ alignItems: "center" }}>
                    <Image 
                        source={require("../../assets/icons/logo3.png")}
                        style={styles.logo}
                    />
                    <Text style={styles.description}>
                        Vamos transformar sua vida {"\n"} em jogo, buscando sempre {"\n"}{" "}
                        o melhor nível.
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(21, 21, 21, 0.98)",
    },
    logo: {
        width: 300,
        heigth: 60,
        marinTop: 60,
        marginBottom: 20,
    }, 
    description: {
        color: "#FFFFFF",
        fontSize: 20,
        textAlign: "center",
        marginVertical: 60,
    },
})