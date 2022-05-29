import { useContext } from "react"

import { AuthContext } from '../utils/providers'


const Public = () => {
  // contexts
  const { auth } = useContext(AuthContext)

  // render
  return (
    <div className="container">
      <div className="row">
        <h1>Public page</h1>
        <p>Viesas!!</p>
        {auth.user
          ? <p className="text-success">Tu prisijunges kaip <strong>{auth.user ? auth.user.username : "Mr Error"}</strong></p>
          : <p className="text-secondary">Prisijunk kad matytum savo username cia</p>}
      </div>
    </div>
  )

}

export default Public