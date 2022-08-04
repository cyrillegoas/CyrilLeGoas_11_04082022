import { createRoot } from "react-dom/client";
import { Router } from "./Routes/Router";
import "./Css/styles.css";

const root = createRoot(document.querySelector("#root"));
root.render(<Router />);
