import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Promedio = () => {
  const [cal1, setCal1] = useState('');
  const [cal2, setCal2] = useState('');
  const [cal3, setCal3] = useState('');
  const [promedio, setPromedio] = useState(null);
  const [estado, setEstado] = useState('');

  const calcularPromedio = () => {
    const c1 = parseFloat(cal1);
    const c2 = parseFloat(cal2);
    const c3 = parseFloat(cal3);

    if (!isNaN(c1) && !isNaN(c2) && !isNaN(c3)) {
      const resultado = (c1 + c2 + c3) / 3;
      setPromedio(resultado.toFixed(2));

      if (resultado >= 6) {
        setEstado('Aprobado');
      } else {
        setEstado('Reprobado');
      }
    } else {
      setPromedio('Ingrese valores válidos');
      setEstado('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Promedio</Text>

      <TextInput
        style={styles.input}
        placeholder="Ingrese calificación 1"
        value={cal1}
        onChangeText={setCal1}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Ingrese calificación 2"
        value={cal2}
        onChangeText={setCal2}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Ingrese calificación 3"
        value={cal3}
        onChangeText={setCal3}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={calcularPromedio}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      {promedio !== null && (
        <View style={styles.resultContainer}>
          <Text style={styles.result}>Promedio: {promedio}</Text>
          <Text style={[styles.result, estado === 'Aprobado' ? styles.aprobado : styles.reprobado]}>
            {estado}
          </Text>
          <Image
            source={
              estado === 'Aprobado'
                ? require('../assets/happy.jpg') // Ajusta la ruta si es necesario
                : require('../assets/sad.jpg')   // Ajusta la ruta si es necesario
            }
            style={styles.image}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FAF3E0', // Fondo pastel
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#6A0572', // Morado pastel
    marginBottom: 20,
  },
  input: {
    width: '90%',
    height: 50,
    borderColor: '#FF9A8B', // Coral pastel
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
  aprobado: {
    color: 'green',
  },
  reprobado: {
    color: 'red',
  },
  image: {
    width: 80,
    height: 80,
    marginTop: 10,
  },
});

export default Promedio;
