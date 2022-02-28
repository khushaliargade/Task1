import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import Navbar from './component/Navbar';
import Home from './component/Home';
import Products from './component/Products';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Products />

    </>
  );
}

export default App;
