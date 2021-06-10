import React from 'react';
import { SafeAreaView } from 'react-native';
import { MovieList } from './src/components/MovieList';

const App = () => {
  return (
    <SafeAreaView>
      <MovieList />
    </SafeAreaView>
  );
};

export default App;
