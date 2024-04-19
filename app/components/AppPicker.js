import React, { useState } from 'react'
import { Button, FlatList, Modal, Platform, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import AppText from './AppText'
import PickerItem from './PickerItem'
import Screen from './Screen'
import defaultStyles from '../config/styles'

const AppPicker = ({ icon, items, onSelectItem, selectedItem, placeholder, width }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>    
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} style={styles.icon} /> }
          { selectedItem 
            ? <AppText style={styles.text}>{selectedItem.label}</AppText>
            : <AppText style={styles.placeholder}>{placeholder}</AppText>
          }
          <MaterialCommunityIcons name='chevron-down' size={20} color={defaultStyles.colors.medium} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType='slide'>
        <Screen>
          <Button title='Close' onPress={() => setModalVisible(false)}/>
          <FlatList
            data={items}
            keyExtractor={item => item.value}
            renderItem={({ item }) => 
              <PickerItem
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
          }
          />
        </Screen>
      </Modal>
    </>
  )
}

export default AppPicker

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 10
  },
  icon: {
    marginRight: 10
  },
  placeholder: {
    flex: 1,
    color: defaultStyles.colors.medium,
  },
  text: {
    flex: 1,
  }
})