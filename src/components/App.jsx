import { Route, Routes } from "react-router-dom";
import { useState, lazy, Suspense } from "react";
import Layout from "./Layout/Layout.jsx";
// import Navigation from "../components/Navigation/Navigation.jsx";
import Loader from "../components/Loader/Loader.jsx";

const HomePage = lazy(() => import("../pages/HomePage/HomePage.jsx"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));
const ContactPage = lazy(() => import("../pages/ContactsPage/ContactsPage.jsx"));
const RegisterPage = lazy(() => import("../pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
// const TasksPage = lazy(() => import("../pages/TasksPage/TasksPage"));

import css from "./App.module.css";

export default function App() {
  const [loading, setLoading] = useState(false);

  return (
    <Layout>
      {/* <Navigation /> */}

      {loading && <Loader />}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
