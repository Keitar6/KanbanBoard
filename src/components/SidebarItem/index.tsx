import { PropsWithChildren } from "react";
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
}: PropsWithChildren<SidebarItemProps>) => (
  <Styled.StyledItemList>
    <NavLink to={linkTo} id={`sidebar-item-${label}`}>
      {({ isActive }) => (
        <Styled.Container>
          <Styled.Content>
            <Icon
              name={iconName}
              color="sidebar_grayedOut"
              size={24}
              isActive={isActive}
              activeColor="sidebar_selected"
            />
            <Typography
              variant="subtitle_2"
              color={isActive ? "sidebar_selected" : "sidebar_grayedOut"}
            >
              {label[0].toUpperCase() + label.slice(1)}
            </Typography>
          </Styled.Content>
        </Styled.Container>
      )}
    </NavLink>
  </Styled.StyledItemList>
);

export default SidebarItem;
