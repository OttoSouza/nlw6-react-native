declare module "*.svg" {
  import React from "react";
  import { SvgProps } from "react-native-gesture-handler";
  const content: React.FC<SvgProps>;
  export default content;
}
