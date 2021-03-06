//Import the React native
import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
//Import the native-base
import { Container, Tab, Tabs, ScrollableTab, TabHeading } from 'native-base';
//import the banner
import FixedBanner from '../Components/Admob/fixedBanner'
//  import the Screens
import NewsScreen from '../Screens/NewsScreen';
import MondialScreen from '../Screens/MondialScreen';
import SportsScreen from '../Screens/SportsScreen';
import EcoScreen from '../Screens/EcoScreen';
import TechScreen from '../Screens/TechScreen';

//  import the components
import MainHeader from '../Routes/Header';
import { TouchableHighlight } from 'react-native-gesture-handler';

// Stylesheets
const styles = StyleSheet.create({
  TabContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.35,
    elevation: 19,
    backgroundColor: '#fff',

  },
  TabHeading: {
    backgroundColor: '#fff',


  },
  TabText: {
    color: '#1d1927',
    fontFamily: 'Tajawal-Bold',
    fontSize: 15
  },
  tabBarUnder: {
    backgroundColor: '#0084ff'
  },
});

//Main view


export default function AppScreen({ navigation }) {
  const pressHandler = () => {
    navigation.navigate('AboutScreen')
  }
  return (
    <Container style={styles.TabContainer}>
      
      <Tabs renderTabBar={() => <ScrollableTab />} tabBarUnderlineStyle={styles.tabBarUnder} initialPage={0}>

        {/* Tab */}
        <Tab heading={<TabHeading style={styles.TabHeading}>
          <Text style={styles.TabText}>Tendance</Text>
        </TabHeading>}>
          <NewsScreen />
        </Tab>
        {/* Tab */}
        <Tab heading={<TabHeading style={styles.TabHeading}>
          <Text style={styles.TabText}>Mondiale</Text>
        </TabHeading>}>
          <MondialScreen />
        </Tab>

        {/* Tab */}
        <Tab heading={<TabHeading style={styles.TabHeading}>
          <Text style={styles.TabText}>Sports</Text>
        </TabHeading>}>
          <SportsScreen />
        </Tab>
        {/* Tab */}
        <Tab heading={<TabHeading style={styles.TabHeading}>
          <Text style={styles.TabText}>Économie</Text>
        </TabHeading>}>
          <EcoScreen />
        </Tab>


        {/* Tab */}
        <Tab heading={<TabHeading style={styles.TabHeading}>
          <Text style={styles.TabText}>Technologie</Text>
        </TabHeading>}>
          <TechScreen />
        </Tab>
      </Tabs>
      <FixedBanner/>
    </Container>

  );
}