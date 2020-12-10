import "./Footer.css"
import React from "react";
import { MarkGithubIcon } from "@primer/octicons-react";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer className="Footer"><MarkGithubIcon /> <a href="https://github.com/xsalazar">@xsalazar</a></footer>
      </div>
    );
  }
}

export default Footer;
