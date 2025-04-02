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
import { Seo } from "./Components/HomePages/ServicePages/Seo";
import VettingProcess from "./Components/WhyPhanom/VettingProcess/VettingProcess";
import HireMobileApp from "./Components/HireIndianTalent/HireDeveloper/HireMobileApp/HireMobileApp";
import HireSoftware from "./Components/HireIndianTalent/HireDeveloper/HireSoftware/HireSoftware";
import HireAndroid from "./Components/HireIndianTalent/HireDeveloper/HireAndroid/HireAndroid";
import HireWordPress from "./Components/HireIndianTalent/HireDeveloper/HireWordPress/HireWordPress";
import HirePHP from "./Components/HireIndianTalent/HireDeveloper/HirePHP/HirePHP";
import HireShopify from "./Components/HireIndianTalent/HireDeveloper/HireShopify/HireShopify";
import HireLaravel from "./Components/HireIndianTalent/HireDeveloper/HireLaravel/HireLaravel";
import HireNodejs from "./Components/HireIndianTalent/HireDeveloper/HireNodeJs/HireNodejs";
import HireReactJs from "./Components/HireIndianTalent/HireDeveloper/HireReactJs/HireReactJs";
import HireGraphic from "./Components/HireIndianTalent/HireDesigner/HireGraphic/HireGraphic";
import HireUiuxDesigner from "./Components/HireIndianTalent/HireDesigner/HireUiuxDesigner/HireUiuxDesigner";
import HireWebDesigner from "./Components/HireIndianTalent/HireDesigner/HireWebDesigner/HireWebDesigner";
import HirePA from "./Components/HireIndianTalent/HireDigitalMarketing/HirePA/HirePA";
import HireSeoExpert from "./Components/HireIndianTalent/HireDigitalMarketing/HireSeoExpert/HireSeoExpert";
import HirePpcExpert from "./Components/HireIndianTalent/HireDigitalMarketing/HirePpcExpert/HirePpcExpert";
import HireIOS from "./Components/HireIndianTalent/HireDeveloper/HireIOS/HireIOS";
import HireReactNative from "./Components/HireIndianTalent/HireDeveloper/HireReactNative/HireReactNative";
import WhyIndia from "./Components/WhyPhanom/WhyIndia/WhyIndia";
import HowItWorks from "./Components/WhyPhanom/HowItWorks/HowItWorks";
import ShopifyPublicApp from "./Components/HireIndianTalent/HireDeveloper/ShopifyPublicApp/ShopifyPublicApp";
import { SocialMediaMarketing } from "./Components/HomePages/ServicePages/SocialMediaMarketing/SocialMediaMarketing";

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
          <Route path="/vettingprocess" element={<VettingProcess />} />
          <Route
            path="/hire-mobile-app-developers-in-india/"
            element={<HireMobileApp />}
          />
          <Route
            path="/hire-dedicated-software-developers-in-india/"
            element={<HireSoftware />}
          />
          <Route
            path="/hire-dedicated-android-app-developers-in-india/"
            element={<HireAndroid />}
          />
          <Route
            path="/hire-wordpress-developers-in-india/"
            element={<HireWordPress />}
          />
          <Route
            path="/hire-expert-php-developers-in-india/"
            element={<HirePHP />}
          />
          <Route
            path="/hire-shopify-developers-in-india/"
            element={<HireShopify />}
          />
          <Route
            path="/hire-dedicated-laravel-developers-in-india/"
            element={<HireLaravel />}
          />
          <Route
            path="/hire-dedicated-nodejs-developers-in-india/"
            element={<HireNodejs />}
          />
          <Route
            path="/hire-dedicated-reactjs-developers-in-india/"
            element={<HireReactJs />}
          />
          <Route
            path="/hiregraphic-designers-in-india/"
            element={<HireGraphic />}
          />
          <Route
            path="/hire-ui-designers-in-india/"
            element={<HireUiuxDesigner />}
          />
          <Route
            path="/hire-web-designers-in-india/"
            element={<HireWebDesigner />}
          />
          <Route path="/hirepa" element={<HirePA />} />
          <Route
            path="/hire-seo-experts-in-india/"
            element={<HireSeoExpert />}
          />
          <Route
            path="/hire-pay-per-click-experts-in-india/"
            element={<HirePpcExpert />}
          />
          <Route
            path="/hire-dedicated-ios-app-developer-in-india/"
            element={<HireIOS />}
          />
          <Route
            path="/hire-dedicated-react-native-developers-in-india/"
            element={<HireReactNative />}
          />
          <Route path="/whyindia" element={<WhyIndia />} />
          <Route path="/howitworks" element={<HowItWorks />} />

          <Route path="/offshore-seo-company-in-india/" element={<Seo />} />
          <Route
            path="/offshore-social-media-marketing-agency-in-india/"
            element={<SocialMediaMarketing />}
          />
          <Route
            path="/hire-expert-shopify-apps-developers-in-india/"
            element={<ShopifyPublicApp />}
          />
          {/* <Route
            path="/offshore-youtube-marketing-services-in-india/"
            element={<YouTubeMarketing />}
          />

          <Route
            path="/offshore-ppc-marketing-agency-in-india/"
            element={<PayPerClick />}
          />

          <Route
            path="/offshore-website-development-services-in-india/"
            element={<WebDevelopment />}
          />

          <Route
            path="/offshore-java-software-development-company-in-india/"
            element={<Java />}
          />

          <Route
            path="/offshore-shopify-web-development-services-in-india/"
            element={<Shopify />}
          /> */}

          {/* <Route
                    path="/offshore-magento-development-company-in-india/"
                    element={<Magento />}
                  /> */}
          {/* <Route
                    path="/offshore-graphic-design-agency-in-india/"
                    element={<GraphicDesign />}
                  /> */}
          {/* <Route
                    path="/offshore-web-design-agency-in-india/"
                    element={<WebsiteDesign />}
                  /> */}
          {/* <Route
                    path="/offshore-rotoscoping-services-in-india/"
                    element={<RotoScoping />}
                  /> */}
          {/* <Route
                    path="/offshore-animation-company-in-india/"
                    element={<Animation />}
                  /> */}
          {/* <Route
                    path="/offshore-ecommerce-agency-india/"
                    element={<ECommerceMarketing />}
                  /> */}
          {/* <Route
                    path="/offshore-amazon-marketing-agency-in-india/"
                    element={<AmazonMarketing />}
                  /> */}
          {/* <Route
                    path="/offshore-wordpress-development-company-on-india/"
                    element={<Wordpress />}
                  /> */}
          {/* <Route
                    path="/offshore-php-development-company-in-india/"
                    element={<Php />}
                  /> */}
          {/* <Route
                    path="/offshore-video-marketing-services-in-India/"
                    element={<VideoMarketing />}
                  /> */}
          {/* <Route
                    path="/offshore-branding-agency-in-india/"
                    element={<Branding />}
                  /> */}
          {/* <Route
                    path="/offshore-packeging-and-labeling-agency-in-india/"
                    element={<PackagingandLabeling />}
                  />
                  */}
        </Routes>

        <Loader />
        <ToastContainer />
      </Layout>
    </NoInternetConnection>
  );
}

export default App;
