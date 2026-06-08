/*
[ATIVIDADE DIVISÓRIA]

Crie e exporte por padrão um componente chamado "AtvDivisoria" que recebe um argumento "largura", cujo valor pode ser entre 10 e 90. O componente deve exibir uma <View> que ocupe 90% da largura da tela visível (use a propriedade "width" com o valor "90vw" para isso), e dentro desta <View> devem ter duas outras <View> exibidas lado a lado. A <View> da esquerda deve ocupar uma percentagem da <View> inicial, essa percentagem é determinada pelo argumento "largura". A <View> da direita deve ocupar a largura restante da <View> inicial. Exemplo:

argumento largura = 30
<View> inicial = 90% da largura da tela
<View> esquerda = 30% da largura da View inicial (30% de 90% da largura da tela)
<View> direita = 70% da largura da View inicial (70% de 90% da largura da  tela)
*/
import {View, Text, StyleSheet } from 'react-native';
import root from '../styles/main';

export default function AtvDivisoria({largura}) {


const estilo = StyleSheet.create({
  titulo: {
    height: "120px",
    width: "90vw",
    backgroundColor: "blue",
    display: "flex",
    flexDirection: "row",
  },
  esquerda: {
      height: "100px",
    width: String(largura) + "%",
    backgroundColor: "purple",
  },
 direita: {
    height: "100px",
    width: String(100-largura) + "%",
    backgroundColor: "purple",
 }

})

  return(
    <View>
        <View style={estilo.titulo}></View>
        <View style={estilo.esquerda}></View>
         <View style={estilo.direita}></View>
    </View>
  )
}
