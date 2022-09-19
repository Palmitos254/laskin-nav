import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function Calculator({ navigation }) {

  const [text, setText] = useState();
  const [text2, setText2] = useState();
  const [tulos, setTulos] = useState();
  const [data, setData] = useState([]);

  const buttonPressed = () => {
    setTulos(text*1 + 1*text2);
    setData([...data, {key: (text + " + " + text2 + " = " + (text*1 + 1*text2))}]);
  }

  const buttonPressed2 = () => {
    setTulos(text - text2);
    setData([...data, {key: (text + " - " + text2 + " = " + (text - text2))}]);
  }

  return (
    <View style={styles.container}>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text>Result: {tulos}</Text>
      <StatusBar style="auto" />
      <TextInput 
        keyboardType='number-pad' style={{ borderColor: "gray", borderWidth: 1, width: 200}}
        onChangeText={text => setText(text)}
        value={text}
      />
      <TextInput 
        keyboardType='number-pad' style={{ borderColor: "gray", borderWidth: 1, width: 200}}
        onChangeText={text2 => setText2(text2)}
        value={text2}
      />
      <View style={{flex: 0.2, flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
        <Button onPress={buttonPressed} title=" + " />
        <Text>    </Text>
        <Button onPress={buttonPressed2} title=" - " />
        <Text>    </Text>
        <Button onPress={() => navigation.navigate('History', {data: data})} title="History" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: "center",
  },
});