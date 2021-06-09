import { Route, Switch } from "react-router-dom";
// route is used to set up paths and what components to be loaded
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavouritesPage from "./pages/Favourites";
import Layout from "./components/layout/Layout";
function App() {
  return (
    <div>
      <Layout>
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
      </Layout>
    </div>
  );
}

export default App;
