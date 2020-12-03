import React from "react";
import Moment from "react-moment";

function User({ userInfo }) {
  const { registered, name, id, location, email, picture } = userInfo;

  const dateToFormat = registered.date;

  return (
    <>
      <ul key={id.value}>
        <li>{name.first || "First name not provided"}</li>
        <li>{name.last || "Last name not provided"}</li>
        <li>{location.city + " " + location.street.name}</li>
        <li>{email}</li>
        <li>
          <Moment>{dateToFormat}</Moment>
        </li>
      </ul>
      <img src={picture.medium} alt="profile" />
    </>
  );
}

export default User;
