const Title = ({ txt, size, color, transform }) => {
  return <h2 style={{ fontSize: size, color: color, textTransform: transform }}>{txt}</h2>;
};

export default Title;
