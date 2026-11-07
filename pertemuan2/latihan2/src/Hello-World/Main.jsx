import { createRoot } from "react-dom/client";
import HelloWorld from "./Hello-World";
import { StrictMode } from "react";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <HelloWorld />
  </StrictMode>
);
