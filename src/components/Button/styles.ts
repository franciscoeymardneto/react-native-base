import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../styles/colors";
const SCREEN_WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  containerReverse: {
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "center",
  },

  btn: {
    width: "100%",
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 6,
    justifyContent: "center",
    opacity: 1,
  },

  btnLight: {
    width: "100%",
    borderRadius: 6,
    justifyContent: "center",
  },

  btnDefault: {
    backgroundColor: "transparent",
  },

  btnTransparent: {
    backgroundColor: "transparent",
  },

  btnContained: {
    backgroundColor: colors.Secondary,
  },

  btnContainedDanger: {
    backgroundColor: colors.Danger,
  },

  btnContainedWhite: {
    backgroundColor: colors.White,
  },

  btnContainedGray: {
    backgroundColor: colors.Gray,
  },

  btnOutlined: {
    backgroundColor: "transparent",
    borderColor: colors.Secondary,
    borderWidth: 1,
  },

  btnOutlinedWhite: {
    backgroundColor: "transparent",
    borderColor: colors.White,
    borderWidth: 1,
  },

  btnOutlinedPrimary: {
    backgroundColor: "transparent",
    borderColor: colors.Primary,
    borderWidth: 1,
  },

  btnOutlinedGray: {
    backgroundColor: "transparent",
    borderColor: colors.GrayMedium,
    borderWidth: 1,
  },

  btnOutlinedDanger: {
    backgroundColor: "transparent",
    borderColor: colors.Danger,
    borderWidth: 1,
  },

  btnIsActive: {
    backgroundColor: "transparent",
    borderColor: colors.Secondary,
    borderWidth: 1.5,
  },

  btnBorderRadius: {
    borderRadius: 50,
  },

  btnDashed: {
    borderStyle: "dashed",
  },

  text: {
    fontFamily: "ubuntu-medium",
    fontSize: 14,
    textAlign: "center",
  },

  left: {
    marginLeft: SCREEN_WIDTH / (6 * 7),
  },

  right: {
    marginRight: SCREEN_WIDTH / (6 * 8),
  },

  default: {
    color: colors.White,
  },

  primary: {
    color: colors.Secondary,
  },

  gray: {
    color: colors.Gray,
  },

  danger: {
    color: colors.Danger,
  },

  disable: {
    color: colors.Gray + "90",
  },

  price: {
    color: colors.White,
    fontFamily: "ubuntu-bold",
    fontSize: 16,
    marginLeft: SCREEN_WIDTH / 16,
  },
});

export default styles;
