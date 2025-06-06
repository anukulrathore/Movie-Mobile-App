import { ActivityIndicator, FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { images } from '@/constants/images'
import { icons } from '@/constants/icons'
import SearchBar from '@/components/SearchBar'
import { useRouter } from 'expo-router'
import useFetch from '@/services/useFetch'
import { FetchMovies } from '@/services/api'
import MovieCard from '@/components/movieCard'

 export default function Index() {
  const router = useRouter();

  const { 
    data: movies, 
    loading: moviesLoading,
    error: moviesError,
    } = useFetch(() => FetchMovies({
    query: ''
  }))
  let content;
  if (moviesLoading) {
    content = <ActivityIndicator />;
  } else if (moviesError) {
    content = <Text>Error : {moviesError.message}</Text>;
  } else {
    content = (
      <View className='flex-1 mt-5'>
        <SearchBar 
          onPress={() => router.push('/search')}
          placeholder='Search for a movie'
        />
        <>
          <Text className="text-lg text-white font-bold mt-5 mb-3">Latest Movies</Text>
          <FlatList
            data={movies}
            renderItem={({ item }) => (
              <MovieCard {...item} />
            )}
            keyExtractor={(item) => item.id.toString()}
            numColumns={3}
            columnWrapperStyle={{ 
              justifyContent: 'flex-start',
              gap: 20,
              paddingRight: 5,
              marginBottom: 10
            }}
            className='mt-2 pb-32'
            scrollEnabled={false} 
          />
        </>
      </View>
    );
  }

  return (
    <View className='flex-1 bg-primary'>
      <Image source={images.bg} className="absolute w-full z-0" />
      <ScrollView className="flex-1 px-5" 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: '100%', paddingBottom: 10
        }}
      >
        <Image source={icons.logo} className='w-12 h-10 my-20 mb-5 mx-auto'/>
        {content}
        <View className='flex-1 mt-5'>
          <SearchBar 
            onPress={() => router.push('/search')}
            placeholder='Search for a movie'
          />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})