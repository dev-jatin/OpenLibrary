import React from 'react'
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    paddingTop: 64,
  },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    fontStyle:'italic',
    paddingBottom: 32,
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
    paddingBottom: 8,
  },
  input: {
    padding: 4,
  },
  button: {
    marginTop: 20,
    borderRadius: 20,
    backgroundColor: 'blue',
  },
  loader: {
    marginTop: 20, 
    padding: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight:'bold',
    textAlign: 'center',
    padding: 8,
  },
  space: {height: 20},
  field: {
    fontSize: 14,
    color: 'black',
  },
  card: {
    padding: 24,
    paddingVertical: 32,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset:{
    width: 0,
    height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    backgroundColor: 'white',
  },
  error: {
    color: 'red',
    textAlign: 'center',
  },
});

export default styles;
