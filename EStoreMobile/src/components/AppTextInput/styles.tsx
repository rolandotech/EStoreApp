import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#656565',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    overflow: 'hidden',
    paddingHorizontal: 5
  },
  icons: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF4747',
    height: 50,
  },
  label: {
    color: '#000000',
    fontFamily: 'Inter',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
    marginBottom: 5
  },
  textInput: {
    color: '#000000',
    paddingHorizontal: 8,
    fontFamily: 'Inter',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
    letterSpacing: 1,
    flex: 6
  },
});

export default styles;
