import React, { Fragment } from "react";
import { ErrorCauseBoundary, useThemeConfig } from "@docusaurus/theme-common";
import { splitNavbarItems, useNavbarMobileSidebar, } from "@docusaurus/theme-common/internal";
import NavbarItem from "@theme/NavbarItem";
import NavbarColorModeToggle from "@theme/Navbar/ColorModeToggle";
import SearchBar from "@theme/SearchBar";
import NavbarMobileSidebarToggle from "@theme/Navbar/MobileSidebar/Toggle";
import NavbarSearch from "@theme/Navbar/Search";
import styles from "./styles.module.css";
import NavbarLogo from "@site/src/theme/Navbar/Logo";
import DocBreadcrumbsWrapper from "@site/src/theme/DocBreadcrumbs";

function useNavbarItems() {
  // TODO temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items;
}
function NavbarItems({ items }) {
  return (
    <>
      {items.map((item, i) => (
        <ErrorCauseBoundary
          key={i}
          onError={(error) =>
            new Error(
              `A theme navbar item failed to render.
Please double-check the following navbar item (themeConfig.navbar.items) of your Docusaurus config:
${ JSON.stringify(item, null, 2) }`,
              { cause: error },
            )
          }>
          <NavbarItem {...item} />
        </ErrorCauseBoundary>
      ))}
    </>
  );
}
function NavbarContentLayout({ left, right }) {
  return (
    <div className="navbar__inner">
      <div id="doc-breadcrumbs" className="navbar__items nav-left">{left}</div>
      <div className="navbar__items navbar__items--right h-nav">{right}</div>
    </div>
  );
}
export default function NavbarContent({ disabled }) {
  const mobileSidebar = useNavbarMobileSidebar();
  const items = useNavbarItems();
  const [ leftItems, rightItems ] = splitNavbarItems(items);
  const searchBarItem = items.find((item) => item.type === "search");
  return (
    <Fragment>
      <NavbarContentLayout
        left={
          // TODO stop hardcoding items?
          <>
            {!mobileSidebar.disabled && <Fragment>
              <NavbarMobileSidebarToggle />
            </Fragment>
            }
            <div className={"w-full sm:flex"}>
              <div className={"d-n"}>
                <NavbarLogo />
              </div>
            </div>
            <div className={"md-disp flex flex-col place-center"}>
              <DocBreadcrumbsWrapper navbarinsert className={"flex m-0"}/>
            </div>
            <div className={"nav-left"}>
              <NavbarItems items={leftItems} />
            </div>
            {!mobileSidebar.disabled && <Fragment>
              <NavbarColorModeToggle className="sm-disp margin-left--md" />
            </Fragment>}
          </>
        }
        right={
          // TODO stop hardcoding items?
          // Ask the user to add the respective navbar items => more flexible

          // hi!! im the user. that is precisely why i am swizzling this. cant put the things where i want them :(

          <>
            <NavbarItems items={rightItems} />
            <NavbarColorModeToggle className={styles.colorModeToggle} />
            {!searchBarItem && (
              <NavbarSearch>
                <SearchBar />
              </NavbarSearch>
            )}
          </>
        }
      />
    </Fragment>
  );
}
