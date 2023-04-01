import {useState} from 'react';
import {createUseStyles} from 'react-jss';
import {Button, Colors, FontWeight} from 'words-ui';

const useStyles = createUseStyles({
  text: {color: Colors.info, fontWeight: FontWeight.bold},
});

const App = () => {
  const classes = useStyles();
  const [count, setCount] = useState(0);
  const onClick = () => setCount(count + 1);

  return (
    <>
      <p className={classes.text}>You clicked {count} times</p>
      <Button onClick={onClick} text="Click on me"/>
    </>
  );
};

export default App;
