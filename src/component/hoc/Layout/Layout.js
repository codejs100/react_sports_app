import React, { Component } from "react";
import styles from "./Layout.module.css";

class Layout extends Component {
  state = {};

  render() {
    return (
      <div>
        <span className={styles.test}>Color content goes here ...!</span>
        header
        {this.props.children}
        footer
      </div>
    );
  }
}

export default Layout;
