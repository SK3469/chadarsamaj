import { motion } from "framer-motion";
import { Calendar, Megaphone, CheckCircle } from "lucide-react";
import {
  Sparkles,
  Users,
  ShieldCheck,
  Brain,
  Target,
  Lightbulb,
} from "lucide-react";

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
       <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card border border-border rounded-2xl p-8 card-hover"
    >
      <div className="flex items-center gap-3 mb-4">
        <Calendar className="text-secondary" size={28} />
        <h2 className="text-2xl font-bold text-primary">
          चड़ार समाज की विचारधारा
        </h2>
      </div>

      <p className="text-foreground/80 leading-relaxed text-lg space-y-3">
        चड़ार समाज की पहचान उसकी एकता, जागरूकता और स्वाभिमान में बसती है।
        हमारा उद्देश्य केवल समाज को जोड़ना नहीं, बल्कि उसे सही दिशा देना भी है।
        <br /><br />

        हम मानते हैं कि —
        <br />
        👉 शिक्षा ही सबसे बड़ी ताकत है, <br />
        👉 एकता ही सबसे बड़ा आधार है, <br />
        👉 और जागरूकता ही सबसे बड़ी सुरक्षा है।
        <br /><br />

        समाज का हर व्यक्ति गुमराह होने से बचे, इसके लिए सही जानकारी,
        सही मार्गदर्शन और सशक्त नेतृत्व आवश्यक है।
        हम अफवाहों, भेदभाव और नकारात्मक सोच से दूर रहकर
        एक सकारात्मक और प्रगतिशील समाज का निर्माण करना चाहते हैं।
        <br /><br />

        हमारी विचारधारा हमें सिखाती है कि —
        <br />
        ✔ अपनी संस्कृति और परंपराओं पर गर्व करें, <br />
        ✔ युवाओं को शिक्षित और जागरूक बनाएं, <br />
        ✔ और समाज के हर व्यक्ति को सम्मान और अवसर दिलाएं।
        <br /><br />

        🔥 <strong>
          “एकता में शक्ति, शिक्षा में प्रगति और जागरूकता में सुरक्षा —
          यही चड़ार समाज की असली पहचान है।”
        </strong>
      </p>
    </motion.div>
     <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-lg card-hover"
    >
      {/* Heading */}
      <div className="flex items-center gap-3 mb-5">
        <Sparkles className="text-secondary" size={30} />
        <h2 className="text-2xl md:text-3xl font-bold text-primary">
          चड़ार समाज – एक नई सोच, एक नई पहचान 🔥
        </h2>
      </div>

      {/* Intro */}
      <p className="text-foreground/80 text-base md:text-lg leading-relaxed mb-4">
        चड़ार समाज सिर्फ एक नाम नहीं, <br />
        👉 एकता, सम्मान और जागरूकता की पहचान है।
      </p>

      {/* Goal */}
      <div className="flex items-start gap-3 mb-4">
        <Target className="text-secondary mt-1" />
        <p className="text-foreground/80">
          हमारा लक्ष्य है ऐसा समाज बनाना—
          जहाँ हर व्यक्ति शिक्षित हो, संगठित हो और सजग हो।
          जहाँ युवा गुमराह नहीं, बल्कि सही दिशा में आगे बढ़ें।
        </p>
      </div>

      {/* Beliefs */}
      <div className="space-y-3 mb-5">
        <div className="flex items-center gap-3">
          <Brain className="text-secondary" />
          <span>ज्ञान हमारी ताकत है</span>
        </div>
        <div className="flex items-center gap-3">
          <Users className="text-secondary" />
          <span>एकता हमारी पहचान है</span>
        </div>
        <div className="flex items-center gap-3">
          <ShieldCheck className="text-secondary" />
          <span>जागरूकता हमारी सुरक्षा है</span>
        </div>
      </div>

      {/* Thought */}
      <div className="flex items-start gap-3 mb-5">
        <Lightbulb className="text-secondary mt-1" />
        <p className="text-foreground/80">
          हम अफवाहों, भ्रम और नकारात्मक सोच से दूर रहकर
          👉 सच्चाई, आत्मसम्मान और प्रगति का रास्ता अपनाते हैं।
        </p>
      </div>

      {/* Responsibility */}
      <div className="bg-muted/40 rounded-xl p-4 mb-5 space-y-2">
        <p>✔ समाज को जोड़ना, तोड़ना नहीं</p>
        <p>✔ युवाओं को सही मार्ग दिखाना</p>
        <p>✔ हर व्यक्ति को सम्मान दिलाना</p>
      </div>

      {/* Slogan */}
      <div className="border-t pt-4 text-center">
        <p className="text-lg md:text-xl font-semibold text-primary">
          🚩 “ना गुमराह होंगे, ना किसी को होने देंगे —
          जागरूक, संगठित और सशक्त चड़ार समाज बनाएंगे!” 💯🔥
        </p>
      </div>
    </motion.div>
      </div>
    </section>
  </div>
);

export default News;
