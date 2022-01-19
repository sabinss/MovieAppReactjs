import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const ProtectedPage = ({ match, location }: any) => {
  const search = useLocation().search;
  const [message, setMessage] = useState<any>('');

  const user = 'johndoe';

  useEffect(() => {
    // console.log('cookies', document.cookie);
  }, []);

  const render = () => {
    const token = new URLSearchParams(search).get('token');
    return user == token ? (
      <div>
        <h1>You authenticated successfully...</h1>
        <input
          style={{ width: 300, color: 'black' }}
          placeholder="send message to webview"
          name="message"
          value={message}
          onChange={(event: any) => {
            console.log('message', event.target.value);
            setMessage(event.target.value);
          }}
        />
        <button
          onClick={() => {
            console.log(message);
            window.postMessage(message);
          }}
        >
          send message
        </button>
      </div>
    ) : (
      <>
        <p>
          {/* <strong>Cookies Props: </strong> */}
          {/* {JSON.stringify(document.cookie, null, 2)} */}
        </p>
        <p>Authentication failed</p>
      </>
    );
  };

  return <>{render()}</>;
};
