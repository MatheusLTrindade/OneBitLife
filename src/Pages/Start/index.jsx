import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

export default function Start(){
    
    return(
        <View>
            <ScrollView showVerticalScrollIndicator={false}>
                <View>
                    <Image
                        source={require("../../asssets/icons/logo3.png")}
                    />
                    <Text>
                        Vamos transformar sua vida {"\n"} em jogo, buscando sempre {"\n"}{" "}
                        o melhor nível.
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
}