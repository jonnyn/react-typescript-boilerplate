import React from 'react'
// import { Route, Link } from 'react-router-dom'
import { authLogin } from 'src/utils/auth'
import { Button } from 'src/components'
// import { styler } from 'src/theme'

// const styles = styler({
//   mainContent: {
//     width: '30.625rem',
//     margin: '0 0 0 11.5625rem',
//     color: 'white',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-around',
//     flex: 1,
//   },
//   header: {
//     position: 'relative',
//     textAlign: 'center',
//     marginBottom: 50,
//   },
//   input: {
//     minWidth: 'auto',
//     width: '100%',
//   },
//   newPassword: {
//     paddingBottom: 20,
//   },
//   emailAddress: {
//     paddingBottom: 20,
//   },
//   modalContainer: {
//     backgroundColor: '#fffdf3',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexDirection: 'column',
//     borderRadius: '0.3125rem',
//     color: '#093565',
//     padding: '5rem 10rem',
//   },
//   modalTitle: {
//     fontWeight: '700 !important',
//     color: '#042955',
//     letterSpacing: '0 !important',
//     padding: '3.125rem 0 1rem 0',
//   },
// })

const Login = () => {
  const handleLogin = async () => {
    // eslint-disable-next-line no-console
    const user = await authLogin('t@t.com', 'Tt123456!!')
    // eslint-disable-next-line no-console
    console.log('user :', user)
  }

  return (
    <div>
      <Button label="LLLogin" onClick={() => handleLogin()} />
    </div>
  )
}

export default Login
