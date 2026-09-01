/*
[ATIVIDADE BOTÃO COM AÇÃO EXTERNA]

Crie e exporte por padrão um componente chamado "AtvBotaoAcaoExterna" que recebe como argumento uma função chamada "comando". Este componente deve exibir uma <View> com dois elementos: um <Text> com o texto "Clique abaixo", e um <Pressable> com o texto "Clique aqui" que ao ser pressionado executa a função recebida no argumento "comando".
*/
import { View, Pressable, Text, StyleSheet } from 'react-native';
import root from '../styles/main';

const estilo = StyleSheet.create({
  botao: {
    borderRadius: 5,
    padding: root.spacings.paddingM,
    backgroundColor: root.colors.primaria,
  },

  texto: {
    color: root.colors.texto,
    fontSize: 16,
  },

  caixa: {
    margin: 10,
    // falta colocar mais estilos aqui
  }
});

export default function AtvBotaoAcaoExterna({ comando }) {
  return (
    <View style={estilo.caixa}>
      <Text>Clique abaixo</Text>

      <Pressable
        style={estilo.botao}
        onPress={comando}
      >
        <Text style={estilo.texto}>Clique aqui</Text>
      </Pressable>

      {/* colocar alguma coisa aqui depois */}
    </View>
  );
}
