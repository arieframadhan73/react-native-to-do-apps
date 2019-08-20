import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

export default class Note extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View key={Math.random()} style={styles.note}>
        <Text style={styles.noteText}> {this.props.data.date} </Text>
        <Text style={styles.noteText}> {this.props.data.desc} </Text>
        <TouchableOpacity
          onPress={this.props.deleteMethod}
          style={styles.noteDel}>
          <Text style={styles.noteDelText}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  note: {
    position: 'relative',
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: '#ededed',
  },
  noteText: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: '#E91E63',
  },
  noteDel: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2980b9',
    top: 10,
    bottom: 10,
    right: 10,
  },
  noteDelText: {
    color: 'white',
  },
});
