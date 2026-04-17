import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, BookOpen, Heart, Award } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const highlights = [
  { icon: Award, label: "राष्ट्रीय अध्यक्ष", value: "मुकेश आठया (दिल्ली)" },
  { icon: Users, label: "उद्देश्य", value: "समाज को संगठित करना" },
  { icon: BookOpen, label: "फोकस", value: "शिक्षा, युवा, संस्कार" },
];

const Index = () => (
  <div>
    {/* Hero */}
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <img src={heroBanner} alt="चढ़ार समाज अधिवेशन" className="absolute inset-0 w-full h-full object-cover" width={1920} height={800} />
      <div className="absolute inset-0 hero-gradient opacity-80" />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4 leading-tight"
        >
          चढ़ार समाज राष्ट्रीय संगठन
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl md:text-2xl text-secondary font-semibold mb-6 tracking-wide"
        >
          एकता • शिक्षा • संस्कार
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-primary-foreground/80 text-base md:text-lg mb-8 max-w-2xl mx-auto"
        >
          चढ़ार समाज राष्ट्रीय संगठन में आपका स्वागत है। यह संगठन समाज के विकास, एकता और सामाजिक उत्थान के लिए कार्यरत है।
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
        <div className="space-x-5">
            <Link
            to="/contact"
            className="inline-block bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:bg-secondary-warm transition-colors shadow-lg"
          >
            Join Us / जुड़ें
          </Link>
          <Link
            to="/donation"
            className="inline-block bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:bg-secondary-warm transition-colors shadow-lg"
          >
            Donate / दान करे
          </Link>
        </div>
        </motion.div>
      </div>
    </section>
    {/*Annousment*/}
  <section>
    Annousment
  </section>

    {/* Highlights */}
    <section className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-primary-light border border-border rounded-xl p-6 text-center card-hover"
            >
              <h.icon className="mx-auto mb-3 text-primary" size={40} />
              <h3 className="text-lg font-bold text-primary mb-1">{h.label}</h3>
              <p className="text-foreground/80">{h.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Quick About */}
    <section className="section-padding">
      <div className="container mx-auto text-center max-w-3xl">
        <Heart className="mx-auto mb-4 text-secondary" size={48} />
        <h2 className="text-3xl font-bold text-primary mb-4">हमारा संकल्प</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          एक शिक्षित, संगठित और मजबूत चढ़ार समाज बनाना — यही हमारा सपना है। आइए, मिलकर इस सपने को साकार करें।
        </p>
        <Link
          to="/about"
          className="inline-block mt-6 border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          और जानें →
        </Link>
      </div>
    </section>
  </div>
);

export default Index;
