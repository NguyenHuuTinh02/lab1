import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Vibration } from 'react-native';

export default function Project2() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentNumber, setCurrentNumber] = useState('');
  const [lastNumber, setLastNumber] = useState('');

  const operatorButtons = ['/', '*', '-', '+', '='];

  const handleInput = (buttonPressed) => {
    if (buttonPressed === '') return;
    Vibration.vibrate(25);

    if (buttonPressed === 'C') {
      setCurrentNumber('');
      setLastNumber('');
    } else if (buttonPressed === 'DEL') {
      setCurrentNumber(currentNumber.slice(0, -1));
    } else if (buttonPressed === '=') {
      calculate();
    } else {
      const lastChar = currentNumber[currentNumber.length - 1];
      if (['+', '-', '*', '/'].includes(buttonPressed) && ['+', '-', '*', '/'].includes(lastChar)) {
        return;
      }
      setCurrentNumber(currentNumber + buttonPressed);
    }
  };

  const calculate = () => {
    const lastChar = currentNumber[currentNumber.length - 1];
    if (['+', '-', '*', '/'].includes(lastChar)) {
      return;
    }
    try {
      const result = eval(currentNumber).toString();
      setLastNumber(currentNumber + '=');
      setCurrentNumber(result);
    } catch (error) {
      setCurrentNumber('Error');
    }
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: darkMode ? '#1c2526' : '#fff',
    },
    results: {
      backgroundColor: darkMode ? '#282f3b' : '#f5f5f5',
      width: '100%',
      minHeight: '30%',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      padding: 10,
    },
    resultText: {
      color: darkMode ? '#fff' : '#000',
      margin: 10,
      fontSize: 40,
    },
    historyText: {
      color: darkMode ? '#B5B7BB' : '#7C7C7C',
      fontSize: 20,
      marginRight: 10,
      alignSelf: 'flex-end',
    },
    themeButton: {
      alignSelf: 'flex-start',
      margin: 15,
      backgroundColor: darkMode ? '#7b8084' : '#e5e5e5',
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
      height: 50,
      borderRadius: 25,
    },
    themeButtonText: {
      color: darkMode ? '#fff' : '#000',
      fontSize: 20,
    },
    buttonsContainer: {
      flexDirection: 'row',
      width: '100%',
      height: '60%',
    },
    numberButtons: {
      width: '75%',
      flexDirection: 'column',
    },
    numberRow: {
      flexDirection: 'row',
      height: '20%',
    },
    operatorButtons: {
      width: '25%',
      backgroundColor: '#00b9d6',
      flexDirection: 'column',
    },
    numberButton: {
      width: '33.33%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: darkMode ? '#3f4d5a' : '#e0e0e0',
      backgroundColor: darkMode ? '#333f4f' : '#fff',
    },
    wideButton: {
      width: '50%',
    },
    operatorButton: {
      height: '20%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      color: darkMode ? '#fff' : '#000',
      fontSize: 25,
    },
    operatorButtonText: {
      color: '#fff',
      fontSize: 25,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.results}>
        <Text style={styles.historyText}>{lastNumber}</Text>
        <Text style={styles.resultText}>{currentNumber || '0'}</Text>
      </View>
      <TouchableOpacity style={styles.themeButton} onPress={toggleTheme}>
        <Text style={styles.themeButtonText}>{darkMode ? '☀' : '🌙'}</Text>
      </TouchableOpacity>
      <View style={styles.buttonsContainer}>
        <View style={styles.numberButtons}>
          <View style={styles.numberRow}>
            <TouchableOpacity
              style={[styles.numberButton, styles.wideButton]}
              onPress={() => handleInput('C')}
            >
              <Text style={styles.buttonText}>C</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.numberButton, styles.wideButton]}
              onPress={() => handleInput('DEL')}
            >
              <Text style={styles.buttonText}>DEL</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.numberRow}>
            {['7', '8', '9'].map((button) => (
              <TouchableOpacity
                key={button}
                style={styles.numberButton}
                onPress={() => handleInput(button)}
              >
                <Text style={styles.buttonText}>{button}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.numberRow}>
            {['4', '5', '6'].map((button) => (
              <TouchableOpacity
                key={button}
                style={styles.numberButton}
                onPress={() => handleInput(button)}
              >
                <Text style={styles.buttonText}>{button}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.numberRow}>
            {['1', '2', '3'].map((button) => (
              <TouchableOpacity
                key={button}
                style={styles.numberButton}
                onPress={() => handleInput(button)}
              >
                <Text style={styles.buttonText}>{button}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.numberRow}>
            <TouchableOpacity
              style={[styles.numberButton, styles.wideButton]}
              onPress={() => handleInput('0')}
            >
              <Text style={styles.buttonText}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.numberButton, styles.wideButton]}
              onPress={() => handleInput('.')}
            >
              <Text style={styles.buttonText}>.</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.operatorButtons}>
          {operatorButtons.map((button) => (
            <TouchableOpacity
              key={button}
              style={styles.operatorButton}
              onPress={() => handleInput(button)}
            >
              <Text style={styles.operatorButtonText}>{button}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}
