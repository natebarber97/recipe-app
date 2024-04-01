import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import RecipePage from './pages/RecipePage'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/:id"
              element={<RecipePage />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
