import { Dimensions, StyleSheet } from 'react-native'
import { StaticData } from '../../../constant'
import {
  Colors,
  Fonts,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../theme'

const { width, height } = Dimensions.get('window')
const styles =  StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingVertical: verticalScale(15),
  },
  productsImage: {
    width: width,
    height: height / 2.7,
    resizeMode: 'contain',
  },
  productTitle: {
    fontFamily: Fonts.type.montserratBold,
    fontSize: moderateScale(18),
    color: Colors.primary,
    maxWidth: width / 1.5,
  },
  ratingView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingImage: { width: horizontalScale(15), height: horizontalScale(15) },
  ratingText: {
    fontFamily: Fonts.type.montserratSemiBold,
    fontSize: moderateScale(10),
    color: Colors.lightGrey,
    marginStart: horizontalScale(5),
  },
  inStockView: (stockStatus: string) => ({
    backgroundColor:
      stockStatus === StaticData.IN_STOCK
        ? Colors.secondary
        : Colors.lightGrey,
    width:
      stockStatus === StaticData.IN_STOCK
        ? horizontalScale(75)
        : horizontalScale(110),
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(5),
    borderRadius: moderateScale(20),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: moderateScale(-10),
    left: moderateScale(30),
  }),
  inStockText: {
    color: Colors.primary,
    fontFamily: Fonts.type.montserratSemiBold,
    fontSize: moderateScale(12),
    textTransform: 'capitalize',
  },
  priceView: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: verticalScale(90),
    backgroundColor: Colors.white,
    borderTopLeftRadius: moderateScale(30),
    borderTopRightRadius: moderateScale(30),
    paddingHorizontal: horizontalScale(30),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  priceText: {
    fontFamily: Fonts.type.montserratBold,
    fontSize: moderateScale(22),
    color: 'black',
  },
  containerView: {
    backgroundColor: Colors.veryLightGrey,
    borderTopLeftRadius: moderateScale(40),
    borderTopRightRadius: moderateScale(40),
    marginTop: verticalScale(20),
    padding: moderateScale(20),
    flex: 1,
  },
  titleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: verticalScale(15),
  },
  scrollView: { flex: 1, marginBottom: verticalScale(70) },
  contentContainerStyle: { flexGrow: 1 },
  flatList: { maxHeight: height / 2.7 },
  promotionsView: {
    flexDirection: 'row',
    backgroundColor: Colors.primary,
    borderRadius: moderateScale(10),
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  promotionIcon: {
    width: horizontalScale(24),
    height: moderateScale(24),
    tintColor: Colors.white,
  },
  promotionText: {
    marginStart: horizontalScale(10),
    color: Colors.white,
    fontFamily: Fonts.type.montserratSemiBold,
    fontSize: moderateScale(15),
  },
})

export default styles
