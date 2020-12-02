import React from "react";

function User({ userInfo }) {
  return (
    <>
      <h2>{userInfo.name.first + " " + userInfo.name.last}</h2>
      <ul key={userInfo.id.value}>
        <li>{userInfo.location.city + " " + userInfo.location.street.name}</li>
        <li>{userInfo.email}</li>
        <li>{userInfo.registered.date}</li>
      </ul>
      <img src={userInfo.picture.medium} alt="profile" />
    </>
  );
}

export default User;
