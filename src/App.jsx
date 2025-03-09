import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/Navbar';
import FooterComponent from './components/Footer';
import CarouselComponent from './components/Carousel';
import DataTable from './components/DataTable';

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={
          <>
            <CarouselComponent />
            <FooterComponent />
          </>
        } />
        <Route path="/dataTable" element={
          <>
            <div className="container mt-5">
              <DataTable />
            </div>
            <FooterComponent />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
