/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Note from './note';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteData: [],
      noteText: '',
    };
    this.addNote = this.addNote.bind(this);
  }

  addNote() {
    if (this.state.noteText) {
      let date = new Date();
      this.state.noteData.push({
        date:
          date.getFullYear() +
          '/' +
          (date.getMonth() + 1) +
          '/' +
          date.getDate(),
        desc: this.state.noteText,
      });
      this.setState({noteData: this.state.noteData, noteText: ''});
    }
  }

  deleteMethod(key) {
    this.state.noteData.splice(key, 1);
    this.setState({noteData: this.state.noteData});
  }

  render() {
    let notes = this.state.noteData.map((data, key) => {
      return (
        <Note
          key={key}
          data={data}
          deleteMethod={() => this.deleteMethod(key)}
        />
      );
    });
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeaders}> - Note - </Text>
        </View>

        <ScrollView style={styles.scroll}>{notes}</ScrollView>

        <View style={styles.footer}>
          <TextInput
            style={styles.TextInput}
            placeholder="write note here"
            placeholderTextColor="grey"
            value={this.state.noteText}
            onChangeText={text => this.setState({noteText: text})}
          />
        </View>
        <TouchableOpacity style={styles.addButton} onPress={this.addNote}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#0271DF',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#ddd',
  },
  textHeaders: {
    color: 'white',
    fontSize: 18,
    paddingTop: 40,
    paddingBottom: 15,
  },
  scroll: {
    flex: 1,
    marginBottom: 100,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  TextInput: {
    alignSelf: 'stretch',
    color: 'white',
    padding: 30,
    backgroundColor: '#252525',
    borderTopWidth: 2,
    borderTopColor: '#ededed',
  },
  addButton: {
    position: 'absolute',
    zIndex: 11,
    right: 10,
    bottom: 90,
    backgroundColor: '#0271DF',
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: 'white',
  },
});
