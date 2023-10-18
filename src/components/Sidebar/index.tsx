import * as Styled from "./Sidebar.styled";

import SidebarItem from "../SidebarItem";
import { sidebarLinks, sidebarItemInfo } from "./Sidebar.utils";
import UserTile from "../UserTile";
import WorkspaceSection from "../WorkspaceSection";
import EditableTextInput from "../../components/Input";

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
