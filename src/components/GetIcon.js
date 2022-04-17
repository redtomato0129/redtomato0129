import * as Icons from "react-icons/bs";

const GetIcon = ({ icon, size, color }) => {
  const _icon = Icons[icon];

  return <_icon size={size} color={color} />;
};

export default GetIcon;
