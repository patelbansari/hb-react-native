import { StyleSheet } from 'react-native'
import {
  Colors,
  Fonts,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../theme'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingVertical: verticalScale(15),
  },
  title: {
    marginTop: verticalScale(10),
    fontFamily: Fonts.type.montserratBold,
    fontSize: moderateScale(20),
    marginStart: horizontalScale(15),
  },
  flatList: {
    flex: 1,
    marginTop: verticalScale(15),
    paddingHorizontal: moderateScale(5),
  },
  itemView: {
    backgroundColor: Colors.white,
    width: '45%',
    marginVertical: verticalScale(10),
    borderRadius: moderateScale(15),
    paddingBottom: verticalScale(20),
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.22,
    shadowRadius: 4.65,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: moderateScale(10),
  },
  touchableItem: {
    width: '105%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: moderateScale(5),
  },
  itemImage: {
    width: horizontalScale(100),
    height: horizontalScale(100),
    marginTop: verticalScale(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemTitle: {
    marginTop: verticalScale(15),
    fontFamily: Fonts.type.montserratSemiBold,
    fontSize: moderateScale(16),
    color: Colors.primary,
    alignSelf: 'center',
    textAlign: 'center',
    marginHorizontal: horizontalScale(5)
  },
  itemPrice: {
    marginTop: verticalScale(8),
    fontFamily: Fonts.type.montserratSemiBold,
    fontSize: moderateScale(14),
    color: Colors.primary,
    marginBottom: moderateScale(5),
  },
  rating: { marginTop: verticalScale(10) },
})

export default styles
