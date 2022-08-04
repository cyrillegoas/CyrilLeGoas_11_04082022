import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Apartment } from "./Apartment";
import { About } from "./About";
import { NotFound } from "./NotFound";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/apartment/:apartmentId" element={<Apartment />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
