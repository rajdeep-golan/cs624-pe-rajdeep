import { StyleSheet } from 'react-native';

export const Colors = {
  dark: 'black',
  light: 'white',
  primary: 'red',
};

export const baseStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
  button: {
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: Colors.light,
  },
});

export const lightStyles = StyleSheet.create({
  container: {
    ...baseStyles.container,
    backgroundColor: Colors.light,
  },
  text: {
    ...baseStyles.text,
    color: Colors.dark,
  },
  button: {
    ...baseStyles.button,
    backgroundColor: Colors.primary,
  },
});

export const darkStyles = StyleSheet.create({
  container: {
    ...baseStyles.container,
    backgroundColor: Colors.dark,
  },
  text: {
    ...baseStyles.text,
    color: Colors.light,
  },
  button: {
    ...baseStyles.button,
    backgroundColor: Colors.primary,
  },
});