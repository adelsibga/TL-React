import {createUseStyles} from 'react-jss';
// eslint-disable-next-line @typescript-eslint/no-unused-vars,import/default
import type React from 'react';
import {FontWeight} from '../theme';

const useStyles = createUseStyles({
  pageTitle: {
    //TODO: вынести в цвет в константы
    color: '#364963',
    fontFamily: 'Roboto Condensed',
    fontSize: 48,
    fontWeight: FontWeight.normal,
    lineHeight: 1,
    marginBottom: 30
  }
})

type HeaderProps = Readonly<{
  headerText: string;
}>

export const Header = ({headerText}: HeaderProps) => {
  const classes = useStyles()

  return (
    <h1 className={classes.pageTitle}>{headerText}</h1>
  )
}
