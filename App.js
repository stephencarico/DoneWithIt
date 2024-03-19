import { Image, StyleSheet, Text, TouchableHighlight, SafeAreaView } from 'react-native';

export default function App() {
  const handleTouch = () => { console.log('Image touched!') };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello React Native!</Text>
      <TouchableHighlight onPress={handleTouch}>
        <Image
          source={{
            width: 200,
            height: 200,
            uri: 'https://picsum.photos/200'
          }}
        />
      </TouchableHighlight>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
