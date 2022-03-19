import { Dimensions, StyleSheet } from 'react-native'
import { horizontalScale, verticalScale } from '../../../theme'

const { height } = Dimensions.get('screen')
const styles = StyleSheet.create({
  imageView: {
    width: '100%',
    height: height / 2.7,
  },
  item: {
    width: horizontalScale(100),
    height: verticalScale(10),
    marginTop: 20,
    marginHorizontal: horizontalScale(20),
  },
})

export default styles
