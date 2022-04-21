import * as Icons from "react-icons/bs";

const GetIcon = ({ icon, size, color }) => {
  const Icon = Icons[icon];

  return <Icon size={size} color={color} />;
};

export default GetIcon;
