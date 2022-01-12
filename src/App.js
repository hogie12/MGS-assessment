import "semantic-ui-css/semantic.min.css";
import Routers from "./routes/routers";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getType } from "./store/action";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getType());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Routers />
    </div>
  );
}

export default App;
