import { motion } from "framer-motion";
import { BookAIcon, CheckCircle, Eye } from "lucide-react";
import Structure from "./Structure";
import { Link } from "react-router-dom";

const objectives = [
  "समाज में भाईचारा बढ़ाना",
  "शिक्षा का प्रचार करना",
  "सामाजिक कुरीतियों को खत्म करना",
  "युवा वर्ग को आगे बढ़ाना",
];

const About = () => {



  return (
    <div>
      <section className="hero-gradient text-primary-foreground section-padding text-center">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">हमारे बारे में</h1>
          <p className="text-primary-foreground/80 text-lg">About Us</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-foreground/80 leading-relaxed mb-12 text-center"
          >
            चढ़ार समाज राष्ट्रीय संगठन एक सामाजिक संस्था है जो समाज में एकता और विकास के लिए कार्य कर रही है।
          </motion.p>

          <h2 className="text-2xl font-bold text-primary mb-6 text-center">हमारे उद्देश्य</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
            {objectives.map((obj, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3 bg-card border border-border rounded-xl p-5 card-hover"
              >
                <CheckCircle className="text-secondary shrink-0 mt-1" size={24} />
                <p className="text-foreground text-lg">{obj}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary-light rounded-2xl p-8 md:p-12 text-center"
          >
            <Eye className="mx-auto mb-4 text-primary" size={48} />
            <h2 className="text-2xl font-bold text-primary mb-3">हमारा विज़न</h2>
            <p className="text-foreground/80 text-lg">
              "एक शिक्षित, संगठित और मजबूत चढ़ार समाज बनाना"
            </p>
          </motion.div>
        </div>
      </section>
      <section className="section-padding bg-gray-100 ">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center  ">
          महत्वपूर्ण जानकारी
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-12 gap-y-16  ">
          <div className="container  mx-auto max-w-xl shadow-md rounded-2xl bg-gradient-to-tr from-secondary to-secondary/50  ">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 md:p-12 text-center"
            >

              <BookAIcon className="mx-auto mb-4 text-primary" size={48} />
              <h2 className="text-3xl font-bold text-primary mb-3">हमारा संविधान</h2>
              <p className="text-foreground/80 text-lg">
                "एक शिक्षित, संगठित और मजबूत चढ़ार समाज बनाना"
              </p>
              <Link to="/constitution">
                <button  className="bg-secondary mt-4 text-white py-2 px-4 rounded-lg hover:bg-secondary/90 text-center transition-colors">
                  संविधान पढ़ें
                </button>
              </Link>
            </motion.div>
          </div>
          <div className="container mx-auto max-w-xl">
  
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.03 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true }}
    className="relative p-[2px] rounded-2xl bg-gradient-to-tr from-secondary via-primary to-secondary shadow-xl"
  >
    
    {/* INNER CARD */}
    <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">

      {/* GLOW EFFECT */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/20 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 blur-3xl rounded-full"></div>

      {/* ICON */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <BookAIcon className="mx-auto mb-4 text-primary" size={50} />
      </motion.div>

      {/* TITLE */}
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
        हमारा संविधान
      </h2>

      {/* TEXT */}
      <p className="text-foreground/80 text-lg leading-relaxed">
        "एक शिक्षित, संगठित और मजबूत चढ़ार समाज बनाना"
      </p>

      {/* BUTTON */}
      <Link to="/constitution">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 relative overflow-hidden bg-secondary text-white py-3 px-6 rounded-xl font-semibold shadow-md"
        >
          <span className="relative z-10">संविधान पढ़ें</span>

          {/* Shine Effect */}
          <span className="absolute inset-0 bg-white/20 translate-x-[-100%] hover:translate-x-[100%] transition duration-700"></span>
        </motion.button>
      </Link>

    </div>
  </motion.div>

</div>
        
        </div>

      </section>


    </div>
  );
}


export default About;
