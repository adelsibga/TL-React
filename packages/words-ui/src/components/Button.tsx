import { createUseStyles } from "react-jss";
import { FontWeight } from "../theme";
// eslint-disable-next-line import/default
import { MouseEvent } from "react";

const useStyles = createUseStyles({
  //TODO: разобраться с props для кнопки -> различные события при onClick и различные стили из вне компонента
  button: () => ({
    backgroundColor: "#1565C0",
    border: "none",
    borderRadius: 4,
    color: "#FFFFFF",
    cursor: "pointer",
    fontFamily: "Open Sans",
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
    textTransform: "uppercase",
  }),
});

type ButtonProps = Readonly<{
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  text: string;
  className: string;
}>;

export const Button = ({ text, onClick, className }: ButtonProps) => {
  const classes = useStyles();

  return (
    /* для конкатинации css классов лучше использовать https://www.npmjs.com/package/clsx */
    <button className={`${classes.button} ${className}`} onClick={onClick} type="button">
      {text}
    </button>
  );
};
