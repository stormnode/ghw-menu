import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GhCard from "./GhCard";
import grey from "@material-ui/core/colors/grey";

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
    backgroundColor: grey[50]
  },
  subheader: {
    width: "100%"
  }
});

function GhCardViewVertical(props) {
  const { classes, tileData } = props;

  return (
    <div>
      <div className={classes.root}>
        <GridList cellHeight={250} className={classes.gridList} cols={3}>
          {tileData.map(tile => (
            <GridListTile key={tile.avatar} cols={tile.cols || 1}>
              <GhCard tile={tile} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
}

GhCardViewVertical.propTypes = {
  tileData: PropTypes.array.isRequired
};

export default withStyles(styles)(GhCardViewVertical);
