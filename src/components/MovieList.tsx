import React, { useState } from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';

import { IMovie, movies } from '../helpers/LocalData';
import { MovieItem } from './MovieItem';

type SortTypes = 'original' | 'name' | 'rating';

export const MovieList = () => {
  const original = movies.slice();
  const [data, setData] = useState<IMovie[]>(original);
  const [sort, setSort] = useState<SortTypes>('original');

  const handleSortName = () => {
    if (sort != 'name') {
      setData(
        data.sort((a, b) => {
          if (a.title < b.title) return -1;
          if (a.title > b.title) return 1;
          return 0;
        }),
      );
      setSort('name');
    }
  };
  const handleSortRating = () => {
    if (sort != 'rating') {
      setData(data.sort((a, b) => a.rating - b.rating));
      setSort('rating');
    }
  };
  const handleRestoreOriginalOrder = () => {
    if (sort != 'original') {
      console.log('now', data[0]);
      console.log('orig', movies[0]);

      setData(original);
      setSort('original');
    }
  };

  const renderHeader = () => {
    return (
      <View>
        <View style={{ alignItems: 'center', backgroundColor: 'white', paddingVertical: 10 }}>
          <Text>Movies list</Text>
        </View>
        <View
          style={{
            borderTopWidth: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            backgroundColor: 'lightgrey',
            paddingVertical: 4,
          }}
        >
          <Pressable onPress={handleRestoreOriginalOrder}>
            <Text style={{ color: sort === 'original' ? 'blue' : 'black' }}>Original</Text>
          </Pressable>
          <Pressable onPress={handleSortName}>
            <Text style={{ color: sort === 'name' ? 'blue' : 'black' }}>Name</Text>
          </Pressable>
          <Pressable onPress={handleSortRating}>
            <Text style={{ color: sort === 'rating' ? 'blue' : 'black' }}>Rating</Text>
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <MovieItem item={item} />}
      keyExtractor={item => `${item.id}`}
      ListHeaderComponent={renderHeader}
    />
  );
};
