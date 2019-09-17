
import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    marginLeft: '5%',
    marginRight: '5%',
    flex: 1,
  },
});

const App = () => {
  console.log('render');

  const [password, onChangePassword] = React.useState('');
  const [domain, onChangeDomain] = React.useState('');
  const [salt, onChangeSalt] = React.useState('');

  const [length, onChangeLength] = React.useState(16);
  const [includeNumber, onChangeIncludeNumber] = React.useState(true);
  const [includeSpecial, onChangeIncludeSpecial] = React.useState(true);


// var saltedPassword = saltthepass.saltthepass('md5', 'mypassword', 'mydomain', 'myphrase');

  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.wrapper}>
      <KeyboardAvoidingView behavior="padding" enabled  style={{flex: 1, justifyContent: 'space-around'}}>
        
        <View style={{backgroundColor: 'red'}}>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={text => onChangePassword(text)}
            value={password}
            placeholder="Master Password"
          />
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 20 }}
            onChangeText={text => onChangeDomain(text)}
            value={domain}
            placeholder="Domain Name"
          />
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 20 }}
            onChangeText={text => onChangeSalt(text)}
            value={salt}
            placeholder="Salt (optional)"
          />
          <Text style={{marginTop: 35, textAlign: 'center'}}>
            Output
          </Text>
        </View>

        </KeyboardAvoidingView>
      </SafeAreaView>
    </Fragment>
  );
};

export default App;
