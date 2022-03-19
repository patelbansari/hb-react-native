import Colors from './Colors'
import Fonts from './Fonts'
import { moderateScale, verticalScale } from './Metrics'

const ApplicationStyles = {
  screen: {
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.white,
    },
  },
  error: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: verticalScale(100),
    backgroundColor: Colors.secondary,
    borderTopLeftRadius: moderateScale(30),
    borderTopRightRadius: moderateScale(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    fontFamily: Fonts.type.montserratBold,
    fontSize: moderateScale(18),
  },
}

export default ApplicationStyles
