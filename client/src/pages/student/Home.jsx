import React from "react";
import Hero from "../../components/student/Hero";
import Companies from "../../components/student/Companies";
import Testimonials from "../../components/student/Testimonials";
import CourseSection from "../../components/student/CourseSection";
import CallToActions from "../../components/student/CallToActions";
import Footer from "../../components/student/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <Companies />
      <CourseSection />
      <Testimonials />
      <CallToActions />
      <Footer />
    </div>
  );
};

export default Home;
