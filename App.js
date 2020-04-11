import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

function ExampleView(props) {
  return (
    <>
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'green',
          flex: 1,
        }}>
        <Icon name="person" size={50} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'yellow',
          flex: 1,
        }}>
        <Icon name="add-box" size={50} color="black" />
      </TouchableOpacity>
      <Text style={{fontFamily: 'flower', fontSize: 60}}>lmlfgdl</Text>
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'purple',
          flex: 1,
        }}>
        <Icon name="details" size={50} color="black" />
      </TouchableOpacity>
    </>
  );
}

export default ExampleView;
