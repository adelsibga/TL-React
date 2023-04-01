import {useState} from 'react';
import {createUseStyles} from 'react-jss';
import {Header, Button, Colors, FontWeight} from 'words-ui';

const useStyles = createUseStyles({
  '@global': {
    '*': {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0
    },
    body: {
      backgroundColor: '#eff2f5',
      padding: {
        top: 40, // eslint-disable-next-line sort-keys
        right: 32, // eslint-disable-next-line sort-keys
        bottom: 40,
        left: 32,
      },
    }
  },
  text: {
    color: Colors.info,
    fontWeight: FontWeight.bold
  }
});

const App = () => {
  const classes = useStyles();
  const [count, setCount] = useState(0);
  const fillDictionary = () => setCount(count + 1);
  const checkKnowledge = () => setCount(count + 2);

  return (
    <>
      <Header headerText="Выберите режим "/>
      <Button onClick={fillDictionary} text="Заполнить словарь"/>
      <Button onClick={checkKnowledge} text="Проверить знания"/>
      <p className={classes.text}>You clicked {count} times</p>
    </>
  );
};

export default App;
