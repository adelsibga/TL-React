import {createUseStyles} from 'react-jss';
import {FontWeight} from '../theme';
// eslint-disable-next-line import/default
import type React from 'react';

const useStyles = createUseStyles({
  //TODO: разобраться с props для кнопки -> различные события при onClick и различные стили из вне компонента
  button: () => ({
    backgroundColor: '#1565C0',
    border: 'none',
    borderRadius: 4,
    color: '#FFFFFF',
    cursor: 'pointer',
    fontFamily: 'Open Sans',
    fontSize: 14,
    fontWeight: FontWeight.bold,
    letterSpacing: 0.5,
    lineHeight: 1.14,
    marginRight: 16,
    padding: {
      top: 10, // eslint-disable-next-line sort-keys
      right: 9, // eslint-disable-next-line sort-keys
      bottom: 10,
      left: 9,
    },
    textTransform: 'uppercase',
  }),
});

type ButtonProps = Readonly<{
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  text: string;

}>;

export const Button = ({text, onClick}: ButtonProps) => {
  const classes = useStyles()

  return (
    <button className={classes.button} onClick={onClick} type="button">
      {text}
    </button>
  );
};
