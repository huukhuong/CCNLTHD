import {StyleSheet, View} from 'react-native';
import React from 'react';

const FlexBox = () => {
  return (
    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
      <View style={[styles.box, {backgroundColor: 'red'}]} />
      <View style={[styles.box, {backgroundColor: 'green'}]} />
      <View style={[styles.box, {backgroundColor: 'blue'}]} />
    </View>
  );
};

export default FlexBox;

const styles = StyleSheet.create({
  box: {
    width: 50,
    height: 50,
  },
});
