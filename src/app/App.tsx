import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";

import { Navbar } from "@/app/components/navbar";
import { Footer } from "@/app/components/footer";
import { HomePage } from "@/app/pages/home";
import { AboutPage } from "@/app/pages/about";
import { ProductsPage } from "@/app/pages/products";
import { CertificatesPage } from "@/app/pages/certificates";
import { ContactPage } from "@/app/pages/contact";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [location.pathname]);

  return null;
}

function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-full overflow-x-hidden"
    >
      {children}
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <HomePage />
            </PageTransition>
          }
        />

        <Route
          path="/about"
          element={
            <PageTransition>
              <AboutPage />
            </PageTransition>
          }
        />

        <Route
          path="/products"
          element={
            <PageTransition>
              <ProductsPage />
            </PageTransition>
          }
        />

        <Route
          path="/certificates"
          element={
            <PageTransition>
              <CertificatesPage />
            </PageTransition>
          }
        />

        <Route
          path="/contact"
          element={
            <PageTransition>
              <ContactPage />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />

      <div className="min-h-screen flex flex-col w-full max-w-full overflow-x-hidden">
        <header className="fixed top-0 left-0 right-0 z-[9999] w-full">
          <Navbar />
        </header>

        <main className="flex-1 w-full max-w-full overflow-x-hidden pt-20">
          <AnimatedRoutes />
        </main>

        <Footer />
      </div>
    </Router>
  );
}