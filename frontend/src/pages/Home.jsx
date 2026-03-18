import React,{useState,useEffect} from 'react'
import Footer from '../components/home/Footer'
import Navbar from '../components/home/Navbar'
import NewsSection from '../components/home/News'
import RecruitersSlider from '../components/home/Recruiter'
import Hero from '../components/home/Hero'
import Dept from '../components/home/Dept'
import Events from '../components/home/Events'
import WhyChooseUs from '../components/home/Why'
import {motion} from 'framer-motion';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  function Loader() {
  const words = ["Welcome", "To", "SIET"];
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ delay: 3, duration: 1, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full h-full bg-black z-[9999] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Grain Effect */}
      <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none">
        <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]" />
      </div>

      {/* Words */}
      <div className="text-center space-y-4">
        {["Welcome", "to", "SIET Nilokheri"].map((word, i) => (
          <div key={i} className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{
                delay: i * 0.4,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="text-white text-5xl md:text-7xl font-bold tracking-tight"
            >
              {word}
            </motion.h1>
          </div>
        ))}
      </div>

      {/* Percentage */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-10 text-white text-xl font-semibold"
      >
        {count}%
      </motion.div>
    </motion.div>
  );
}
  return (
    <>
    {loading && <Loader />}
    
    
    <Navbar/>
    <Hero/>
    <NewsSection/>
    <Events/>
    <Dept/>
    <RecruitersSlider/>
    <WhyChooseUs/>
    <Footer/>
    </>
  )
}

export default Home