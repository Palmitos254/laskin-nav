import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function History({ route }) {
    
    const { data } = route.params;

    return (
        <View style={styles.container}>
            <Text>History</Text>
            <FlatList
                data={data}
                renderItem={({item}) => <Text>{item.key}</Text>}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
});