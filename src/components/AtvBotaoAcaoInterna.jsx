Crie e exporte por padrão um componente chamado "AtvBotaoAcaoInterna" que não recebe nenhum argumento. Este componente deve exibir uma <View> com dois elementos: um <Text> com o texto "Clique abaixo", e um <Pressable> com o texto "Clique aqui" que ao ser clicado exibe um alerta com o texto "Fui clicado!"
*/

import { View, Pressable, Text, StyleSheet } from "react-native";

export default function Botao(){
    return(
        <View>
            <Text>Clique Abaixo</Text>
            <Pressable onPress={() => console.log("Fui clicado")}>
                <Text>Clique aqui</Text>
            </Pressable>
        </View>
    )
}/*
[ATIVIDADE BOTÃO COM AÇÃO INTERNA]

Crie e exporte por padrão um componente chamado "AtvBotaoAcaoInterna" que não recebe nenhum argumento. Este componente deve exibir uma <View> com dois elementos: um <Text> com o texto "Clique abaixo", e um <Pressable> com o texto "Clique aqui" que ao ser clicado exibe um alerta com o texto "Fui clicado!"
*/
