import { useState } from "react";
import List from "../components/List";
import Button from "../components/UI/Button";
import data from "../api/data";
function Birthdays() {
  const [arr, setArr] = useState(data);
  const clearHandler = () => {
    setArr([]);
  };
  return (
    <>
      <List data={arr}></List>
      {arr.length > 0 && <Button onClick={clearHandler}>Clear All</Button>}
    </>
  );
}
export default Birthdays;
