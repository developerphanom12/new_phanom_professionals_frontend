import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Appointment } from "./Components/Appointment/Appointment";
import { AdminBlog } from "./Components/Blogs/AdminBlog";
import { BlogDetails } from "./Components/Blogs/BlogDetails";
import { Blogs } from "./Components/Blogs/Blogs";
import { EditBlog } from "./Components/Blogs/EditBlog";
import { UploadBlog } from "./Components/Blogs/UploadBlog";
import { AdminCaseStudy } from "./Components/CaseStudy/AdminCaseStudy";
import { CaseStudy } from "./Components/CaseStudy/CaseStudy";
import { CaseStudyDetails } from "./Components/CaseStudy/CaseStudyDetails";
import { UploadCaseStudy } from "./Components/CaseStudy/UploadCaseStudy";
import { Home } from "./Components/HomePages/Home";
import { LandingPage } from "./Components/LandingPage/LandingPage";
import Layout from "./Layout";
import { Route, Routes } from "react-router-dom";
import ThankyouPage from "./Components/LandingPage/ThankyouPage";
import { Content } from "./Components/Blogs/Content";
import Loader from "./Important/Loader";
import NoInternetConnection from "./Important/NoInternetConnection";

function App() {
  return (
    <NoInternetConnection>
      <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog-details/:id/:slug" element={<BlogDetails />} />
            <Route path="/edit-blog/:id" element={<EditBlog />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/case-study" element={<CaseStudy />} />
            <Route
              path="/case-study-details/:id/:slug"
              element={<CaseStudyDetails />}
            />
            <Route path="/admin-case-study" element={<AdminCaseStudy />} />
            <Route path="/upload-case-study" element={<UploadCaseStudy />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/admin-blog" element={<AdminBlog />} />
            <Route path="/upload-blog" element={<UploadBlog />} />
            <Route path="/thank-you" element={<ThankyouPage />} />
            {/* <Route path="/contact-us" element={<Contact />} /> */}
            <Route path="/hire-indian-talent/" element={<LandingPage />} />
            <Route path="/content" element={<Content />} />
          </Routes>

        <Loader />
        <ToastContainer />
      </Layout>
    </NoInternetConnection>
  );
}

export default App;
