import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  StyleSheet,
  ActivityIndicator,
  Button,
  Alert,
  TouchableOpacity,
  Switch,
  FlatList,
  Modal,
} from 'react-native';
import React, {useState} from 'react';

const CoreComponent = () => {
  const [switchValue, setSwitchValue] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={[styles.txtTitle, {textAlign: 'center', fontSize: 24}]}>
          Core Components
        </Text>

        <View style={styles.row}>
          <View>
            <Text style={styles.txtTitle}>Image use URL</Text>
            <Image
              source={{
                uri: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
              }}
              style={{width: 100, height: 100, resizeMode: 'cover'}}
            />
          </View>

          <View>
            <Text style={styles.txtTitle}>Image use local file</Text>
            <Image
              source={require('../../assets/react_native_logo.png')}
              style={{width: 100, height: 100, resizeMode: 'cover'}}
            />
          </View>
        </View>

        <Text style={styles.txtTitle}>Text Input</Text>
        <TextInput style={styles.txtInput} placeholder="This is text input" />

        <Text style={styles.txtTitle}>Text Input (Password)</Text>
        <TextInput style={styles.txtInput} secureTextEntry value="12345678" />

        <Text style={styles.txtTitle}>Activity Indicator</Text>
        <View style={styles.row}>
          <ActivityIndicator />
          <ActivityIndicator size={'large'} />
          <ActivityIndicator color={'red'} />
        </View>

        <Text style={styles.txtTitle}>Button</Text>
        <Button
          title="Press me"
          onPress={() => Alert.alert('Message', 'Button pressed')}
        />

        <Text style={styles.txtTitle}>Touchable Opacity</Text>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Press me</Text>
        </TouchableOpacity>

        <Text style={styles.txtTitle}>Switch</Text>
        <View style={styles.row}>
          <Text style={{color: '#333'}}>Turn on sync</Text>
          <Switch value={switchValue} onValueChange={setSwitchValue} />
        </View>

        <Text style={styles.txtTitle}>Modal</Text>
        <Button title="Show modal" onPress={() => setModalShow(true)} />

        <Modal
          visible={modalShow}
          transparent
          animationType="fade"
          statusBarTranslucent>
          <View style={styles.modalBackground}>
            <View style={styles.modalContent}>
              <Text style={styles.txtTitle}>
                This is modal
              </Text>
              <Button
                title="Hidden modal"
                onPress={() => setModalShow(false)}
              />
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

export default CoreComponent;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txtTitle: {
    marginTop: 20,
    color: '#333',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  txtInput: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#cccccc',
    height: 45,
    paddingHorizontal: 10,
  },
  btn: {
    backgroundColor: 'green',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  modalBackground: {
    backgroundColor: '#000000aa',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    width: '80%',
    borderRadius: 4,
    alignItems: 'center',
    paddingVertical: 30
  },
});
