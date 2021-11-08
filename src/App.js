import "./App.css";
import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavouritePage from "./pages/Favourites";
import Header from "./components/layout/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage></AllMeetupsPage>
        </Route>
        <Route path="/new">
          <NewMeetupPage></NewMeetupPage>
        </Route>
        <Route path="/fav" exact>
          <FavouritePage></FavouritePage>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
