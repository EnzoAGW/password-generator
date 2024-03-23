import { StatusBar } from 'expo-status-bar';
import { Dimensions, Image, StyleSheet, View } from 'react-native';




export default function App() {
  return (
    <View style={styles.container}>
      <Image
      resizeMode = 'cover'
      source={require("./assets/3567818.jpg")}
      style={styles.img}
      />
      <StatusBar style="auto" />
    </View>
  );
}
  var {screen} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#353535',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  img: {
    width: screen * 0.5
  },
});
