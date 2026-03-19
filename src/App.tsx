import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "@/pages/Home/Home";
import { About } from "@/pages/About/About";
import { Projects } from "@/pages/Projects/Projects";
import { Writing } from "@/pages/Writing/Writing";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100dvh",
        gap: "1rem",
        color: "var(--color-text-secondary)",
        fontFamily: "var(--font-sans)",
      }}
    >
      <span
        style={{
          fontSize: "3rem",
          fontWeight: 700,
          color: "var(--color-text-muted)",
        }}
      >
        404
      </span>
      <p>Page not found.</p>
      <a
        href="/"
        style={{ color: "var(--color-accent)", textDecoration: "none" }}
      >
        ← Go home
      </a>
    </div>
  );
}
