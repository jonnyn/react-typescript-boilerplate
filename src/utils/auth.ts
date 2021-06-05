import Amplify from '@aws-amplify/core'
import { Auth } from 'aws-amplify'

const ID_TOKEN_KEY = 'id_token'
const ACCESS_TOKEN_KEY = 'access_token'
const REFRESH_TOKEN_KEY = 'refresh_token'

const config = {
  identityPoolId: '',
  region: process.env.REACT_APP_COGNITO_REGION,
  userPoolId: process.env.REACT_APP_COGNITO_POOL_ID,
  userPoolWebClientId: process.env.REACT_APP_COGNITO_WEB_CLIENT_ID,
  callback: process.env.REACT_APP_COGNITO_REDIRECT_URI,
}

const oauth = {
  domain: String(process.env.REACT_APP_COGNITO_URI)?.replace(
    /^https?:\/\//,
    '',
  ),
  scope: [
    'phone',
    'email',
    'profile',
    'openid',
    'aws.cognito.signin.user.admin',
  ],
  redirectSignIn: process.env.REACT_APP_COGNITO_REDIRECT_URI,
  redirectSignOut: `${window.location.protocol}//${window.location.host}`,
  responseType: 'code',
}

Amplify.configure({ Auth: config, oauth })

type SignupParams = {
  email: string
  password: string
  firstName: string
  lastName: string
}

export const signup = async ({
  email,
  password,
  firstName,
  lastName,
}: SignupParams) => {
  try {
    const newUser = await Auth.signUp({
      username: email,
      password,
      attributes: {
        email,
        family_name: lastName,
        given_name: firstName,
      },
    })
    return newUser.user
  } catch (error) {
    return error
  }
}

export const newPassword = async (incompleteUser: any, password: string) => {
  try {
    const user = await Auth.completeNewPassword(incompleteUser, password)
    if (user.signInUserSession) {
      const {
        signInUserSession: { accessToken, idToken, refreshToken },
      } = user
      localStorage.setItem(ACCESS_TOKEN_KEY, accessToken.jwtToken)
      localStorage.setItem(ID_TOKEN_KEY, idToken.jwtToken)
      localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken.jwtToken)
    }
    return user
  } catch (error) {
    return error
  }
}

export const socialSignIn = (provider: any) =>
  Auth.federatedSignIn({ provider })

export const authLogin = async (username: string, password: string) => {
  try {
    const user = await Auth.signIn(username, password)
    if (user.signInUserSession) {
      const {
        signInUserSession: { accessToken, idToken, refreshToken },
      } = user
      localStorage.setItem(ACCESS_TOKEN_KEY, accessToken.jwtToken)
      localStorage.setItem(ID_TOKEN_KEY, idToken.jwtToken)
      localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken.jwtToken)
    }
    return user
  } catch (error) {
    return error
  }
}

export const authLogout = async () => {
  try {
    await Auth.signOut({ global: true })
    return null
  } catch (err) {
    return err
  }
}

export const getIdToken = () => localStorage.getItem(ID_TOKEN_KEY) || null

export const loggedIn = async () => {
  try {
    const session = await Auth.currentSession()
    if (session) {
      localStorage.setItem(
        ACCESS_TOKEN_KEY,
        session.getAccessToken().getJwtToken(),
      )
      localStorage.setItem(ID_TOKEN_KEY, session.getIdToken().getJwtToken())
      return true
    }
    return false
  } catch (error) {
    return false
  }
}

export const requestCode = (email: string) =>
  new Promise((resolve, reject) => {
    Auth.forgotPassword(email)
      .then((data) => {
        resolve(data)
      })
      .catch((err) => {
        reject(err)
      })
  })

export const resetPassword = (
  email: string,
  confCode: string,
  newPass: string,
) =>
  new Promise((resolve, reject) => {
    Auth.forgotPasswordSubmit(email, confCode, newPass)
      .then((data) => {
        resolve(data)
      })
      .catch((err) => {
        reject(err)
      })
  })

export const reset = () => {
  localStorage.removeItem(ID_TOKEN_KEY)
  localStorage.removeItem(ACCESS_TOKEN_KEY)
  localStorage.removeItem(REFRESH_TOKEN_KEY)
}

export const randomPassword = () => {
  const chars = [
    'abcdefghijklmnopqrstuvwxyz',
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    '1234567890',
    '!@#$%^&*()-+<>',
  ]
  let pass = ''
  let picker = 0
  for (let x = 0; x < 8; x + 1) {
    const i = Math.floor(Math.random() * chars[picker].length)
    pass += chars[picker].charAt(i)
    picker += 1
    if (picker === 4) {
      picker = 0
    }
  }
  return pass
}
