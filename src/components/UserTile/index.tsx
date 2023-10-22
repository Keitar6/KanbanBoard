import * as Styled from "./UserTile.styled";

import Icon from "../Icon";
import { NavLink } from "react-router-dom";
import routes from "../../routing/routes";
import { useAppSelector } from "../../store/hooks";
import { selectUserProfileInfo } from "../../store/reducers/user_slice";
import Typography from "../Typography";

const UserTile = () => {
  const { image, fullName } = useAppSelector(selectUserProfileInfo);

  return (
    <Styled.User>
      <Styled.UserProfile>
        <Styled.ImageContainer>
          <img alt="Users Profile" src={image} />
        </Styled.ImageContainer>
        <Typography variant="subtitle_2">{fullName}</Typography>
      </Styled.UserProfile>

      <NavLink to={routes.settings}>
        {({ isActive }) => (
          <Icon
            color={"sidebar_grayedOut"}
            name={"gear"}
            size={24}
            isActive={isActive}
            activeColor="sidebar_selected"
          />
        )}
      </NavLink>
    </Styled.User>
  );
};

export default UserTile;
