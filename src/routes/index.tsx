import React, { useEffect, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from 'src/hooks'
import { styler } from 'src/theme'
import { authenticate } from 'src/modules/account.slice'
import { Loader } from 'src/components'
import Main from './main'
import Auth from './auth'

const styles = styler({
  root: {
    flex: 1,
    display: 'flex',
    minHeight: '100vh',
  },
})

const Routes = () => {
  const dispatch = useAppDispatch()
  const { loggedIn, checking } = useAppSelector((state) => state.account)

  useEffect(() => {
    dispatch(authenticate())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (checking) return <Loader />

  return (
    <Router>
      <div className={styles.root}>
        <Suspense fallback={<Loader />}>
          <Switch>
            {loggedIn ? (
              <Route path="/" component={Main} />
            ) : (
              <Route path="/" component={Auth} />
            )}
          </Switch>
        </Suspense>
      </div>
    </Router>
  )
}

export default Routes
