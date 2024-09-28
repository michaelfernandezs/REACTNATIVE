import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Image source={{uri:"https://imagedelivery.net/nv-bJhgmsJrHH2_eM9JJ0w/54389/public"}} 
      style={{
        width:100,
        height:200,    
        }}/>
      <Text>Open  onadask your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
