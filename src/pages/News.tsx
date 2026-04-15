import { motion } from "framer-motion";
import { Calendar, Megaphone, CheckCircle } from "lucide-react";

const News = () => (
  <div>
    <section className="hero-gradient text-primary-foreground section-padding text-center">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">समाचार / कार्यक्रम</h1>
        <p className="text-primary-foreground/80 text-lg">News & Events</p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto max-w-4xl space-y-8">
        {/* Event 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl p-8 card-hover"
        >
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="text-secondary" size={28} />
            <h2 className="text-2xl font-bold text-primary">राष्ट्रीय अधिवेशन – जबलपुर</h2>
          </div>
          <p className="text-foreground/80 leading-relaxed text-lg">
            जबलपुर में आयोजित राष्ट्रीय अधिवेशन में देशभर से समाज के लोग शामिल हुए। इस कार्यक्रम में मुकेश आटिया जी को राष्ट्रीय अध्यक्ष बनाया गया।
          </p>
        </motion.div>

        {/* Event 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-card border border-border rounded-2xl p-8 card-hover"
        >
          <div className="flex items-center gap-3 mb-4">
            <Megaphone className="text-secondary" size={28} />
            <h2 className="text-2xl font-bold text-primary">समाज सुधार अभियान</h2>
          </div>
          <ul className="space-y-3">
            {[
              "दहेज प्रथा के खिलाफ जागरूकता",
              "बाल विवाह रोकने का अभियान",
              "शिक्षा को बढ़ावा",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-foreground/80 text-lg">
                <CheckCircle className="text-secondary shrink-0" size={20} />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  </div>
);

export default News;
