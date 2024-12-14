import Layout from "@/components/layout/Layout";
import AboutUs1 from "@/components/sections/AboutUs1";
import Activities1 from "@/components/sections/Activities1";
import Adventure from "@/components/sections/Adventure";
import BannerBlog4 from "@/components/sections/BannerBlog4";
import BannerContact from "@/components/sections/BannerContact";
import BrandLogo1 from "@/components/sections/BrandLogo1";
import CircleCrousal from "@/components/sections/circleCrousal/page";
import CardReview from "@/components/sections/cityReview/page";
import Counter1 from "@/components/sections/Counter1";
import Cta1 from "@/components/sections/Cta1";
import Destination1 from "@/components/sections/Destination1";
import ImageGallery from "@/components/sections/imageGallary/page";
import OfferPackage from "@/components/sections/OfferPackage";
import CardCarousel from "@/components/sections/popularTour/page";
import SelectForm1 from "@/components/sections/SelectForm1";
import Slider1 from "@/components/sections/Slider1";
import Testimonial1 from "@/components/sections/Testimonial1";
import TourPackage1 from "@/components/sections/TourPackage1";
import LayoutComponent from "@/components/sections/video/page";

export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <Slider1 />
        {/* <SelectForm1 /> */}
        <AboutUs1 />
        <CircleCrousal />
        <CardCarousel />
        <CardReview />
        <LayoutComponent />
        <ImageGallery />
        {/* <TourPackage1 /> */}
        {/* <Activities1 />
        <OfferPackage />
        <Counter1 />
        <Destination1 />
        <BrandLogo1 />
        <Adventure />
        <Testimonial1 />*/}
        <Cta1 />
        <BannerBlog4 />
        <BannerContact /> 
      </Layout>
    </>
  );
}
