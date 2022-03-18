import { StyleSheet } from 'react-native'
import { Colors } from '../../theme'

export default StyleSheet.create({
  headerStyle: {
    backgroundColor: Colors.whiteHeader,
    elevation: 0,
  },
  headerText: {
    // fontFamily: Fonts.type.GTWalsheimProMedium,
    // fontSize: moderateScale(17),
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: Colors.blackHeaderText,
  },
})
