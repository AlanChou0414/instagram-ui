import { ReactNode } from "react";
import { TouchableOpacity } from "react-native";

export const TouchableBtn = ({ child }: {
  child: ReactNode;
}) => {
  return (
    <TouchableOpacity>
      {child}
    </TouchableOpacity>
  )
}