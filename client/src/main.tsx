import { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Store from './shared/store/store.ts';
import { BrowserRouter } from 'react-router-dom';

interface State {
  store: Store;
}

const store = new Store();

const Context = createContext<State>({
  store,
});
export default Context;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Context.Provider value={{ store }}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Context.Provider>
);
