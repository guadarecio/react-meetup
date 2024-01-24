import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import MeetupItem from "../components/meetups/MeetupItem";
import classes from "./../components/meetups/MeetupList.module.css";

export default function FavoritesPage() {
  const { favorites } = useContext(DataContext);

  return (
    <section>
      <h1>Favorites Page</h1>
      {favorites.length > 0 ? (
        <ul className={classes.list}>
          {favorites.map((d) => (
            <MeetupItem key={d.id} data={d} />
          ))}
        </ul>
      ) : (
        <h3>No tienes meetups favoritos. ¡Agrega algunos!</h3>
      )}
    </section>
  );
}
