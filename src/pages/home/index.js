import { useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native';
import Slider from '@react-native-community/slider';
import { ModalPassword } from '../../components/modal/index';

var screen = Dimensions.get('window');

export  function Home() {
  const [size, setSize] = useState(10)
  const [passswordValue, setpassswordValue] = useState('')
  const [showModal, setshowModal] = useState(false);

  function generatePass() {
    const caracteres = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-+<>?/";
    let senha = "";
    for (let i = 0; i < size; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
      senha += caracteres[indiceAleatorio];
    }
    setpassswordValue(senha);
    setshowModal(true);
  }
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/3567818.jpg")}
        style={styles.img}
      />
      <Text style={styles.title}> {size} caracteres</Text>
      <View style={styles.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={6}
          maximumValue={20}
          thumbTintColor='#FF4F5A'
          minimumTrackTintColor='#433633'
          value={size}
          onValueChange={(e) => {
            setSize(e.toFixed(0))
          }}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={generatePass}>
        <Text style={styles.textButton}>
          Generate Passsword
        </Text>
      </TouchableOpacity>
      <Modal visible={showModal} animationType='slide'>
          <ModalPassword passWord={passswordValue} handleClose={()=>setshowModal(false)}/>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000',
  },
  area: {
    marginTop: 14,
    marginBottom: 14,
    width: '80%',
    backgroundColor: '#fff',
    padding: 8,
  },
  img: {
    resizeMode: 'contain',
    width: screen['width'] * 0.8,
    height: screen['height'] * 0.3,
    // height: 10,

  },
  button: {
    backgroundColor: '#385A64',
    borderRadius: 8,
    width: '80%',
    height: '6%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18,
    marginBottom: 18,
  },
  textButton: {
    color: '#fff'
  },
});
