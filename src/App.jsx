import "./App.css";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./components/Layout/Layout";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const ExtensionPage = lazy(() => import("./pages/ExtensionPage/ExtensionPage"));
const FeaturesPage = lazy(() => import("./pages/FeaturesPage/FeaturesPage"));
const ProPage = lazy(() => import("./pages/ProPage/ProPage"));
const DeveloperPage = lazy(() => import("./pages/DeveloperPage/DeveloperPage"));
const DownloadPage = lazy(() => import("./pages/DownloadPage/DownloadPage"));
const AboutPage = lazy(() => import("./pages/AboutPage/AboutPage"));
const ContactUsPage = lazy(() => import("./pages/ContactPage/ContactPage"));
const BlogListPage = lazy(() => import("./pages/BlogListPage/BlogListPage"));
const PrivacyPolicePage = lazy(() =>
  import("./pages/PrivacyPolicePage/PrivacyPolicePage")
);
const TermsPage = lazy(() => import("./pages/TermsPage/TermsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFound/NotFound"));

function App() {
  return (
    <>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/extension" element={<ExtensionPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/pro" element={<ProPage />} />
            <Route path="/developer" element={<DeveloperPage />} />
            <Route path="/download" element={<DownloadPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/blog-list" element={<BlogListPage />} />
            <Route path="/privacy-police" element={<PrivacyPolicePage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
