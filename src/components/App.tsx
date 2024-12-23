/** @format */
import React from 'react';

import Footer from './Footer';
import Header from './Header';
import Main from './Main';

function App(): React.JSX.Element {
  return (
    <div className="wrapper">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
