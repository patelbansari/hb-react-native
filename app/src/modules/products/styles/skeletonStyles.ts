import { StyleSheet } from 'react-native'
import { horizontalScale, moderateScale, verticalScale } from '../../../theme'

const styles = StyleSheet.create({
  container: {
    marginHorizontal: horizontalScale(20),
    marginTop: verticalScale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    height: verticalScale(240),
    width: horizontalScale(150),
    borderRadius: moderateScale(15),
  },
})

export default styles
