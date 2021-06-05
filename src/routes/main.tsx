import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { styler } from 'src/theme'
import Home from 'src/scenes/Home'

const styles = styler({
  root: {
    flex: 1,
    display: 'flex',
    width: '100%',
  },
  container: {
    width: '100%',
    maxWidth: '1440px',
    margin: '0 auto',
    padding: '0 2rem',
  },
})

const Main = () => (
  <div className={styles.root}>
    <div className={styles.info}>Logo</div>
    <div className={styles.fields}>
      <Switch>
        <Route path="/home" component={Home} />
        <Redirect to="/home" />
      </Switch>
    </div>
  </div>
)

export default Main
