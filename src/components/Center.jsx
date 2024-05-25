import "../styles/Center.css";

const Center = (props) => {
  return (
    <div className={`center-div ${props.className}`}>
      <div className="div-centered">{props.children}</div>
    </div>
  );
};

export default Center;
