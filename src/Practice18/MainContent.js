import React from "react";
import boxes from "./boxes";

function Box(props) {
  const styles = {
    backgroundColor: props.on ? "#222222" : "transparent",
  };

  return (
    <button style={styles} className="box" onClick={props.toggle}></button>
  );
}

export default function MainContent() {
  const [squares, setSquares] = React.useState(boxes);

  function toggle(id) {
    setSquares((prevState) => {
      return prevState.map((item) => {
        return item.id === id ? { ...item, on: !item.on } : item;
      });
    });
  }

  const squareElements = squares.map((item) => {
    return <Box key={item.id} on={item.on} toggle={() => toggle(item.id)} />;
  });
  return <main className="box-block">{squareElements}</main>;
}
