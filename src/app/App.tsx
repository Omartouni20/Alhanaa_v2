import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import { AnimatePresence, motion } from "motion/react";

import { Navbar } from "@/app/components/navbar";
import { Footer } from "@/app/components/footer";

const HomePage = lazy(() =>
  import("@/app/pages/home").then((module) => ({
    default: module.HomePage,
  }))
);

const AboutPage = lazy(() =>
  import("@/app/pages/about").then((module) => ({
    default: module.AboutPage,
  }))
);

const ProductsPage = lazy(() =>
  import("@/app/pages/products").then((module) => ({
    default: module.ProductsPage,
  }))
);

const CertificatesPage = lazy(() =>
  import("@/app/pages/certificates").then((module) => ({
    default: module.CertificatesPage,
  }))
);

const ContactPage = lazy(() =>
  import("@/app/pages/contact").then((module) => ({
    default: module.ContactPage,
  }))
);

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
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="w-full max-w-full overflow-x-hidden"
    >
      {children}
    </motion.div>
  );
}

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <p className="text-muted-foreground">Loading...</p>
    </div>
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
          <Suspense fallback={<PageLoader />}>
            <AnimatedRoutes />
          </Suspense>
        </main>

        <Footer />
      </div>
    </Router>
  );
}