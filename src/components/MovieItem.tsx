// @ts-ignore
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { IMovie } from '../helpers/LocalData';

interface MovieItemProps {
  item: IMovie;
}

export const MovieItem = ({ item }: MovieItemProps) => {
  const [isPressed, setPressed] = useState<boolean>(false);

  const handlePress = () => {
    setPressed(!isPressed);
  };

  return (
    <Pressable style={styles.card} onPress={handlePress}>
      <Text style={{ fontSize: 18 }}>{item.title}</Text>
      <Text style={{ fontSize: 12, marginTop: 10 }}>Rating: {item.rating}</Text>
      {isPressed && (
        <View>
          <Text style={{ fontSize: 12, marginTop: 10 }}>Genre: {item.genre}</Text>
          <Text style={{ fontSize: 12, marginTop: 10 }}>Year: {item.year}</Text>
          <Text style={{ fontSize: 12, marginTop: 10 }}>Maker: {item.maker}</Text>
        </View>
      )}
    </Pressable>
  );
};
const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginTop: 16,
    backgroundColor: 'white',
    padding: 16,
  },
});
