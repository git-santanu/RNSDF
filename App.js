import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, World!!</Text>
      <Button accessibilityLabel='T' color="#35546e" title="Click me!" onPress={() => alert('Button clicked!')} />
      <StatusBar style="auto" />
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
  text: {
    margin: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});
