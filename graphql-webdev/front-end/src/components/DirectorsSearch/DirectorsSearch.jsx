import React from "react";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

import withHocs from "./DirectorsSearchHoc";

class DirectorsSearch extends React.Component {
  render() {
    const { classes, name, handleSearch, handleChange } = this.props;
    console.log("name:", name);

    return (
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          onChange={handleChange("name")}
          onKeyPress={handleSearch}
          value={name}
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
        />
      </div>
    );
  }
}

export default withHocs(DirectorsSearch);
