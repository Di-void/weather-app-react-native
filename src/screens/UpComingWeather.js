import React from 'react'
import { StyleSheet, FlatList, ImageBackground } from 'react-native'
import ListItem from '../components/ListItem'

const UpComingWeather = ({ weatherData }) => {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  )
  const { img } = styles
  return (
    // <SafeAreaView style={container}>
    <ImageBackground
      source={require('../../assets/cloud-background.jpg')}
      style={img}
    >
      <FlatList
        data={weatherData}
        renderItem={renderItem}
        keyExtractor={(item) => item.dt_txt}
      />
    </ImageBackground>
    // </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'skyblue'
  },
  img: {
    flex: 1
  }
})
export default UpComingWeather
