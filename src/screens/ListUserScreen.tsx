import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {RootObject, UserModel} from '../models/UserModel';
import axios from 'axios';

const ListUserScreen = () => {
  const [usersList, setUsersList] = useState<UserModel[]>([]);

  useEffect(() => {
    getListUsers();
  }, []);

  const getListUsers = () => {
    axios
      .get('https://randomuser.me/api/?results=100')
      .then(res => {
        const root = res.data as RootObject;
        const users = root.results;
        setUsersList(users);
      })
      .catch(e => console.error(e));
  };

  type props = {user: UserModel};
  const RenderItem = ({user}: props) => {
    return (
      <View style={styles.itemRow}>
        <Image
          source={{uri: user.picture.medium}}
          style={{width: 80, height: 80}}
        />
        <View>
          <Text style={styles.userText}>
            {user.name.title}. {user.name.first} {user.name.last}
          </Text>

          <Text style={styles.userText}>
            Gender: {user.gender}
          </Text>

          <Text style={styles.userText}>
            Email: {user.email}
          </Text>

          <Text style={styles.userText}>
            Phone: {user.phone}
          </Text>

          <Text style={styles.userText}>
            Country: {user.location.country}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={usersList}
        keyExtractor={item => item.login.uuid}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({item}) => <RenderItem user={item} />}
      />
    </View>
  );
};

export default ListUserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  // Cập nhật thêm style cho đường phân cách
  separator: {
    height: 1,
    backgroundColor: '#ccc',
  },

  // Cập nhật thêm style cho item component
  itemRow: {
    flexDirection: 'row',
    margin: 5,
    alignItems: 'center',
  },
  userText: {
    margin: 5,
    color: '#333',
  },
});
