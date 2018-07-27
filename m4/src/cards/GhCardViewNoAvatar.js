import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GhCardNoImage from "./GhCardNoImage";
import lightGreen from "@material-ui/core/colors/lightGreen";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    height: 250,
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 600,
    backgroundColor: lightGreen[100]
  },
  gridListSingleLine: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
    backgroundColor: lightGreen[100]
  },
  subheader: {
    width: "100%"
  }
});

function GhCardViewNoAvatar(props) {
  const { classes, tileData } = props;

  return (
    <div>
      <div className={classes.root}>
        <GridList cellHeight={250} className={classes.gridList} cols={3}>
          {tileData.map(tile => (
            <GridListTile key={tile.avatar} cols={tile.cols || 1}>
              <GhCardNoImage tile={tile} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
}

GhCardViewNoAvatar.propTypes = {
  tileData: PropTypes.array.isRequired
};

export default withStyles(styles)(GhCardViewNoAvatar);
