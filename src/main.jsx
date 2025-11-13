
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { userReducer } from './store/reducer.js';
import { Provider } from 'react-redux';

const rootReducer = combineReducers ({
  user: userReducer,
});

const store = createStore(rootReducer, composeWithDevTools())

createRoot(document.getElementById('root')).render(
<Provider store={store}>
  <App />
</Provider>
)
