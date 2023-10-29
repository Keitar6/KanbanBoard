import { PropsWithChildren } from "react";
import { useTheme } from "styled-components";
import { getIcon } from "./icons.utils";
import { IconItem, IconProps } from "./icon.types";
import { PaletteType } from "@styles/theme.types";

const defaultProps = {
  activeColor: undefined,
};

const Icon = ({
  name,
  size = 16,
  color = "text",
  isActive = false,
  activeColor,
}: PropsWithChildren<IconProps>) => {
  const icon: IconItem = getIcon(name);
  const { palette } = useTheme();

  const getFillColor = () =>
    isActive
      ? palette[activeColor as keyof PaletteType]
      : palette[color as keyof PaletteType];

  const fillColor = getFillColor();

  return (
    <svg
      viewBox={icon.viewBox}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={fillColor}
      data-testid={`${name}-icon`}
    >
      <mask id={`mask-${name}`} fill={icon.mask?.fill}>
        {icon.mask
          ? icon.mask.path.map((p) => (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d={p.d}
                key={`path-${p.id}`}
              />
            ))
          : null}
      </mask>
      {icon.path.map((p) => (
        <path
          key={`path-${p.id}`}
          d={p.d}
          stroke={fillColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={p.strokeWidth}
          fill={fillColor}
          mask={p.isMask ? `url(#mask-${name})` : undefined}
        />
      ))}
    </svg>
  );
};

Icon.defaultProps = defaultProps;

export default Icon;
