import './css/App.css';
import AppOne from 'apps/app-one/AppOne';
import { Provider } from 'react-redux';
import { store } from 'store/store'

const App = () => {

  return (
    <Provider store={store}>
      <div className='App'>
        <AppOne/>
      </div>
    </Provider>
  );
}

export default App;
