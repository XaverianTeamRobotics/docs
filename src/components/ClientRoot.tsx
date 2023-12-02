import React, { FC, Fragment, ReactElement, useEffect, useState } from "react";
import { NavbarBreadcrumbHeightContext } from "@site/src/utils/NavbarBreadcrumbHeightContext";
import { DocumentHeightContext } from "@site/src/utils/DocumentHeightContext";
import { sidebarEventManager } from "@site/src/utils/sidebarEventManager";

export const ClientRoot: FC<unknown> = ({ children }): ReactElement => {

  const breadcrumbHeightState = useState(0);

  const docHeightState = useState(0);

  // height mgmt using javascript. normally i would be against this for perf reasons but this will have an incredibly minimal effect on perf
  const observer = new ResizeObserver(entries => {
    window.requestAnimationFrame(() => {
      let height = 0;
      for(const entry of entries) {
        if(height < entry.target.clientHeight) {
          height = entry.target.clientHeight;
        }
      }
      breadcrumbHeightState[1](height);
    });
  });

  // i am VERY against using resize observer here, but webkit leaves me no other choice.
  // (i need to apply styles based on whether a scrollbar is visible on an element with an explicit height & width, and webkit has no scrollbar visibility detection in css nor does javascript detection work because there are no scrollbar visibility detection apis and therefore javascript detection can only use height & width to determine scrollbar visibility implicitly, but that is impossible due to the explicit height & width)
  const sidebarObserver = new ResizeObserver(entries => {
    window.requestAnimationFrame(() => {
      const height = entries[0].target.clientHeight;
      const overflowContainer = document.querySelector("nav[aria-label='Docs sidebar'].menu.thin-scrollbar");
      if(overflowContainer === null || overflowContainer === undefined)return;
      const overflow = height > document.querySelector("nav[aria-label='Docs sidebar'].menu.thin-scrollbar").clientHeight;
      document.dispatchEvent(new CustomEvent("sidebaroverflowed", {
        detail:
          {
            overflow
          }
      }));
    });
  });

  useEffect(() => {
    const elems = document.querySelectorAll("#doc-breadcrumbs");
    // @ts-ignore
    for(const elem of elems) {
      observer.observe(elem);
    }

    const sidebarElem = document.getElementsByClassName("theme-doc-sidebar-menu menu__list")[0];
    if(sidebarElem !== undefined) {
      sidebarObserver.observe(sidebarElem);
    }

    const sidebarEventManagerCleanup = sidebarEventManager();

    return () => {
      observer.disconnect();
      sidebarObserver.disconnect();
      document.removeEventListener("sidebaroverflowed", sidebarEventManagerCleanup);
    };

  }, );

  return (
    <>
      <DocumentHeightContext.Provider value={docHeightState}>
        <NavbarBreadcrumbHeightContext.Provider value={breadcrumbHeightState}>
          {children}
        </NavbarBreadcrumbHeightContext.Provider>
      </DocumentHeightContext.Provider>
    </>
  );
};
