import { StyleSheet, Text, View } from 'react-native';
import LoginForm from './src/components/LoginForm';
import Hello from './src/components/Hello';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Bienvenido a Idun</Text>
      <Hello firstname="Perico" lastname="García"/>
      <Hello firstname={undefined} lastname={undefined}/>
      <LoginForm />
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
