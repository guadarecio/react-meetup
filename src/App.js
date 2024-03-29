import { useState } from "react";

import AllMeetupsPage from "./pages/AllMeetupsPage";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";
import {
  ALL_MEETUP_PAGE,
  FAVORITES_PAGE,
  NEW_MEETUP_PAGE,
} from "./utils/constants";

import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";
import { DataProvider } from "./context/DataContext";

function App() {
  const [page, setPage] = useState(ALL_MEETUP_PAGE);

  function getCurrentPageComponent() {
    let currentPageComponent = <AllMeetupsPage />;
    switch (page) {
      case FAVORITES_PAGE:
        currentPageComponent = <FavoritesPage />;
        break;
      case NEW_MEETUP_PAGE:
        currentPageComponent = <NewMeetupsPage />;
        break;
      default:
        currentPageComponent = <AllMeetupsPage />;
    }

    return currentPageComponent;
  }

  return (
    <DataProvider>
      <div data-test="app">
        <MainNavigation setPage={setPage} />
        <Layout>{getCurrentPageComponent()}</Layout>
      </div>
    </DataProvider>
  );
}

export default App;
