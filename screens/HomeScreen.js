import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
} from 'react-native';

import AppHeader from '../components/AppHeader';
import db from '../config';

export default class HomeScreen extends Component {

  constructor () {
    super();
    this.state =  {
      vote_count_a: 0,
      vote_count_b: 0
    }
  }

  teamA(){

    var Vote_count_A = 0
   db.ref('/').update({
     'teamA':1
   })

   this.setState(this.state.vote_count_a = Vote_count_A+ 1)
 }

 teamB(){

  var Vote_count_B = 0
   console.log(db);
   db.ref('/').update({
     'teamB':2
   })

   this.setState(this.state.vote_count_b = Vote_count_B+ 1)
 }

  render() {
    return (
      <View>
        <AppHeader />
        <View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity>
              <Image
                style={{ width: 300, height: 220, marginLeft: 5 }}
                source={require('../assets/TeamImage.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.ratingContainer}>
            <Text style={{ textAlign: 'center',fontSize:25 }}>Vote Here</Text>
            <TouchableOpacity
              style={styles.buttons}
              onPress ={this.teamA()}
              >
              <Text style={{ fontSize:20}}>Team A</Text>
              <Text style = {{fontSize:10}}> {"Vote Count: " + Vote_count_A} </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress ={this.teamB()}>
              <Text style={{ fontSize:20}}>Team B</Text>
              <Text style = {{fontSize:10}}> {"Vote Count: " + Vote_count_B} </Text>
            </TouchableOpacity>

          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
  buttons: {
    backgroundColor:"coral",
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 15,
    margin:10,
    width: 150,
    height: 50,
  },
  ratingContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
});
