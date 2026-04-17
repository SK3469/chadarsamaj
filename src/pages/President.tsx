import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import presidentImg from "@/assets/president-placeholder.jpg";
import { cn } from "@/lib/utils";



const presidentData = [
  {
    name: "मुकेश आटिया",
    location: "दिल्ली",
    description: "जबलपुर में आयोजित चढ़ार समाज के राष्ट्रीय अधिवेशन में सर्वसम्मति से नियुक्त।",
    quote: "हमारा लक्ष्य समाज को शिक्षा, संगठन और संस्कार के माध्यम से आगे बढ़ाना है।",
     img: presidentImg,
  },
  {
    name: "sunil lohar",
    location: "दिल्ली",
    description: "जबलपुर में आयोजित चढ़ार समाज के राष्ट्रीय अधिवेशन में सर्वसम्मति से नियुक्त।",
    quote: "हमारा लक्ष्य समाज को शिक्षा, संगठन और संस्कार के माध्यम से आगे बढ़ाना है।",
     img: presidentImg,
  },
];
const parData = [
  {
    name: "राकेश शर्मा",
    location: "दिल्ली",
    description: "समाज सेवा में सक्रिय योगदान।",
    quote: "हमारा लक्ष्य समाज को शिक्षा, संगठन और संस्कार के माध्यम से आगे बढ़ाना है।",
    img: presidentImg,
  },
  {
    name: "सुमित वर्मा",
    location: "दिल्ली",
    description: "समाज सेवा में सक्रिय योगदान।",
    quote: "हमारा लक्ष्य समाज को शिक्षा, संगठन और संस्कार के माध्यम से आगे बढ़ाना है।",
    img: presidentImg,
  },
  {
    name: "अजय सिंह",
    location: "दिल्ली",
    description: "समाज सेवा में सक्रिय योगदान।",
    quote: "हमारा लक्ष्य समाज को शिक्षा, संगठन और संस्कार के माध्यम से आगे बढ़ाना है।",
    img: presidentImg,
  },
  {
    name: "अजय सिंह",
    location: "दिल्ली",
    description: "समाज सेवा में सक्रिय योगदान।",
    quote: "हमारा लक्ष्य समाज को शिक्षा, संगठन और संस्कार के माध्यम से आगे बढ़ाना है।",
    img: presidentImg,
  },
  {
    name: "अजय सिंह",
    location: "दिल्ली",
    description: "समाज सेवा में सक्रिय योगदान।",
    quote: "हमारा लक्ष्य समाज को शिक्षा, संगठन और संस्कार के माध्यम से आगे बढ़ाना है।",
    img: presidentImg,
  },
  {
    name: "अजय सिंह",
    location: "दिल्ली",
    description: "समाज सेवा में सक्रिय योगदान।",
    quote: "हमारा लक्ष्य समाज को शिक्षा, संगठन और संस्कार के माध्यम से आगे बढ़ाना है।",
    img: presidentImg,
  },
  {
    name: "अजय सिंह",
    location: "दिल्ली",
    description: "समाज सेवा में सक्रिय योगदान।",
    quote: "हमारा लक्ष्य समाज को शिक्षा, संगठन और संस्कार के माध्यम से आगे बढ़ाना है।",
    img: presidentImg,
  },
  {
    name: "अजय सिंह",
    location: "दिल्ली",
    description: "समाज सेवा में सक्रिय योगदान।",
    quote: "हमारा लक्ष्य समाज को शिक्षा, संगठन और संस्कार के माध्यम से आगे बढ़ाना है।",
    img: presidentImg,
  },
  {
    name: "अजय सिंह",
    location: "दिल्ली",
    description: "समाज सेवा में सक्रिय योगदान।",
    quote: "हमारा लक्ष्य समाज को शिक्षा, संगठन और संस्कार के माध्यम से आगे बढ़ाना है।",
    img: presidentImg,
  },
];
const karyakartaData = [
  {
    name: "राकेश शर्मा",
    location: "दिल्ली",
    description: "समाज सेवा में सक्रिय योगदान।",
    quote: "हमारा लक्ष्य समाज को शिक्षा, संगठन और संस्कार के माध्यम से आगे बढ़ाना है।",
    img: presidentImg,
  },
  {
    name: "सुमित वर्मा",
    location: "दिल्ली",
    description: "समाज सेवा में सक्रिय योगदान।",
    quote: "हमारा लक्ष्य समाज को शिक्षा, संगठन और संस्कार के माध्यम से आगे बढ़ाना है।",
    img: presidentImg,
  },
  {
    name: "अजय सिंह",
    location: "दिल्ली",
    description: "समाज सेवा में सक्रिय योगदान।",
    quote: "हमारा लक्ष्य समाज को शिक्षा, संगठन और संस्कार के माध्यम से आगे बढ़ाना है।",
    img: presidentImg,
  },
  {
    name: "अजय सिंह",
    location: "दिल्ली",
    description: "समाज सेवा में सक्रिय योगदान।",
    quote: "हमारा लक्ष्य समाज को शिक्षा, संगठन और संस्कार के माध्यम से आगे बढ़ाना है।",
    img: presidentImg,
  },
  {
    name: "अजय सिंह",
    location: "दिल्ली",
    description: "समाज सेवा में सक्रिय योगदान।",
    quote: "हमारा लक्ष्य समाज को शिक्षा, संगठन और संस्कार के माध्यम से आगे बढ़ाना है।",
    img: presidentImg,
  },
  {
    name: "अजय सिंह",
    location: "दिल्ली",
    description: "समाज सेवा में सक्रिय योगदान।",
    quote: "हमारा लक्ष्य समाज को शिक्षा, संगठन और संस्कार के माध्यम से आगे बढ़ाना है।",
    img: presidentImg,
  },
  {
    name: "अजय सिंह",
    location: "दिल्ली",
    description: "समाज सेवा में सक्रिय योगदान।",
    quote: "हमारा लक्ष्य समाज को शिक्षा, संगठन और संस्कार के माध्यम से आगे बढ़ाना है।",
    img: presidentImg,
  },
  {
    name: "अजय सिंह",
    location: "दिल्ली",
    description: "समाज सेवा में सक्रिय योगदान।",
    quote: "हमारा लक्ष्य समाज को शिक्षा, संगठन और संस्कार के माध्यम से आगे बढ़ाना है।",
    img: presidentImg,
  },
];
     
     
const President = () => (
  <div>
    <section className="hero-gradient text-primary-foreground section-padding text-center">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">राष्ट्रीय अध्यक्ष</h1>
        <p className="text-primary-foreground/80 text-lg">National President</p>
      </div>
    </section>
{/* Presedantal section */}
    <section className="section-padding">
  <div className="container mx-auto max-w-full">
    
    {/* 3x3 GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      
      {presidentData.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg"
        >
          
          {/* CARD INNER GRID */}
          <div className="grid md:grid-cols-3">
            
            {/* IMAGE */}
            <div>
              <img
                src={item.img}   // ✅ use direct data
                alt={item.name}
                className="w-full h-64 md:h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6 md:col-span-2 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-primary mb-1">
                {item.name}
              </h2>

              <p className="text-secondary font-semibold mb-3">
                {item.location || "दिल्ली"}
              </p>

              {/* <p className="text-foreground/80 leading-relaxed mb-4 text-sm">
                {item.desc || "समाज सेवा में सक्रिय योगदान।"}
              </p> */}

              <div className="bg-primary-light rounded-xl p-4 border-l-4 border-secondary">
                <Quote className="text-secondary mb-2" size={22} />
                <p className="text-foreground italic text-sm">
                  "हमारा लक्ष्य समाज को शिक्षा, संगठन और संस्कार के माध्यम से आगे बढ़ाना है।"
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      ))}

    </div>
  </div>
</section>
  
      {/* parmukh adhikarion ki jankari */}
<section className="section-padding">
  <div className="container mx-auto max-w-full">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      {parData.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg"
        >
          
          {/* CARD INNER GRID */}
          <div className="grid md:grid-cols-3">
            
            {/* IMAGE */}
            <div>
              <img
                src={item.img}   // ✅ use direct data
                alt={item.name}
                className="w-full h-64 md:h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6 md:col-span-2 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-primary mb-1">
                {item.name}
              </h2>

              <p className="text-secondary font-semibold mb-3">
                {item.location || "दिल्ली"}
              </p>

              {/* <p className="text-foreground/80 leading-relaxed mb-4 text-sm">
                {item.desc || "समाज सेवा में सक्रिय योगदान।"}
              </p> */}

              <div className="bg-primary-light rounded-xl p-4 border-l-4 border-secondary">
                <Quote className="text-secondary mb-2" size={22} />
                <p className="text-foreground italic text-sm">
                  "हमारा लक्ष्य समाज को शिक्षा, संगठन और संस्कार के माध्यम से आगे बढ़ाना है।"
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      ))}

    </div>
  </div>
</section>

{/* anaya karkaron ki jankari */}
<section className="section-padding">
  <div className="container mx-auto max-w-full">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      {karyakartaData.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg"
        >
          
          {/* CARD INNER GRID */}
          <div className="grid md:grid-cols-3">
            
            {/* IMAGE */}
            <div>
              <img
                src={item.img}   // ✅ use direct data
                alt={item.name}
                className="w-full h-64 md:h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6 md:col-span-2 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-primary mb-1">
                {item.name}
              </h2>

              <p className="text-secondary font-semibold mb-3">
                {item.location || "दिल्ली"}
              </p>

              {/* <p className="text-foreground/80 leading-relaxed mb-4 text-sm">
                {item.desc || "समाज सेवा में सक्रिय योगदान।"}
              </p> */}

              <div className="bg-primary-light rounded-xl p-4 border-l-4 border-secondary">
                <Quote className="text-secondary mb-2" size={22} />
                <p className="text-foreground italic text-sm">
                  "हमारा लक्ष्य समाज को शिक्षा, संगठन और संस्कार के माध्यम से आगे बढ़ाना है।"
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      ))}

    </div>
  </div>
</section>
  </div>
);

export default President;
