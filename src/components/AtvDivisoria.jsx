/*
[ATIVIDADE DIVISÓRIA]

Crie e exporte por padrão um componente chamado "AtvDivisoria" que recebe um argumento "largura", cujo valor pode ser entre 10 e 90. O componente deve exibir uma <View> que ocupe 90% da largura da tela visível (use a propriedade "width" com o valor "90vw" para isso), e dentro desta <View> devem ter duas outras <View> exibidas lado a lado. A <View> da esquerda deve ocupar uma percentagem da <View> inicial, essa percentagem é determinada pelo argumento "largura". A <View> da direita deve ocupar a largura restante da <View> inicial. Exemplo:

argumento largura = 30
<View> inicial = 90% da largura da tela
<View> esquerda = 30% da largura da View inicial (30% de 90% da largura da tela)
<View> direita = 70% da largura da View inicial (70% de 90% da largura da  tela)
*/



import {View, StyleSheet} from 'react-native'

export default function AtvDivisoria({largura}){

 const estilo = StyleSheet.create(
    {
      principal: {
        height: "100px",
        width:"90vw",
        backgroundColor: "gray",
        display: "flex",
        flexDirection: "row"
      },
      esquerda: {
        width: String(largura) + "%",
        backgroundColor: "red",
        height: "90px",
      },
      direita: {
        width: String(100 - largura) + "%",
        backgroundColor: "blue",
        height: "90px",
      },
    
    }
  )

  return(
<View style={estilo.principal}>
    <View style={estilo.esquerda}>

    </View>
    <View style={estilo.direita}>
      
    </View>
</View>  
)
}