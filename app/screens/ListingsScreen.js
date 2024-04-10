import { View, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

import Card from '../components/Card';

function ListingsScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.listArea}>
        <Card
          title="Red jacket for sale!"
          subTitle="$100"
          image={require('../assets/jacket.jpg')}
        />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f4f4',
  },
  listArea: {
    padding: 20,
    paddingTop: 100
  }
})

export default ListingsScreen;