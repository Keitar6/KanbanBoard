import { FC, HTMLAttributes, PropsWithChildren } from "react";
import styled, { css } from "styled-components";
import { SidebarDropShadow } from "../Sidebar/Sidebar.styled";

const Button = styled.button<CustomButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 8px 12px 8px 10px;
  border-radius: 4px;
  gap: 6px;
  transition: background-color 0.3s, color 0.3s;

  ${({ theme, type }) =>
    type === "basic" &&
    css`
      border: 1px solid ${theme.palette.white_50};
      background-color: ${theme.palette.white};
      ${SidebarDropShadow}
    `}

  ${({ theme, inactive, type }) =>
    type === "primary" &&
    css`
      background-color: ${inactive
        ? theme.palette.midnight_blue_200
        : theme.palette.sidebar_selected};
      border: 1px solid
        ${inactive
          ? theme.palette.midnight_blue_300
          : theme.palette.sidebar_selected};
      color: ${inactive
        ? theme.palette.midnight_blue_700
        : theme.palette.white};
      cursor: ${inactive ? "default" : "pointer"};
      ${inactive ? null : SidebarDropShadow}
    `}
`;

export type BaseButtonProps = {
  type: "basic" | "primary";
  inactive?: boolean;
};
type CustomButtonProps = BaseButtonProps &
  Omit<HTMLAttributes<HTMLButtonElement>, "onClick"> & {
    onClick?: () => void;
  };

const CustomButton: FC<PropsWithChildren<CustomButtonProps>> = ({
  type = "basic",
  inactive = false,
  children,
  onClick,
  ...restProps
}) => {
  const onClickHandler = () => {
    if (!inactive && onClick) onClick();
  };

  return (
    <Button
      type={type}
      inactive={inactive}
      onClick={onClickHandler}
      {...restProps}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
