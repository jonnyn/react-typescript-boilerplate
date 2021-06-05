import { ChakraProvider } from '@chakra-ui/react'
import { isMobile } from 'react-device-detect'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { TouchBackend } from 'react-dnd-touch-backend'
import Helmet from 'react-helmet'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader/root'
import { PersistGate } from 'redux-persist/integration/react'
import { themeStyles, Fonts } from 'src/theme'
import store, { persistor } from 'src/utils/store'
import ApolloProvider from './utils/apollo'
import Routes from './routes'

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ApolloProvider>
        <ChakraProvider theme={themeStyles}>
          <Fonts />
          <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
            <Helmet
              titleTemplate="%s | react-boilerplate"
              meta={[
                { charset: 'utf-8' },
                {
                  'http-equiv': 'X-UA-Compatible',
                  content: 'IE=edge',
                },
                {
                  name: 'viewport',
                  content: 'width=device-width, initial-scale=1',
                },
              ]}
            />
            <Routes />
          </DndProvider>
        </ChakraProvider>
      </ApolloProvider>
    </PersistGate>
  </Provider>
)

export default hot(App)
