import "./Footer.css";
import React from "react";
import { Typography, Link, List, ListItem } from "@material-ui/core";
import { MentionIcon, FileCodeIcon } from "@primer/octicons-react";

const flexContainer = {
  display: "inline-flex",
  flexDirection: "row",
  padding: 0,
  whiteSpace: "nowrap",
};

class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer className="Footer">
          <div>
            <List style={flexContainer}>
              {/* Link */}
              <ListItem alignItems="center">
                <Typography variant="body2">
                  <Link
                    href="https://github.com/xsalazar"
                    color="textPrimary"
                    aria-label="Contact Me"
                  >
                    <MentionIcon size="small" verticalAlign="middle" />
                  </Link>
                </Typography>
              </ListItem>

              {/* Link */}
              <ListItem alignItems="center">
                <Typography variant="body2">
                  <Link
                    href="https://github.com/xsalazar/learn-emoji"
                    color="textPrimary"
                    aria-label="Source Code"
                  >
                    <FileCodeIcon size="small" verticalAlign="middle" />
                  </Link>
                </Typography>
              </ListItem>
            </List>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
