import React, { useState, useContext } from "react";
import { DataContext } from "../../context/DataContext";
import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";

export default function MeetupItem({ data: item }) {
  const { favorites, toggleFavorite } = useContext(DataContext);
  if (!item) return <p>Loading...</p>;
  const isFavorite = favorites.some((favorite) => favorite.id === item.id);

  const handleToggleFavorite = () => {
    toggleFavorite(item);
  };

  return (
    <li className={classes.item} data-test="meet-up-item">
      <Card>
        <div className={classes.image}>
          <img src={item.image} alt={item.title} />
        </div>
        <div className={classes.content}>
          <h3>{item.title}</h3>
          <address>{item.address}</address>
          <p>{item.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={() => handleToggleFavorite()}>
            {isFavorite ? "Remove from favorites" : "Add to favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}
