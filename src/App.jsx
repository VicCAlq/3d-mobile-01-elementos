import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import root from './styles/main';
import Divisoria from './components/Divisoria';
import Paragrafo from './components/Paragrafo';
import Botao from './components/Botao';
import AtvParagrafo from './components/AtvParagrafo';
import AtvDivisoria from './components/AtvDivisoria';
export default function App() {
  return (
    <View style={styles.container}>
      <AtvDivisoria
        largura={70}
      />
      <Divisoria>
        <AtvParagrafo
          titulo={"titulo"}
          conteudo={"conteudo"}
        />
        <Botao/>
      </Divisoria>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: root.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: root.colors.texto
  }
});
