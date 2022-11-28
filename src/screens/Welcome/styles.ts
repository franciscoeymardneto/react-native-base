import { StyleSheet } from "react-native";
import { SCREEN_WIDTH } from "../../../utils/constants";
import { colors } from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    flex: 1,
  },

  welcome: {
    fontFamily: "ubuntu-medium",
    color: colors.Primary,
    fontSize: 24,
    marginBottom: SCREEN_WIDTH / 36,
    textAlign: "center",
  },

  subTitle: {
    fontFamily: "ubuntu-light",
    color: colors.Primary,
    fontSize: 16,
    marginBottom: SCREEN_WIDTH / 8,
    textAlign: "center",
  }
});

export default styles;
