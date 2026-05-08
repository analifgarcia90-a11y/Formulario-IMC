import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Cilindro = () => {
  const [radio, setRadio] = useState('');
  const [altura, setAltura] = useState('');
  const [volumen, setVolumen] = useState(null);

  const calcularVolumen = () => {
    const r = parseFloat(radio);
    const h = parseFloat(altura);

    if (!isNaN(r) && !isNaN(h) && r > 0 && h > 0) {
      const resultado = Math.PI * Math.pow(r, 2) * h;
      setVolumen(resultado.toFixed(2)); 
    } else {
      setVolumen('Ingrese valores válidos');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Volumen de un Cilindro</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Ingrese el radio"
        value={radio}
        onChangeText={setRadio}
        keyboardType="numeric"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Ingrese la altura"
        value={altura}
        onChangeText={setAltura}
        keyboardType="numeric"
      />
      
      <TouchableOpacity style={styles.button} onPress={calcularVolumen}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      {volumen !== null && <Text style={styles.result}>El volumen es: {volumen}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f8ff', 
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4B0082', 
    marginBottom: 20,
  },
  input: {
    width: '90%',
    height: 50,
    borderColor: '#7B68EE', 
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    fontSize: 18,
    backgroundColor: '#ffffff',
  },
  button: {
    backgroundColor: '#6A5ACD', 
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginTop: 10,
    elevation: 3, 
    shadowColor: '#000', 
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  result: {
    marginTop: 20,
    fontSize: 20,
    color: '#4B0082', 
    fontWeight: 'bold',
  },
});

export default Cilindro;
