import React from "react"
import { Navigate } from "react-router-dom"
//import { withAuthenticationRequired } from "@auth0/auth0-react"
import { useAuth0 } from "@auth0/auth0-react"

// const PrivateRoute = ({ component }) => {
//   const Component = withAuthenticationRequired(component, {
//     onRedirecting: () => <Navigate to='/' />,
//   })

//   return <Component />
// }
const PrivateRoute = ({ children }) => {
  const { user } = useAuth0()

  if (!user) {
    return <Navigate to='/' />
  }

  return children
}

export default PrivateRoute
