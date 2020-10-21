import React, { FunctionComponent } from "react";
import injectSheet from "react-jss";

import { HeaderLink } from "./HeaderLink";

type Props = {
  classes: {
    container: string;
    displayLine: string;
    discoBall: string;
    pageLink: string;
  };
  color?: string;
  disabled?: boolean;
};

const DumbHeader: FunctionComponent<Props> = ({ classes }) => (
  <>
    <div className={classes.displayLine} />
    <div className={classes.container}>
      <HeaderLink href="/">Home</HeaderLink>
      <HeaderLink href="/bookmarks">Bookmarks</HeaderLink>
      <HeaderLink href="/flashcards">Flashcards</HeaderLink>
      <HeaderLink href="/smite/gods">Smite</HeaderLink>
      <HeaderLink href="/schedule">Schedule</HeaderLink>
      {/* <HeaderLink href="/ukulele">Ukulele</HeaderLink> */}
    </div>
  </>
);

const styles = {
  container: {
    backgroundColor: `black`,
    height: 42,
    display: `flex`,
    flexFlow: `row nowrap`,
    justifyContent: `flex-start`,
    alignItems: `center`,
  },
  displayLine: {
    backgroundColor: `#f885cf`,
    height: 4,
  },
};

export const Header = injectSheet(styles)(DumbHeader);
