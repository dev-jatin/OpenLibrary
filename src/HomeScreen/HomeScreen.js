import React, {useState} from 'react';
import { Text, View , TextInput, Pressable, ActivityIndicator, ScrollView } from 'react-native';
import styles from './styles';


const HomeScreen = ({navigation}) => {
  const [fname, setFirstName] = useState('');
  const [lname, setLastName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setEroor] = useState('');

  const fetchData = async () => {
    setLoading(true);
    const url =  `https://openlibrary.org/search/authors.json?q=${fname}%20${lname}`
    const response = await fetch(url);
    const json = await response.json();
    console.log("HELLO");
    if(json.docs.length == 0) {
      console.log('No records Found');
      setEroor('No Records Found');
    } else {
      console.log("HELLO");
      console.log(json);
      navigation.navigate('Details', {
        docs: json.docs,
      })
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.space}/>
      <Text style={styles.appName}>OPEN LIBRARY </Text>
      <View style={styles.space}/>
      <ScrollView keyboardShouldPersistTaps="always" contentContainerStyle={styles.card}>
        <Text style={styles.label}>First Name</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Enter first name of author" 
          value={fname} 
          onChangeText={setFirstName}  />
        <View style={styles.space}/>
        <Text style={styles.label}>Last Name</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Enter last name of author"
          value={lname} 
          onChangeText={setLastName}  />
        <View style={styles.space}/>
        <Text style={styles.error}>{error}</Text>
        <View style={styles.space}/>
        {!loading ? <Pressable style={styles.button} onPress={() => {
          console.log("HELLO", fname, lname)
          fetchData();
        }}  >
        <Text style={styles.buttonText}> FIND </Text>
        </Pressable>: <ActivityIndicator style={styles.loader} size="small" color="#0000ff"/>
      }
      </ScrollView>
    </View>
  );
  
}

export default HomeScreen;

