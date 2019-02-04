import "./config/ReactotronConfig";
import "./config/DevToolsConfig";

import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';

import Post from './components/Post';
import Navigation from './components/Navigation';

const bgColor = '#DC294B';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: bgColor,
    flex: 1,
    flexDirection: 'column',
  },
});

export default class App extends Component {
  state = {
    docs: [
      {
        key: 1,
        title: 'Aprendendo React Native',
        autor: 'Autor desconhecido',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis venenatis viverra. Donec pharetra mi non elit euismod porttitor. Integer ultrices a elit rutrum convallis. Nulla condimentum felis semper, rutrum tortor in.'
      },
      {
        key: 2,
        title: 'Aprendendo React Native',
        autor: 'Autor desconhecido',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis venenatis viverra. Donec pharetra mi non elit euismod porttitor. Integer ultrices a elit rutrum convallis. Nulla condimentum felis semper, rutrum tortor in.'
      },
      {
        key: 3,
        title: 'Aprendendo React Native',
        autor: 'Autor desconhecido',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis venenatis viverra. Donec pharetra mi non elit euismod porttitor. Integer ultrices a elit rutrum convallis. Nulla condimentum felis semper, rutrum tortor in.'
      },
      {
        key: 4,
        title: 'Aprendendo React Native',
        autor: 'Autor desconhecido',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis venenatis viverra. Donec pharetra mi non elit euismod porttitor. Integer ultrices a elit rutrum convallis. Nulla condimentum felis semper, rutrum tortor in.'
      },
      {
        key: 5,
        title: 'Aprendendo React Native',
        autor: 'Autor desconhecido',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis venenatis viverra. Donec pharetra mi non elit euismod porttitor. Integer ultrices a elit rutrum convallis. Nulla condimentum felis semper, rutrum tortor in.'
      },
      {
        key: 6,
        title: 'Aprendendo React Native',
        autor: 'Autor desconhecido',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis venenatis viverra. Donec pharetra mi non elit euismod porttitor. Integer ultrices a elit rutrum convallis. Nulla condimentum felis semper, rutrum tortor in.'
      },
    ],
  };

  render() {
    const { docs } = this.state;

    return (
      <View style={styles.container}>
        <Navigation />
        <ScrollView>
          {docs.map(info => <Post key={info.key} data={info} />)}
        </ScrollView>
      </View>
    );
  }
}
