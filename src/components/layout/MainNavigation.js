import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useState } from "react";

function MainNavigation() {
  const [active, setactive] = useState("all");
  function clickHandlerAll() {
    setactive("all");
  }
  function clickHandlerNew() {
    setactive("new");
  }
  function clickHandlerFav() {
    setactive("fav");
  }
  return (
    <header className={classes.header}>
      <div className={classes.logo}>TravelItALL</div>
      <nav>
        <ul>
          <li>
            <Link
              to="/"
              onClick={clickHandlerAll}
              className={active === "all" ? classes.active : null}
            >
              All Dest
            </Link>
          </li>
          <li>
            <Link
              to="/newmeetup"
              onClick={clickHandlerNew}
              className={active === "new" ? classes.active : null}
            >
              New Dest
            </Link>
          </li>
          <li>
            <Link
              to="/favourites"
              onClick={clickHandlerFav}
              className={active === "fav" ? classes.active : null}
            >
              Favourite
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
