import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { createStyles, withStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import * as React from 'react';
import { NavLink } from 'react-router-dom';

import { renderToStaticMarkup } from 'react-dom/server';
import { LocalizeContextProps, withLocalize } from 'react-localize-redux';
import globalTranslations from '../translations/global.json';

const styles = ({colors, transparentBackground}: Theme) => 
  createStyles({
    dropdownBtn: {
      color: colors.primaryText,
      textTransform: 'capitalize'
    },
    flex: {
      flexGrow: 1,
    },
    linkBtn: {
      '&.active': {
        backgroundColor: transparentBackground.dark
      },
      '&:hover': {
        backgroundColor: transparentBackground.dark
      },
      borderRadius: '3px',
      color: colors.primaryText,
      margin: '0 3px',
      padding: '5px 10px',
      textDecoration: 'none',
    },
    root: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '10px'
    },
});

interface INavProps extends LocalizeContextProps {
  classes: any
}

interface INavState {
  languageSelection: any
}

class NavBar extends React.Component<INavProps, INavState>{
  constructor(props: INavProps) {
    super(props);
    this.state = {
      languageSelection: null,
    }
    this.props.initialize({
      languages: [
        { name: 'Tamil', code: 'tn' },
        { name: 'English', code: 'en' },
        { name: 'French', code: 'fr' },
        { name: 'Thai', code: 'th' },
        { name: 'Spanish', code: 'es' }
      ],
      options: { renderToStaticMarkup },
      translation: globalTranslations
    });
  }

  public componentDidUpdate(prevProps: INavProps) {
    const prevLangCode = prevProps.activeLanguage && prevProps.activeLanguage.code;
    const curLangCode = this.props.activeLanguage && this.props.activeLanguage.code;
    const hasLanguageChanged = prevLangCode !== curLangCode;
    // tslint:disable-next-line:no-console
    console.log('test', hasLanguageChanged, this.props);
  }
  
  public handleClick = (event: any) => {
    this.setState({ languageSelection: event.currentTarget });
  };

  public handleClose = (code: string) => {
    this.props.setActiveLanguage(code);
    this.setState({ languageSelection: null });
  };

  public render() {
    const { activeLanguage, classes, languages } = this.props;
    const { languageSelection } = this.state;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              App Name
            </Typography>
            <NavLink
              exact={true}
              to="/"
              activeClassName="active"
              className={classes.linkBtn}>
              Home
            </NavLink>
            <NavLink
              exact={true}
              to="/hello"
              activeClassName="active"
              className={classes.linkBtn}>
              Hello
            </NavLink>
            <NavLink
              exact={true}
              to="/counter"
              activeClassName="active"
              className={classes.linkBtn}>
              Counter
            </NavLink>
            <div>
              <Button
                className={classes.dropdownBtn}
                aria-owns={languageSelection ? 'simple-menu' : undefined}
                aria-haspopup="true"
                onClick={this.handleClick}
              >
                {activeLanguage? activeLanguage.name : ''}
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={languageSelection}
                open={Boolean(languageSelection)}
                onClose={this.handleClose.bind}
              >
              {languages.map((lang, index) => (
                <MenuItem key={index} onClick={this.handleClose.bind(this, lang.code)}>{lang.name}</MenuItem>
              ))}
              </Menu>
            </div>
            <IconButton
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles)(withLocalize(NavBar));
 