import { PropsWithChildren } from "react";
import { CSSProperties, useTheme } from "styled-components";
import { NavLink } from "react-router-dom";
import * as Styled from "./SidebarItem.styled";
import { IconName } from "../Icon/icon.types";
import Typography from "../Typography";
import Icon from "../Icon";

export type SidebarItemProps = {
  label: string;
  iconName: IconName;
  linkTo: string;
};

const SidebarItem = ({
  label,
  iconName,
  linkTo,
}: PropsWithChildren<SidebarItemProps>) => {
  const { palette } = useTheme();
  const amount = 1;

  return (
    <Styled.StyledItemList palette={palette}>
      <NavLink to={linkTo} id={`sidebar-item-${label}`}>
        {({ isActive }) => (
          <Styled.StyledDiv
            style={
              {
                borderLeft: `4px solid ${
                  isActive ? palette.sidebar_selected : "transparent"
                }`,
              } as CSSProperties
            }
          >
            <Styled.ContentDiv>
              <Icon
                name={iconName}
                color="sidebar_grayedOut"
                size={18}
                isActive={isActive}
                activeColor="sidebar_selected"
              />
              <Typography
                variant="subtitle_2"
                color={isActive ? "sidebar_selected" : "sidebar_grayedOut"}
              >
                {label[0].toUpperCase() + label.slice(1)}
              </Typography>
            </Styled.ContentDiv>
            {label === "voting" || label === "messages" ? (
              <Styled.Badge palette={palette} style={{ color: "#fff" }}>
                {amount}
              </Styled.Badge>
            ) : null}
          </Styled.StyledDiv>
        )}
      </NavLink>
    </Styled.StyledItemList>
  );
};

export default SidebarItem;
