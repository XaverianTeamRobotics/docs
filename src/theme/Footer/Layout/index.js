import React from "react";
import clsx from "clsx";
export default function FooterLayout({ style, links, logo, copyright }) {
  return (
    <footer
      className={clsx("footer", {
        "footer--dark": style === "dark",
      })}>
      <div className="container container-fluid p-fx">
        {links}
        {(logo || copyright) && (
          <div className="footer__bottom">
            {logo && <div className="margin-bottom--sm">{logo}</div>}
            {copyright}
          </div>
        )}
      </div>
    </footer>
  );
}
