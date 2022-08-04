import { createRoot } from "react-dom/client";
import { Router } from "./Routes/Router";

const root = createRoot(document.querySelector("#root"));
root.render(<Router />);
