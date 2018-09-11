import {
  Button,
  CircularProgress,
  Grid,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  ListSubheader,
  withStyles
} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import * as React from "react";
import {
  Language,
  LocalizeContextProps,
  Translate,
  withLocalize
} from "react-localize-redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import compose from "recompose/compose";
import { fetchUsers } from "../../actions/user";
import { IState } from "../../reducers";
import { styles } from "./style";

interface IProps extends LocalizeContextProps {
  value: string;
  activeLanguage: Language;
  fetchUsers: () => any;
  users: any[];
  classes: any;
  loading: boolean;
}

class Home extends React.PureComponent<IProps> {
  public render() {
    const { activeLanguage, users, classes, loading } = this.props;
    return (
      <Grid container={true}>
        <Grid
          item={true}
          lg={12}
          container={true}
          direction="column"
          justify="space-around"
          alignItems="center"
        >
          <h3>Home</h3>
          <h3>
            Active Language is {activeLanguage ? activeLanguage.name : ""}{" "}
          </h3>
          <h3>
            <Translate id="greeting" data={{ name: "App Name" }} />
          </h3>
        </Grid>
        <Grid item={true} lg={12}>
          <Grid
            item={true}
            lg={12}
            container={true}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Button
              disabled={loading}
              className={classes.marginVerticalTen}
              variant="raised"
              color="primary"
              aria-label="Add"
              onClick={this.props.fetchUsers}
            >
              Fetch Users
              {loading && (
                <CircularProgress
                  size={20}
                  color="secondary"
                  className={classes.progress}
                />
              )}
            </Button>
          </Grid>
          <Grid item={true} lg={12}>
            <div className={classes.root}>
              <GridList cellHeight={150} className={classes.gridList}>
                <GridListTile
                  key="Subheader"
                  cols={2}
                  style={{ height: "auto" }}
                >
                  <ListSubheader component="div">Users</ListSubheader>
                </GridListTile>
                {users.map(user => (
                  <GridListTile key={user.id} className={classes.gridListTitle}>
                    <GridListTileBar
                      title={user.name}
                      subtitle={<span>Phone: {user.phone}</span>}
                      actionIcon={
                        <IconButton className={classes.icon}>
                          <InfoIcon />
                        </IconButton>
                      }
                    />
                  </GridListTile>
                ))}
              </GridList>
            </div>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state: IState) => ({
  loading: state.user.loading,
  users: state.user.users
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchUsers: () => dispatch(fetchUsers())
});

interface IStateProps {
  users: any[];
  loading: boolean;
}

interface IDispatchProps {
  fetchUsers: () => void;
}

export default compose(
  withStyles(styles),
  withRouter,
  connect<IStateProps, IDispatchProps>(
    mapStateToProps,
    mapDispatchToProps
  ),
  withLocalize
)(Home);
