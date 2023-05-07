import { View,StyleSheet,Text, Alert} from 'react-native'
import React from 'react'
import { Color } from '../constants/Colors'
import TimerComponent from '../components/TimerComponent'
import TaskList from '../components/TaskList'
import Button from '../utils/Button'
import { useRoute } from '@react-navigation/native'
// import CircularProgress from 'react-native-circular-progress-indicator'

export default function Timer() {

  const route=useRoute();
  const psdData=route.params.chosen;
  data=psdData[0];


  return (
    <View style={styles.screen}>
      <TaskList id={data.id} title={data.title} priority={data.priority} interval={data.interval} startTaskTimer={()=>{}} deleteTaskHandler={()=>{}}></TaskList>
      <TimerComponent></TimerComponent>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer1}><Button style={styles.btnBgColor}>Stop</Button></View>
        <View style={styles.buttonsContainer2}><Button style={styles.btnBgColor} >Pause</Button></View>
      </View>
    </View>
  )
}
const styles=StyleSheet.create({
  screen:{
    flex:1,
    paddingTop:84,
    paddingHorizontal:10,
    backgroundColor:Color.primary800
  },
  buttonsContainer:{
    marginTop:80,
    flexDirection:'row'
  },
  buttonContainer1:{
    flex:1,
    marginHorizontal:8,
  },
  buttonsContainer2:{
    flex:1,
    marginHorizontal:8,
  },
  btnBgColor:{
    backgroundColor:Color.secondary800
  }
})