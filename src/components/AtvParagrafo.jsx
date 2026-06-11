/*
[ATIVIDADE PARÁGRAFO]

Crie e exporte por padrão um componente chamado "AtvParagrafo" que recebe dois argumentos: um "titulo" e um "conteudo". O componente deve exibir uma <View> com dois elementos <Text> internos, um que terá o conteúdo do argumento "título" e outro que terá o conteúdo do argumento "conteudo". O texto de "titulo" deve ter o tamanho de 32px, e o texto de "conteudo" deve ter o tamanho de 16px. O texto do "titulo" deve ficar acima do texto do "conteudo".
*/

import { Text, StyleSheet, View} from 'react-native';

const estilo = StyleSheet.create({
  titulo: {
    color: "white",
    fontSize: "32px",
  },
  conteudo:{
    color: "black",
    fontSize: "16px",
  }
})

export default function Paragrafo({titulo, conteudo})  {
  return(
    <View>
      <Text style={estilo.titulo}>{titulo}</Text>
      <Text style={estilo.conteudo}>{conteudo}</Text>
    </View>
  )
}
