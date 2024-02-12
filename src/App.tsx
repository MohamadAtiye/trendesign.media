import React from "react";
import { Container } from "@mui/material";
import NavBar from "./fragments/NavBar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import Footer from "./fragments/Footer";
import { Gallery } from "./pages/Gallery";

function App() {
  return (
    <Container
      sx={{
        padding: 0,
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>

      <Footer />
    </Container>
  );
}

export default App;
