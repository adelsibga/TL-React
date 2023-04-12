import { createUseStyles } from 'react-jss';
import { FontWeight, Colors } from '../theme';

const useStyles = createUseStyles({
  pageTitle: {
    color: Colors.title,
    fontFamily: 'Roboto Condensed',
    fontSize: 48,
    fontWeight: FontWeight.normal,
    lineHeight: 1,
    marginBottom: 30,
  },
});

type HeaderProps = Readonly<{
  headerText: string;
}>;

export const Header = ({ headerText }: HeaderProps) => {
  const classes = useStyles();

  return <h1 className={classes.pageTitle}>{headerText}</h1>;
};
