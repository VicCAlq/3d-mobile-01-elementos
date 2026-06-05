/*
[ATIVIDADE PARÁGRAFO]

Crie e exporte por padrão um componente chamado "AtvParagrafo" que recebe dois argumentos: um "titulo" e um "conteudo". O componente deve exibir uma <View> com dois elementos <Text> internos, um que terá o conteúdo do argumento "título" e outro que terá o conteúdo do argumento "conteudo". O texto de "titulo" deve ter o tamanho de 32px, e o texto de "conteudo" deve ter o tamanho de 16px. O texto do "titulo" deve ficar acima do texto do "conteudo".
*/
import { Text, StyleSheet } from 'react-native';
import root from '../styles/main';

const estilo = StyleSheet.create({
  titilo: {
    color: rgb(117, 117, 117),
    fontSize: "32px",
  }
  cont: {
    color: rgb(65, 65, 65),
    fontSize: "16px"
  }
})

export default function Paragrafo({conteudo, titulo})  {
  return(
    <view> 
         <Text style={estilo.conteudo}>{conteudo}</Text>
         <Text style={estilo.titulo}>{titulo}</Text>
    </view>
  
  )
}

