import React from 'react';
import {Alert} from "react-native";
import Loading from "./component/Loading";
import Weather from "./component/Weather";
import * as Location from 'expo-location';
import axios from 'axios';

const API_KEY="b14f5702b53077df3d367fc85bbbd6f8";

export default class extends React.Component{
  state ={
    isLoading : true
  }
  getWeather = async(latitude,longitude) =>{
    const {
      data:{
        main:{temp},weather
      }
    } =await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=imperial`);

    this.setState({
      isLoading:false,
      temp,
      condition:weather[0].main
    });
  }
  getLocation = async() =>{
    try{
      await Location.requestPermissionsAsync();
      const {coords:{latitude,longitude}} =await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    }catch(e){
      Alert.alert("위치정보를 찾을 수 없습니다.");
    }
  }
  componentDidMount() {
    this.getLocation();
  }

  render(){
    const {isLoading}=this.state;
    return isLoading? <Loading/> : <Weather temp={Math.round(this.state.temp)} condition={this.state.condition}/>;
  }
}


