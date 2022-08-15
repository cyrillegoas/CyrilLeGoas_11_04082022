import { apartmentsData } from "./apartmentsData";
import { ApartmentsContext } from "./ApartmentsContext";
import { Router } from "./routes/Router";

export const App = () => (
  <ApartmentsContext.Provider value={apartmentsData}>
    <Router />
  </ApartmentsContext.Provider>
);
