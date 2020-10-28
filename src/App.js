import React, { useRef, useCallback, useState } from "react";
import "./App.css";
const range = 4;

function App() {
  const style = {};
  const [index, setIndex] = useState(0);
  const downX = useRef(null);
  const handleMouseUp = useCallback(({ clientX }) => {
    if (downX.current) {
      const dif = clientX - downX.current;
      let direction = dif > 0 ? "right" : "left";
      if (dif === 0) {
        direction = "idel";
      }
      switch (direction) {
        case "right":
          console.log("right");

          setIndex((s) => {
            if (s === 0) {
              return range;
            } else {
              return s - 1;
            }
          });
          break;
        case "left":
          console.log("left");

          setIndex((s) => {
            if (s === range) {
              return 0;
            } else {
              return s + 1;
            }
          });
          break;
        default:
          break;
      }
    }
  }, []);

  return (
    <div
      className="App noselect"
      style={{
        width: "500px",
        height: "500px",
        backgroundColor: "black",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        color: "white",
      }}
      onMouseDown={(e) => (downX.current = e.clientX)}
      onMouseUp={handleMouseUp}
    >
      <div>{index}</div>
      <div style={{ flex: 1 }} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignSelf: "center",
          width: "50%",
          alignItems: "center",
          height: "30px",
        }}
      >
        {[0, 1, 2, 3, 4].map((itemIndex) => (
          <Dot index={index} value={itemIndex} />
        ))}
      </div>
    </div>
  );
}

function Dot({ index, value }) {
  return <div className={index === value ? "active" : "inactive"} />;
}

export default App;
