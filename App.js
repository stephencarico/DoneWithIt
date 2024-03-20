import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/background.jpg')} resizeMode='cover' style={styles.image}>
        <View style={{
          flex: 1,
          justifyContent: 'top',
          alignItems: 'center',
          top: 90
        }}>
          <Image
            source={require('./assets/logo-red.png')}
            style={{ width: 80, height: 80 }}
          />
          <Text>Sell what You Don't Need</Text>
        </View>
        <View>
          <View style={{
            backgroundColor: 'lightcoral',
            height: 60,
            width: '100%'
          }} />
          <View style={{
            backgroundColor: 'cadetblue',
            height: 65,
            width: '100%'
          }} />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
})