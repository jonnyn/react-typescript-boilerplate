import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { styler, colors, breakpoints } from 'src/theme'

import Login from 'src/scenes/Auth/Login'
import Signup from 'src/scenes/Auth/Signup'
import ResetPassword from 'src/scenes/Auth/ResetPassword'

const styles = styler({
  root: {
    flex: 1,
    display: 'flex',
  },
  info: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '80px 60px',
    position: 'relative',
    overflow: 'hidden',
    background: colors.blackGray,
    [breakpoints.phone]: {
      display: 'none',
    },
  },
  title: {
    fontSize: 40,
    color: 'white',
  },
  fields: {
    flex: 1,
    zIndex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lightGray,
    padding: '80px 60px',
    [breakpoints.phone]: {
      padding: '40px 15px',
    },
  },
})

const Auth = () => (
  <div className={styles.root}>
    <div className={styles.info}>Logo</div>
    <div className={styles.fields}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/reset-password" component={ResetPassword} />
        <Redirect to="/login" />
      </Switch>
    </div>
  </div>
)

export default Auth
