import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import Icon from "react-native-vector-icons/Feather";

//styles
import { colors } from "../../styles/colors";
import styles from "./styles";

const Button = ({ ...props }) => {
  const {
    light = false, //true os false
    mode, //contained, default, outlined
    bashed, //true of false
    icon, // name icon
    direction, // row or row-reverse
    title, // text button
    color, // default, primary, danger
    border, // true or false
    isLoading,
    price,
    style, // true or false
    disable,
    onPress,
    disabled,
    ...rest // others props
  } = props;

  return (
    <View style={style}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          styles.btn,
          light ? { height: 38 } : { height: 56 },
          border ? styles.btnBorderRadius : null,
          bashed ? styles.btnDashed : null,
          disable
            ? { backgroundColor: colors.GrayLight }
            : mode == "transparent"
            ? styles.btnTransparent
            : mode == "outlinedIsActive"
            ? styles.btnIsActive
            : mode == "contained"
            ? styles.btnContained
            : mode == "contained-danger"
            ? styles.btnContainedDanger
            : mode == "contained-white"
            ? styles.btnContainedWhite
            : mode == "default"
            ? styles.btnDefault
            : mode == "outlined"
            ? styles.btnOutlined
            : mode == "outlined-white"
            ? styles.btnOutlinedPrimary
            : mode == "outlined-gray"
            ? styles.btnOutlinedGray
            : mode == "outlinedDanger"
            ? styles.btnOutlinedDanger
            : null,
        ]}
        onPress={onPress}
        disabled={
          disabled ? disabled : disable ? disable : isLoading ? true : false
        }
        {...rest}
      >
        <View
          style={
            direction == "row"
              ? styles.container
              : direction == "row-reverse"
              ? styles.containerReverse
              : null
          }
        >
          {isLoading ? (
            <ActivityIndicator
              animating={true}
              color={
                color === "primary"
                  ? colors.Secondary
                  : color === "danger"
                  ? colors.Danger
                  : color === "gray"
                  ? colors.Gray
                  : colors.White
              }
            />
          ) : (
            <>
              <View style={{ alignItems: "center" }}>
                <Icon
                  name={icon}
                  color={
                    color === "default"
                      ? colors.White
                      : color === "primary"
                      ? colors.Secondary
                      : color === "danger"
                      ? colors.Danger
                      : color === "gray"
                      ? colors.Gray
                      : color === "disable"
                      ? colors.GrayLight
                      : null
                  }
                  size={light ? 14 : 18}
                />
              </View>
              {title && (
                <Text
                  style={[
                    styles.text,
                    disable
                      ? { color: colors.White }
                      : color === "default"
                      ? styles.default
                      : color === "primary"
                      ? styles.primary
                      : color === "danger"
                      ? styles.danger
                      : color === "gray"
                      ? styles.gray
                      : color === "disable"
                      ? styles.disable
                      : null,
                    icon != null
                      ? direction == "row"
                        ? styles.left
                        : direction == "row-reverse"
                        ? styles.right
                        : null
                      : null,
                  ]}
                >
                  {title}
                </Text>
              )}
              {price && <Text style={styles.price}>{price}</Text>}
            </>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
