import { createRoot } from "react-dom/client";
import { Router } from "./routes/Router";
import "./css/styles.css";

const root = createRoot(document.querySelector("#root"));
root.render(<Router />);
