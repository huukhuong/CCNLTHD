import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../navigations/RootStackParams';

type Props = NativeStackScreenProps<RootStackParams, 'DetailScreen'>;

const DetailScreen = ({navigation, route}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Message: {route.params.message}</Text>
      <Button
        title="Go back to Home screen"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  txt: {
    color: '#333',
    fontSize: 16,
  }
});
