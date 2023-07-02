import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import Tabs from './src/components/Tabs'
import { NavigationContainer } from '@react-navigation/native'
import { useGetWeather } from './src/hooks/useGetWeather'
import ErrorItem from './src/components/ErrorItem'

const App = () => {
  const [loading, error, weather] = useGetWeather()

  if (weather && weather.list) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    )
  }

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size={'large'} color={'blue'} />
      ) : (
        <ErrorItem />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
})

export default App
