import { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Button, Colors, Header } from 'words-ui';
import { pagesList } from './types/Pages';

const useStyles = createUseStyles({
  '@global': {
    '*': {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
    },
    body: {
      backgroundColor: Colors.globalBackground,
      padding: {
        top: 40, // eslint-disable-next-line sort-keys
        right: 32, // eslint-disable-next-line sort-keys
        bottom: 40,
        left: 32,
      },
    },
  },
  checkKnowledgeBtn: {
    backgroundColor: Colors.white,
    borderColor: Colors.border,
    borderRadius: 4,
    borderStyle: 'solid',
    borderWidth: 1,
    color: Colors.blue,
  },
  fillDictionaryBtn: {
    backgroundColor: Colors.blue,
    color: Colors.white,
  }
});

const App = () => {
  const classes = useStyles();
  const [count, setCount] = useState(0);
  const fillDictionary = () => setCount(count + 1);
  const checkKnowledge = () => setCount(count + 2);

  //TODO: заменять содержимое headerText в зависимости от содержания страницы
  // Должно управляться state management-ом
  return (
    <>
      <Header headerText="Выберите режим"/>
      <Button className={classes.fillDictionaryBtn} onClick={fillDictionary} text="Заполнить словарь"/>
      <Button className={classes.checkKnowledgeBtn} onClick={checkKnowledge} text="Проверить знания"/>
      <p>You clicked {count} times</p>
    </>
  );
};

export default App;
