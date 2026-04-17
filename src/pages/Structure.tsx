import React from "react";
import { motion } from "framer-motion";
import { Crown, Users, Briefcase, Globe } from "lucide-react";

const structureData = [
  {
    title: "शीर्ष नेतृत्व (Top Leadership)",
    icon: Crown,
    points: [
      "राष्ट्रीय अध्यक्ष (President) – संगठन का सर्वोच्च पदाधिकारी, नीतिगत निर्णय लेना",
      "राष्ट्रीय संरक्षक / मार्गदर्शक (Patron/Advisor) – संगठन को दिशा, मार्गदर्शन एवं अनुभव प्रदान करना",
      "राष्ट्रीय उपाध्यक्ष (Vice President) – अध्यक्ष के कार्यों में सहयोग एवं अनुपस्थिति में कार्यभार संभालना",
    ],
  },
  {
    title: "कार्यकारी टीम (Executive Team)",
    icon: Users,
    points: [
      "राष्ट्रीय महासचिव / सचिव (General Secretary) – संगठन के दैनिक कार्यों का संचालन एवं समन्वय",
      "राष्ट्रीय संगठन मंत्री – संगठन का विस्तार, नई इकाइयों का गठन, कार्यकर्ताओं में समन्वय",
      "राष्ट्रीय संयुक्त सचिव (Joint Secretary) – सचिव के कार्यों में सहयोग",
      "राष्ट्रीय कोषाध्यक्ष (Treasurer) – संगठन के वित्तीय कार्यों एवं लेखा-जोखा का प्रबंधन",
    ],
  },
  {
    title: "विशेष पद (Key Functional Positions)",
    icon: Briefcase,
    points: [
      "राष्ट्रीय मीडिया प्रभारी (Media Incharge) - संगठन की खबरों, कार्यक्रमों और गतिविधियों का प्रचार-प्रसार",
      "सोशल मीडिया (Facebook, WhatsApp, Website आदि) का संचालन",
      "प्रेस विज्ञप्ति जारी करना",
      "राष्ट्रीय विधिक सलाहकार (Legal Advisor) - संगठन के कानूनी मामलों में मार्गदर्शन",
      "रजिस्ट्रेशन और कानूनी प्रक्रियाओं में सहायता",
      "विवादों के समाधान में सहयोग",
      "राष्ट्रीय कार्यकारिणी (National Executive Committee)",
      "सभी राष्ट्रीय पदाधिकारी",
      "राज्य प्रतिनिधि",
      "विशेष आमंत्रित सदस्य",
    ],
  },
  {
    title: "राज्य स्तर (State Level)",
    icon: Globe,
    points: [
      "प्रदेश अध्यक्ष- राज्य स्तर पर संगठन का नेतृत्व करना",
      "नीतियों को लागू करना और दिशा तय करना",
      "महत्वपूर्ण बैठकों की अध्यक्षता करना",
      "प्रदेश उपाध्यक्ष- अध्यक्ष के कार्यों में सहयोग",
      "अध्यक्ष की अनुपस्थिति में कार्य संभालना",
      "प्रदेश महासचिव- संगठन के दैनिक कार्यों का संचालन",
      "बैठकों का आयोजन एवं निर्णयों का पालन सुनिश्चित करना",
      "प्रदेश सचिव- पत्राचार एवं सूचना का आदान-प्रदान",
      "सभी इकाइयों के बीच समन्वय",
      "प्रदेश कोषाध्यक्ष- आय-व्यय का लेखा-जोखा रखना",
      "वित्तीय पारदर्शिता बनाए रखना",
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const Structure = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-10 px-4">
      
      {/* TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-12 text-gray-800"
      >
        संगठन का ढांचा
      </motion.h1>

      {/* GRID */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
      >
        {structureData.map((section, index) => {
          const Icon = section.icon;

          return (
            <motion.div
              key={index}
              variants={card}
              className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition"
            >
              {/* HEADER */}
              <div className="flex items-center gap-3 mb-5">
                <Icon className="text-blue-600" size={30} />
                <h2 className="text-xl font-semibold text-gray-800">
                  {section.title}
                </h2>
              </div>

              {/* POINTS */}
              <div className="space-y-3">
                {section.points.map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-gray-50 p-3 rounded-lg text-gray-700 text-sm shadow-sm"
                  >
                    {point}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Structure;