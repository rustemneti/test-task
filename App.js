/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { MovieList } from './src/components/MovieList';
import { movies } from './src/helpers/LocalData';

const App = () => {
  return (
    <SafeAreaView>
      <MovieList data={movies} />
    </SafeAreaView>
  );
};

export default App;
