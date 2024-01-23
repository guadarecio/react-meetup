import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import MeetupItem from "../components/meetups/MeetupItem";
import classes from "./../components/meetups/MeetupList.module.css";

export default function FavoritesPage() {
  const { favorites } = useContext(DataContext);

  return (
    <section>
      <h1>Favorites Page</h1>
      <ul className={classes.list}>
        {favorites?.map((d) => (
          <MeetupItem data={d} />
        ))}
      </ul>
    </section>
  );
}
