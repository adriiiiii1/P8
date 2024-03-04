import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./HomePage/HomePage.jsx"
import Logements from "./Logements/Logements.jsx"
import Error from "./Error/Error.jsx"
import APropos from "./APropos/APropos.jsx"
import Footer from "./Component/Footer/Footer.jsx"
import Header from "./Component/Header/Header.jsx"

function App() {
  return (

      <Router>
        <Header />      
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/logement/:id" element={<Logements />} />
            <Route path="/apropos" element={<APropos />} />
            <Route path="*" element={<Error />} />
          </Routes>
        <Footer />
      </Router>

  );
}

export default App;