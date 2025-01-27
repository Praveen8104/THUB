import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from './Components/header';
import Main from './Components/main';
import Footer from './Components/footer';

export default function App() {
  return (
    <SafeAreaView>
      <View style={{ height: '100%' }}>
        <Header />
        <Main />
        <Footer />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});
