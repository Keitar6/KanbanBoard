import SidebarItem from "@components/molecules/SidebarItem";
import WorkspaceSection from "@components/molecules/WorkspaceSection";
import UserTile from "@components/molecules/UserTile";
import * as Styled from "./Sidebar.styled";

import { sidebarLinks, sidebarItemInfo } from "./Sidebar.utils";

const Sidebar = () => {
  const { icon, label, link } = sidebarItemInfo;

  return (
    <Styled.Sidebar>
      <WorkspaceSection />
      <Styled.Container>
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

        <UserTile />
      </Styled.Container>
    </Styled.Sidebar>
  );
};

export default Sidebar;
