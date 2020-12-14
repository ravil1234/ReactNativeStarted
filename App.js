import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet, Text, View,Button } from 'react-native';

class App extends React.Component 
{
  state = {
    text:"loading....."
  }
  componentDidMount()
  {
    fetch("https://jsonplaceholder.typicode.com/users") 
    .then(data=>data.json())
    .then(data2=>
      {
        console.log(data2)
        this.setState({
          text:data2[0].name
        })
      })

  }
  handlestate()
  {
    this.setState({
      name:"suresh"
    })
    console.log("updated_",this.state)
  }
  render()
  {
    // const arr=['Ravil','Shaikh','Jamia'];
    // const val=arr.map(data =>
    //   {
    //   return <Text>{data}</Text>
    //   })
    
  return (
    <View style={styles.container}>
    <Text>{this.state.text}</Text>
      <StatusBar style="auto" />
    </View>
  );
  }
}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
