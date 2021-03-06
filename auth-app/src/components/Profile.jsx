import { userAuth0 } from "@auth0/auth0-react";

function Profile() {
  const { user, isAuthenticated} = userAuth0();
  
  return (
    isAuthenticated && (
    <div>
      <img src={user.picture} alt={user.name}/>
      <h2>{user.name}</h2>
      <h3>{user.email}</h3>
      {/* {JSON.stringify(user, null, 2)} */}
    </div>
    )
  )
}

export default Profile;