import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Eventmanagment from './componets/Eventmanagment';
import Cart from './componets/Cart';
import Fetch from './componets/Fetch';


function App() {
 return (
  <BrowserRouter>
<Routes>
      <Route path="/" element={<Eventmanagment />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Fetch" element={<Fetch />} />
    </Routes>
  </BrowserRouter>
 );
}

export default App



