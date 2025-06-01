import { 
  StyleSheet, 
  View, 
  Image, 
  FlatList, 
  ActivityIndicator, 
  Text, 
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { images } from '@/constants/images';
import { icons } from '@/constants/icons';
import MovieCard from '@/components/movieCard';
import useFetch from '@/services/useFetch';
import { FetchMovies } from '@/services/api';  
import SearchBar from '@/components/SearchBar';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const { 
    data: movies, 
    loading: moviesLoading,
    error: moviesError,
    fetchData,
    reset,
  } = useFetch(() => FetchMovies({ query: searchQuery }), false);

  useEffect(() => {
  const timer = setTimeout(() => {
    if (searchQuery.trim() !== '') {
      fetchData();
    } else {
      reset();
    }
  }, 500);
  return () => clearTimeout(timer);
}, [searchQuery]);

  return (
    <View className="flex-1 relative">
      <Image 
        source={images.bg} 
        className="flex-1 absolute w-full z-0" 
        resizeMode="cover"
      />

      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
        className="px-5"
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: 'center',
          gap: 16,
          marginVertical: 16,
        }}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListHeaderComponent={
          <>
            <View className="w-full flex-row justify-center mt-20">
              <Image source={icons.logo} className="w-12 h-10" />
            </View>

            <View className="my-5 px-5">
              <SearchBar
                placeholder="Search Movies..."
                value={searchQuery}
                onChangeText={(text: string) => setSearchQuery(text)}
              />
            </View>

            {moviesLoading && (
              <ActivityIndicator size="large" color="#0000ff" className="my-3" />
            )}

            {moviesError && (
              <Text className="text-red-500 px-5 my-3">
                Error: {moviesError.message}
              </Text>
            )}

            {!moviesError && !moviesLoading && searchQuery.trim() && movies?.length > 0 && (
              <Text className="text-xl text-black font-bold px-5">
                {`Search Results for "${searchQuery.trim()}"`}
              </Text>
            )}
          </>
        }
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
