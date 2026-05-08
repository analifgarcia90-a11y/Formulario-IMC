import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const IMC = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setIMC] = useState(null);
  const [categoria, setCategoria] = useState('');

  const calcularIMC = () => {
    const p = parseFloat(peso);
    const h = parseFloat(altura) / 100; 

    if (!isNaN(p) && !isNaN(h) && h > 0) {
      const resultado = p / (h * h);
      setIMC(resultado.toFixed(2));

      if (resultado < 18.5) {
        setCategoria('Peso Bajo');
      } else if (resultado >= 18.5 && resultado < 24.9) {
        setCategoria('Normal');
      } else if (resultado >= 25 && resultado < 29.9) {
        setCategoria('Sobrepeso');
      } else {
        setCategoria('Obesidad');
      }
    } else {
      setIMC('Ingrese valores válidos');
      setCategoria('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>

      <TextInput
        style={styles.input}
        placeholder="Ingrese su peso (kg)"
        value={peso}
        onChangeText={setPeso}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Ingrese su altura (cm)"
        value={altura}
        onChangeText={setAltura}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={calcularIMC}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      {imc !== null && (
        <View style={styles.resultContainer}>
          <Text style={styles.result}>IMC: {imc}</Text>
          <Text style={[styles.result, getColorCategoria(categoria)]}>{categoria}</Text>
          <Image source={getImage(categoria)} style={styles.image} />
        </View>
      )}
    </View>
  );
};

// Función para asignar color según la categoría
const getColorCategoria = (categoria) => {
  switch (categoria) {
    case 'Peso Bajo': return { color: '#FFB74D' }; // Naranja pastel
    case 'Normal': return { color: '#4CAF50' }; // Verde pastel
    case 'Sobrepeso': return { color: '#FF9800' }; // Amarillo oscuro pastel
    case 'Obesidad': return { color: '#D32F2F' }; // Rojo pastel
    default: return {};
  }
};

// Función para asignar imagen según la categoría
const getImage = (categoria) => {
  switch (categoria) {
    case 'Peso Bajo': return require('../assets/underweight.jpg'); 
    case 'Normal': return require('../assets/normal.jpg');
    case 'Sobrepeso': return require('../assets/sobrepeso.jpg');
    case 'Obesidad': return require('../assets/obesidad.jpg');
    default: return null;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#E3F2FD', // Azul pastel
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#512DA8', // Morado pastel
    marginBottom: 20,
  },
  input: {
    width: '90%',
    height: 50,
    borderColor: '#FFAB91', // Naranja suave
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    fontSize: 18,
    backgroundColor: '#ffffff',
  },
  button: {
    backgroundColor: '#FF6F61', // Rojo pastel
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
  resultContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  result: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
});

export default IMC;
