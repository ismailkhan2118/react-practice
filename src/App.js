import "./App.css";
import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavouritePage from "./pages/Favourites";

function App() {
  return (
    <Switch>
      <Route path='/' exact>
        <AllMeetupsPage></AllMeetupsPage>
      </Route>
      <Route path='/new'>
        <NewMeetupPage></NewMeetupPage>
      </Route>
      <Route path='/fav' exact>
        <FavouritePage></FavouritePage>
      </Route>
    </Switch>
  );
}

export default App;
