import { useContext } from "react";
import MeetupItem from "../components/meetups/MeetupItem";
import classes from "./../components/meetups/MeetupList.module.css";
import { DataContext } from "../context/DataContext";

export default function AllMeetupsPage() {
  const { data } = useContext(DataContext);

  return (
    <section>
      <h1>All Meetups</h1>
      <ul className={classes.list}>
        {data?.map((d) => (
          <MeetupItem key={d.id} data={d} />
        ))}
      </ul>
    </section>
  );
}
