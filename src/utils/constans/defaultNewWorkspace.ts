import { Workspace } from "../../store/reducers/user_slice/user_slice.types";

const defaultNewWorkspace = (
  name: string
): Omit<Omit<Workspace, "lists">, "id"> => ({
  name,
  icon: {
    name: "defaultLogo",
    color: "text",
    backgroundColors: "logo_template",
  },
});

export default defaultNewWorkspace;
