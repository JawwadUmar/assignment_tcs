import React, { useState, useEffect } from 'react';

type Props = {
  userId: number;
};

const UserProfile: React.FC<Props> = ({ userId }) => {
  const [user, setUser] = useState<any>(null); 
  //A proper user type is not defined over here
  //The use of 'any' keyword overlooks typesafety(defeats the purpose of Typescript)

  //SECURITY CONCERN: URL is hardcoded, could expose internal ENDPOINTS
  //Use environment variables (process.env.REACT_APP_APIURL)
  useEffect(() => {
    fetch(`https://api.example.com/user/${userId}`)
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error('Error fetching user data:', error)); 
  }, []);  //Here the useEffect does not include anything in it s dependency array
  //It should have included userId here (as userId changes the effect should re-run)
  //Also there is no cancellation logic in useEffect (If multiple fetches ,overlap, the state may be updated incorrectly)
  //Use AbortController!

  return (
    <div>
      {user ? (
        <div>
          <h1>{user.name}</h1>
          <p>{user.bio}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserProfile;

