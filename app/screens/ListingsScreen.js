import { SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

import Card from '../components/Card';

function ListingsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.listArea}>
        <Card
          title="Red jacket for sale!"
          subTitle="$100"
          image={require('../assets/jacket.jpg')}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f4f4',
  },
  listArea: {
    padding: 15
  }
})

export default ListingsScreen;