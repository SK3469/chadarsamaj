import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import presidentImg from "@/assets/president-placeholder.jpg";

const President = () => (
  <div>
    <section className="hero-gradient text-primary-foreground section-padding text-center">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">राष्ट्रीय अध्यक्ष</h1>
        <p className="text-primary-foreground/80 text-lg">National President</p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg"
        >
          <div className="md:flex">
            <div className="md:w-1/3">
              <img
                src={presidentImg}
                alt="मुकेश आटिया"
                className="w-full h-64 md:h-full object-cover"
                loading="lazy"
                width={512}
                height={640}
              />
            </div>
            <div className="p-8 md:w-2/3 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-primary mb-1">मुकेश आटिया</h2>
              <p className="text-secondary font-semibold mb-4">दिल्ली</p>
              <p className="text-foreground/80 leading-relaxed mb-6">
                जबलपुर में आयोजित चढ़ार समाज के राष्ट्रीय अधिवेशन में सर्वसम्मति से मुकेश आटिया जी को राष्ट्रीय अध्यक्ष नियुक्त किया गया।
              </p>
              <div className="bg-primary-light rounded-xl p-6 border-l-4 border-secondary">
                <Quote className="text-secondary mb-2" size={28} />
                <p className="text-foreground italic text-lg">
                  "हमारा लक्ष्य समाज को शिक्षा, संगठन और संस्कार के माध्यम से आगे बढ़ाना है।"
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  </div>
);

export default President;
