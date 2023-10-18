import * as Styled from "./Sidebar.styled";

import { useTheme } from "styled-components";
import SidebarItem from "../SidebarItem/SidebarItem";
import { sidebarLinks, sidebarItemInfo } from "./Sidebar.utils";

const Sidebar = () => {
  const { palette } = useTheme();
  const { icon, label, link } = sidebarItemInfo;

  return (
    <Styled.Box palette={palette}>
      <Styled.StyledList>
        {sidebarLinks.map((item) => (
          <SidebarItem
            key={`id-sidebarItem -${item}`}
            iconName={icon[item]}
            label={label[item]}
            linkTo={link[item]}
          />
        ))}
      </Styled.StyledList>
    </Styled.Box>
  );
};

export default Sidebar;
