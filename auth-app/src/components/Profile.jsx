
import { userAuth0 } from "@auth0/auth0-react";

function Profile() {
  const { user } = userAuth0();
  
  return (
    <div>
      {JSON.stringify(user, null, 2)}
    </div>
  )
}

export default Profile;