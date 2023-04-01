import {createUseStyles} from 'react-jss';
import {FontWeight} from '../theme';
// eslint-disable-next-line import/default
import type React from 'react';

const useStyles = createUseStyles({
  button: {cursor: 'pointer', fontWeight: FontWeight.bold},
});

type ButtonProps = Readonly<{
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
}>;

export const Button = ({text, onClick}: ButtonProps) => {
  const classes = useStyles();

  return (
    <button className={classes.button} onClick={onClick} type="button">
      {text}
    </button>
  );
};
