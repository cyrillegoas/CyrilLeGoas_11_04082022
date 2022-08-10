import { BrowserRouter, Route, Routes } from "react-router-dom";
import { apartmentsData } from "../apartmentsData";
import { ApartmentsContext } from "../ApartmentsContext";
import { Home } from "../pages/Home";
import { Apartment } from "../pages/Apartment";
import { About } from "../pages/About";
import { NotFound } from "../pages/NotFound";

export const Router = () => (
  <ApartmentsContext.Provider value={apartmentsData}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apartment/:apartmentId" element={<Apartment />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </ApartmentsContext.Provider>
);
