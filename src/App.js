import React, { lazy, Suspense } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./components/Navbar.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import EmbeddedPdf from "./components/EmbeddedPdf/EmbeddedPdf";

import ScrollToTop from "./components/ScrollToTop";
import { Helmet } from "react-helmet";

const IntroSCM = lazy(() => import("./components/doc_pages/IntroSCM"));
const IntroMFG = lazy(() => import("./components/doc_pages/IntroMFG"));
const IntroENG = lazy(() => import("./components/doc_pages/IntroENG"));
const ISO = lazy(() => import("./components/doc_pages/ISO"));
const SystemDataSecurity = lazy(() =>
  import("./components/doc_pages/SystemDataSecurity")
);
const IndustrialRevolution = lazy(() =>
  import("./components/doc_pages/IndustrialRevolution")
);
const NotFound = lazy(() => import("./components/NotFound/NotFound"));

const Home = lazy(() => import("./components/Home/Home"));
const About = lazy(() => import("./components/pages/About"));
const MainContactUsPage = lazy(() =>
  import("./components/ContactUs/MainContactUsPage")
);
const ErrorMessage = lazy(() => import("./components/ContactUs/ErrorMessage"));
const CompleteMessage = lazy(() =>
  import("./components/ContactUs/CompleteMessage")
);

const PrivacyPolicy = lazy(() => import("./components/pages/PrivacyPolicy"));
const TermsOfUse = lazy(() => import("./components/pages/TermsOfUse"));
const LeanManufacturing = lazy(() =>
  import("./components/doc_pages/LeanManufacturing")
);
const CubePartNumber = lazy(() =>
  import("./components/doc_pages/CubePartNumber")
);
const MaterialTrackingControl = lazy(() =>
  import("./components/doc_pages/MaterialTrackingControl")
);
const ImplementationRoadmap = lazy(() =>
  import("./components/doc_pages/ImplementationRoadmap")
);
const ImplementationTandC = lazy(() =>
  import("./components/doc_pages/ImplementationTandC")
);
const SaasTermsConditions = lazy(() =>
  import("./components/doc_pages/SaasTermsConditions")
);
const CubeValueProposition = lazy(() =>
  import("./components/doc_pages/CubeValueProposition")
);
const SelectionProcess = lazy(() =>
  import("./components/doc_pages/SelectionProcess")
);
const DynamicProductionScheduling = lazy(() =>
  import("./components/doc_pages/DynamicProductionScheduling")
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="manex-app">
        <Helmet>
          <title>manex ERP for the EMS Industry</title>
          <meta
            name="description"
            content="Any other ERP requires significant overhead to meerly approximate standard capabilities in MANEX. 
            We go beyond standard features to create greater value for our users. We focus on the specialized functionality this unique industry requires. MANEX is a full solution designed to be intuitive for easy navigation and use."
          />
          <meta
            name="keywords"
            content="MANEX ERP Inc., manex, manex ERP, CUBE ERP, CUBE MES, CUBE ERP and MES, ERP - Enterprise Resource Planning, manex MES, MES – Manufacturing Execution System, manex ERP and MES, SCM – Supply Chain Management,
            EQS – Enterprise-wide Quality Management System, EMS – Electronics Manufacturing Service, ECM – Electronics Contract Manufacturing, ERP for EMS, ERP for ECM, ERP for electronics manufacturing, ISO, ISO Certification, 
            Electronics Manufacturing, Lean Manufacturing, ITAR, NIST800/CMMC, 4th IR, 4th Industrial Revolution, NIST800/CMMC, Production Engineering, Manufacturing Engineering, Shop Floor Control, Inventory Control, Manufacturing Operations Control,
            Manufacturing Inventory Control, Inventory Control for Manufacturing, AI for Manufacturing, SQC, Statistical Quality Control, Production Scheduling, Slack and Sequence Scheduling, SQA, Statistical Quality Analysis, ECO, Engineering Change Order, 
            Deviation Notice, Electronic Work Instruction, EWI, Electronic File Cabinet, CAR, CAPA, Corrective Action, Preventative Action, EMS inventory systems, ERP security and controls, contract manufacturing ERP, EMS inventory management, lean manufacturing ERP software,
            MRP lean manufacturing, electronics manufacturing software, mfg software systems, ERP parts, easy MFG ERP, ROHS compliance audit checklist, part number system, inventory part numbering system, ERP software for electronics industry, ERP security best practices"
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1"
          />
        </Helmet>

        <Navbar />
        <div className="content-container">
          <Suspense fallback={<EmbeddedPdf />}>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>

              <Route path="/about-us">
                <About />
              </Route>

              <Route exact path="/contact-us">
                <MainContactUsPage />
              </Route>

              <Route exact path="/error-message">
                <ErrorMessage />
              </Route>

              <Route exact path="/complete-message">
                <CompleteMessage />
              </Route>

              <Route exact path="/privacy-policy">
                <PrivacyPolicy />
              </Route>

              <Route exact path="/terms-of-use">
                <TermsOfUse />
              </Route>

              {/* C dropdown Menu */}

              <Route exact path="/lean-manufacturing">
                <LeanManufacturing />
              </Route>
              <Route exact path="/ems-part-number-system">
                <CubePartNumber />
              </Route>
              <Route exact path="/mtc">
                <MaterialTrackingControl />
              </Route>
              <Route exact path="/dynamic-production-scheduling">
                <DynamicProductionScheduling />
              </Route>
              <Route exact path="/cube-erp-or-mes-implementation-roadmap">
                <ImplementationRoadmap />
              </Route>
              <Route exact path="/cube-implementation-training-and-consultancy">
                <ImplementationTandC />
              </Route>
              <Route exact path="/erp-and-mes-selection-process">
                <SelectionProcess />
              </Route>
              <Route exact path="/erp-and-mes-value-proposition">
                <CubeValueProposition />
              </Route>
              <Route exact path="/CUBE-SaaS-License-Terms-and-Conditions">
                <SaasTermsConditions />
              </Route>

              {/* SCM Menu */}

              <Route exact path="/scm-intro">
                <IntroSCM />
              </Route>

              {/* MFG Menu */}

              <Route exact path="/mfg-intro">
                <IntroMFG />
              </Route>

              {/* ENG Menu */}

              <Route exact path="/eng-intro">
                <IntroENG />
              </Route>

              {/* EQS Menu */}

              <Route exact path="/iso">
                <ISO />
              </Route>

              <Route exact path="/system-user-and-data-security">
                <SystemDataSecurity />
              </Route>

              <Route exact path="/industrial-revolution">
                <IndustrialRevolution />
              </Route>

              <Route exact path="/under-construction">
                <div
                  className={"under-construction"}
                  style={{
                    fontSize: "24px",
                    margin: "0 auto",
                    width: "50%",
                    padding: "3% 100px 15px 100px",
                    textAlign: "center",
                  }}
                >
                  This area is still under construction! <br />
                  Please come back at a later time or complete the following
                  form so we can notify you when this becomes available:
                </div>
                <MainContactUsPage />
              </Route>

              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Suspense>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
