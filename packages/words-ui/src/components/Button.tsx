import { createUseStyles } from "react-jss";
import { FontWeight } from "../theme";

const useStyles = createUseStyles({
  button: { fontWeight: FontWeight.bold, cursor: "pointer" },
});

type ButtonProps = Readonly<{
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}>;

export const Button = ({ text, onClick }: ButtonProps) => {
  const classes = useStyles();

  return (
    <button onClick={onClick} className={classes.button}>
      {text}
    </button>
  );
};
