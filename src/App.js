import React from 'react';
import './App.css';
import MainComponent from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import myStore from './redux/store';
import { Provider } from 'react-redux';

function App() {
  //console.log("App.js: ", myStore.getState());
  return (
    <div className="App">
      {/* The Provider Compont for redux connect in react app.and the prop store={myStore} is BuiltinStore
      prop we can`t change this value and the myStore is reduc store for global Supplaying */}
      <Provider store={myStore}>
        {/* BrowserRouter is The React Router Dom Built in Component and it`s work is whole app 
        is react router effects available */}
        <BrowserRouter>
          <MainComponent />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;