import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Eventmanagment from './componets/Eventmanagment';


function App() {
 return (
  <BrowserRouter>
<Routes>
      <Route path="/" element={<Eventmanagment />} />
    </Routes>
  </BrowserRouter>
 );
}

export default App



