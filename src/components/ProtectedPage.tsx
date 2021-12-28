import React from "react";
import { useLocation } from "react-router-dom";

export const ProtectedPage = ({ match, location }: any) => {
  const search = useLocation().search;

  const user = "johndoe";

  const render = () => {
    const token = new URLSearchParams(search).get("token");

    return user == token ? (
      <div>
        <h1>You authenticated successfully</h1>
        <p>
          <strong>Location Props: </strong>
          {JSON.stringify(location, null, 2)}
        </p>
      </div>
    ) : (
      <>
        <p>
          <strong>Location Props: </strong>
          {JSON.stringify(location, null, 2)}
        </p>
        <p>Authentication failed</p>
      </>
    );
  };

  return <>{render()}</>;
};
