import React, { createContext, useState } from "react";
import { useFetch } from "../util-hooks/useFetch";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const { data, setData } = useFetch({
    url: "/data.json",
  });

  const [favorites, setFavorites] = useState([]);

  const filterData = (id) => {
    const filteredData = data.filter((item) => item.id === id);
    return filteredData;
  };

  const addToFavorites = (item) => {
    setFavorites((prevFavorites) => [...prevFavorites, item]);
  };

  const removeFromFavorites = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((item) => item.id !== id)
    );
  };

  const toggleFavorite = (item) => {
    if (favorites.some((favorite) => favorite.id === item.id)) {
      removeFromFavorites(item.id);
    } else {
      addToFavorites(item);
    }
  };

  const addNewMeetup = (newMeetup) => {
    setData((preState) => [...preState, newMeetup]);
  };

  return (
    <DataContext.Provider
      value={{
        data,
        filterData,
        favorites,
        addToFavorites,
        toggleFavorite,
        addNewMeetup,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
