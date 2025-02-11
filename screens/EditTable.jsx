import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import Header from '../components/Header';
import { globalStyles } from '@/styles/global';
import HebrewDate  from '@/components/HebrewDate';
import MainArea from "../components/MainArea";

export default function EditTable({ navigation }) {
  const sunrise="6:00";
  const sunset="18:00";
  const country="ישראל";
  return (
      <View style={globalStyles.screenContainer}>
        <Header nav={navigation} settingsIcon='Settings' backIcon='Back' whereToBack='Home'/>
        <View style={globalStyles.bodyContainer}>
            <View style={styles.texts}>
              <Text style={styles.text_element}>ארץ {country}</Text>
              <HebrewDate textStyle={styles.text_element} />
              <Text style={styles.text_element}>זריחה: {sunrise}</Text>
              <Text style={styles.text_element}>שקיעה:{sunset}</Text>
            </View>
            <MainArea/>  
        </View>

      </View>
  );
}

const styles = StyleSheet.create({
  texts:{
    marginTop:'4%',
  },
  text_element: {
    color:'#231dd3',
    alignSelf:'flex-end',
    marginRight:'2%',
    fontWeight:'bold'
  },
});
