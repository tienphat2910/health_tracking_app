import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const HomeDashboard = ({ navigation }) => {
  // Sample data for the list
  const sampleItems = [
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
    { id: '4', title: 'Item 4' },
    { id: '5', title: 'Item 5' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to the Home Dashboard!</Text>

      <FlatList
        data={sampleItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
      />

      <TouchableOpacity style={styles.signOutButton} onPress={() => navigation.navigate('SignInScreen')}>
        <Text style={styles.signOutButtonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
  },
  list: {
    marginBottom: 20,
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },
  itemText: {
    fontSize: 18,
    color: '#333',
  },
  signOutButton: {
    backgroundColor: '#ff4757',
    borderRadius: 26,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signOutButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default HomeDashboard;
