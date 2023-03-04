import { useState } from "react";
import { createUseStyles } from "react-jss";
import { Button, Colors, FontWeight } from "words-ui";

const useStyles = createUseStyles({
  text: { fontWeight: FontWeight.bold, color: Colors.info },
});

const App = () => {
  const classes = useStyles();
  const [count, setCount] = useState(0);
  const onClick = () => setCount(count + 1);

  return (
    <>
      <p className={classes.text}>You clicked {count} times</p>
      <Button onClick={onClick} text="Click on me" />
    </>
  );
};

export default App;
