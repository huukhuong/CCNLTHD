import {View, TextInput, Button, Alert, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../navigations/RootStackParams';

type Props = NativeStackScreenProps<RootStackParams, 'HomeScreen'>;

const HomeScreen = ({navigation}: Props) => {
  const [message, setMessage] = useState('');

  const handlePressButton = () => {
    if (message.trim()) {
      navigation.navigate('DetailScreen', {message});
    } else {
      Alert.alert('Error', 'Please enter the message');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter the message"
        value={message}
        onChangeText={setMessage}
      />

      <Button
        title="Sen message to Detail screen"
        onPress={handlePressButton}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  input: {
    borderColor: '#c9c9c9',
    borderWidth: 1,
    borderRadius: 8,
    height: 45,
    paddingHorizontal: 10,
  },
});
