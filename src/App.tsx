import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import TalentAcademy from './pages/TalentAcademy';
import SuccessStories from './pages/SuccessStories';
import Blog from './pages/Blog';
import Company from './pages/Company';
import Contact from './pages/Contact';
import ServiceDetail from './pages/ServiceDetail';
import CompanyDetail from './pages/CompanyDetail';
import Cloudservices from './pages/Cloudservices';
import Cloudconsultingservices from './pages/Cloudconsultingservices';
import Cloudmanagedservices from './pages/Cloudmanagedservices';
import Cloudobservatorysupport from './pages/Cloudobservatorysupport';
import CloudTrainingEnablement from './pages/CloudTrainingEnablement';
import Devopsconsulting from './pages/Devopsconsulting';
import AionNimbiusatlassianelevate from './pages/AionNimbiusatlassianelevate';
import Atlassiansolutions from './pages/Atlassiansolutions';
import AtlassianProductConsulting from './pages/AtlassianProductConsulting';
import AtlassianImplementationServices from './pages/AtlassianImplementationServices';
import AtlassianManagedServices from './pages/AtlassianManagedServices';
import AtlassianTraining from './pages/AtlassianTraining';
import TalentAcademyPage from './pages/TalentAcademyPage';
import Companyoverview from './pages/Companyoverview';
import Joinus from './pages/Joinus';
import Magentoupgrade from './pages/Magentoupgrade';













function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:category/:subcategory" element={<ServiceDetail />} />
          <Route path="talent-academy" element={<TalentAcademy />} />
          <Route path="success-stories" element={<SuccessStories />} />
          <Route path="blog" element={<Blog />} />
          <Route path="company" element={<Company />} />
          <Route path="company/:section" element={<CompanyDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cloudservices" element={<Cloudservices />} />
          <Route path="cloudconsultingservices" element={<Cloudconsultingservices />} />       
          <Route path="cloudmanagedservices" element={<Cloudmanagedservices />} />   
          <Route path="cloudobservatorysupport" element={<Cloudobservatorysupport />} />   
          <Route path="CloudTrainingEnablement" element={<CloudTrainingEnablement />} />   
          <Route path="Devopsconsulting" element={<Devopsconsulting />} />  
          <Route path="AionNimbiusatlassianelevate" element={<AionNimbiusatlassianelevate />} />  
          <Route path="Atlassiansolutions" element={<Atlassiansolutions />} /> 
          <Route path="AtlassianProductConsulting" element={<AtlassianProductConsulting />} /> 
          <Route path="AtlassianImplementationServices" element={<AtlassianImplementationServices />} /> 
          <Route path="AtlassianManagedServices" element={<AtlassianManagedServices />} />
          <Route path="AtlassianTraining" element={<AtlassianTraining />} />
          <Route path="TalentAcademyPage" element={<TalentAcademyPage />} />
           <Route path="Companyoverview" element={<Companyoverview />} />
             <Route path="Joinus" element={<Joinus />} />
               <Route path="Magentoupgrade" element={<Magentoupgrade />} />

          

          


          

        </Route>
      </Routes>
    </Router>
  );
}

export default App;