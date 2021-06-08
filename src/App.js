import { Route, Switch } from "react-router-dom";
// route is used to set up paths and what components to be loaded
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavouritesPage from "./pages/Favourites";
import MainNavigation from "./components/layout/MainNavigation";
function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        {/* or just exact, cause has value is true by default */}
        <Route path="/" exact={true}>
          <AllMeetupsPage></AllMeetupsPage>
        </Route>
        <Route path="/newmeetup">
          <NewMeetupPage></NewMeetupPage>
        </Route>
        <Route path="/favourites">
          <FavouritesPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
