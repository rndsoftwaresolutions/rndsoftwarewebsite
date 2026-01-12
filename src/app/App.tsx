import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { ProcessPage } from './pages/ProcessPage';
import { AchievementsPage } from './pages/AchievementsPage';
import { ClientsPage } from './pages/ClientsPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 text-white">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
        <Route path="/process" element={<ProcessPage />} />
        <Route path="/achievements" element={<AchievementsPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </div>
  );
}












// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Header } from './components/Header';
// import { Footer } from './components/Footer';
// import { HomePage } from './pages/HomePage';
// import { AboutPage } from './pages/AboutPage';
// import { ServicesPage } from './pages/ServicesPage';
// import { ServiceDetailPage } from './pages/ServiceDetailPage';
// import { ProcessPage } from './pages/ProcessPage';
// import { AchievementsPage } from './pages/AchievementsPage';
// import { ClientsPage } from './pages/ClientsPage';
// import { PortfolioPage } from './pages/PortfolioPage';
// import { ContactPage } from './pages/ContactPage';

// export default function App() {
//   return (
//     <BrowserRouter>
//       <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 text-white">
//         <Header />
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/about" element={<AboutPage />} />
//           <Route path="/services" element={<ServicesPage />} />
//           <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
//           <Route path="/process" element={<ProcessPage />} />
//           <Route path="/achievements" element={<AchievementsPage />} />
//           <Route path="/clients" element={<ClientsPage />} />
//           <Route path="/portfolio" element={<PortfolioPage />} />
//           <Route path="/contact" element={<ContactPage />} />
//         </Routes>
//         <Footer />
//       </div>
//     </BrowserRouter>
//   );
// }
