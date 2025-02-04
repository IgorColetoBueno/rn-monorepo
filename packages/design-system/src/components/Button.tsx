import React from "react";
import { TouchableOpacity, Text, StyleSheet, TextStyle } from "react-native";
import { colors, typography, spacing, type Colors } from "../tokens";

type ButtonProps = {
  label: string;
  onPress: () => void;
  backgroundColor?: keyof Colors;
  color?: keyof Colors;
  borderRadius?: keyof typeof spacing;
  fontWeight?: TextStyle["fontWeight"];
};

export const Button = ({
  label,
  onPress,
  backgroundColor = "primary-500",
  color = "neutral-50",
  borderRadius = "sm",
  fontWeight = "normal",
}: ButtonProps) => {
  const styles = StyleSheet.create({
    button: {
      backgroundColor: colors[backgroundColor],
      padding: spacing.md,
      borderRadius: spacing[borderRadius],
    },
    text: {
      color: colors[color],
      fontSize: typography.sizes.md,
      fontFamily: typography.fonts.primary,
      fontWeight,
      textAlign: "center",
    },
  });

  return (
    <TouchableOpacity style={styles.button} onPress={onPress} testID="button">
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};
