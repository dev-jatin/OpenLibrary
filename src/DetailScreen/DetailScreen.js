import React from 'react';
import {View, FlatList, Text} from 'react-native';
import styles from './styles';


const DetailsScreen = ({route}) => {

  const { docs } = route.params;

  return (
   <View style={{flex: 1, backgroundColor:'#f4f6f9'}}>
    <FlatList 
      data={docs}  
      renderItem={({item}) => {
        console.log("item", item.name)
       
          return (
            <View style={styles.card}>
              <Text style={styles.label} >Author Name</Text>
              <Text style={styles.field} >{item.name}</Text>
              <View style={styles.space} />
              <Text  style={styles.label}>Book Name</Text>
              <Text style={styles.field}>{item.top_work} </Text>
              <Text>{}</Text>
            </View>
          )
        
      }}
    /> 
    </View>
  );
}

export default DetailsScreen;