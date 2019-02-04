import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const bgPostColor = '#F5FCFF';
const autorColor = '#494949';
const descriptionColor = '#101010';

const styles = StyleSheet.create({
  autor: {
    color: autorColor,
  },
  description: {
    color: descriptionColor,
  },
  div: {
    marginBottom: 8,
  },
  post: {
    backgroundColor: bgPostColor,
    margin: 10,
    marginBottom: 0,
    marginTop: 20,
    padding: 25,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

const Post = ({ data }) => (
  <View style={styles.post}>
    <View style={styles.div}>
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.autor}>{data.autor}</Text>
    </View>
    <Text style={styles.description}>{data.description}</Text>
  </View>
);

export default Post;
