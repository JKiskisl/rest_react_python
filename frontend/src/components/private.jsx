import { useContext } from "react"

import { AuthContext } from '../utils/providers'


const Private = () => {
  // contexts
  const { auth } = useContext(AuthContext)

  // render
  return (
    <div className="container">
      <div className="row">
        <h1>Private page</h1>
        <p>Privatus puslapis <strong>{auth.user ? auth.user.username : "Mr Error"}</strong>!!</p>
      </div>
      <div className="row">
        <p>Jei gali matyti si uzrasa, vadinasi projektas veikia.</p>
        <p>Aciu!!</p>
      </div>
    </div>
  )

}

export default Private