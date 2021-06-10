import React, { useState } from 'react';
import { FlatList, ImageProps, Pressable, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { IMovie } from '../helpers/LocalData';

interface MovieListProps {
  data: IMovie[];
}

export const MovieList = ({ data }: ImageProps) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Pressable style={styles.card}>
        <Text style={{ fontSize: 18 }}>{item.title}</Text>
        <Text style={{ fontSize: 12, marginTop: 10 }}>Rating: {item.rating}</Text>
      </Pressable>
    );
  };

  return <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.id} />;
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginTop: 16,
    backgroundColor: 'white',
    padding: 16,
  },
});
