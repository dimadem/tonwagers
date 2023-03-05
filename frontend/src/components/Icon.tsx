import React from "react";
import * as icons from "tabler-icons-react";

export type IconName = keyof typeof icons;
export type IconProps = {
  name: IconName;
} & icons.Props;

const Icon = ({ name = "Plant", ...rest }: IconProps) => {
  const IconComponent = icons[name];
  return <IconComponent {...rest} />;
};
export default Icon;
