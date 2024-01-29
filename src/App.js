import React, { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
function App() {

  const [ user, setUser ] = useState({});
  function handleCallbackResponse(response) {
    console.log("Encoded JWT: ", response.credential);

    const decodeData = jwtDecode(response.credential.toString());
    console.log(decodeData);
    setUser(decodeData)

    document.getElementById('signWithGoogle').hidden=true;
  }

  function handleSignOut(event) {
    setUser({});
    document.getElementById('signWithGoogle').hidden=false;
  }

  useEffect(() => {
    /* global google */

    google.accounts.id.initialize({
      client_id: '41004024869-vlbmsv8dl8qvj8kifeq5r4at41bpu9up.apps.googleusercontent.com',
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
        document.getElementById('signWithGoogle'),
        { theme: "outline", size: "large" },
    );

    google.accounts.id.prompt();


  }, []);

  return (
      <div className="App">
        <div id="signWithGoogle"></div>
        {Object.keys(user).length !== 0 &&
            <button onClick={event => {handleSignOut(event)}}>Sign Out</button>
        }

        {user &&
          <div>
            <img src={user.picture}/>
            <h2>{user.email}</h2>
            <p>{user.name}</p>
          </div>
        }
      </div>
  );
}

export default App;