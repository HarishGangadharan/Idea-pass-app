
import { createStyles, Theme } from '@material-ui/core/styles';
export const styles = ({ transparentBackground, spacing }: Theme) =>
createStyles({
  gridList: {
    height: 400,
    width: 1000
  },
  gridListTitle: {
    backgroundColor: transparentBackground.dark
  },
  icon: {
    color: 'yellowgreen'
  },
  marginHorizontal: {
    marginLeft: 20,
    marginRight: 20
  }, 
  marginVerticalTen: {
    marginTop: 10
  },
  progress: {
    height: 10,
    marginLeft: 20,
    width: 10
  },
  root: {
    backgroundColor: transparentBackground.light,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden'
  }
});
