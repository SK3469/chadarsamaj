import React, { useState } from 'react'
import { motion } from "framer-motion";
import { CheckCircle, Eye } from "lucide-react";

const chapter1 = [
  "नाम: अखिल भारतीय चड़ार समाज संगठन",
  "क्षेत्र: सम्पूर्ण भारत",
  "मुख्य कार्यालय: (आवश्यकता अनुसार राज्य एवं जिला स्तर पर शाखाएं स्थापित की जाएंगी।)",
];
// const constitution = [
//   {
//     title: "📜 प्रस्तावना (Preamble)",
//     content:
//       "हम, अखिल भारतीय चड़ार समाज के सदस्य, समाज की एकता, शिक्षा, सम्मान, सामाजिक सुधार एवं सर्वांगीण विकास के उद्देश्य से इस संगठन की स्थापना करते हैं तथा इस संविधान को स्वीकार करते हैं।",
//   },
//   {
//     title: "🏛️ अध्याय 1: संगठन का नाम, क्षेत्र एवं कार्यालय",
//     content:
//       "नाम: अखिल भारतीय चड़ार समाज संगठन\nक्षेत्र: सम्पूर्ण भारत\nमुख्य कार्यालय: (यहां स्थान निर्धारित करें)\nआवश्यकता अनुसार राज्य एवं जिला स्तर पर शाखाएं स्थापित की जाएंगी।",
//   },
//   {
//     title: "🎯 अध्याय 2: उद्देश्य (Objectives)",
//     content:
//       "समाज में एकता और संगठन को बढ़ावा देना\nशिक्षा का प्रचार-प्रसार करना\nसामाजिक कुरीतियों (जैसे मृत्यु भोज आदि) का उन्मूलन\nयुवाओं को रोजगार एवं नेतृत्व के लिए प्रेरित करना\nमहिलाओं को सशक्त और आत्मनिर्भर बनाना\nसमाज के इतिहास और गौरव को संरक्षित करना",
//   },
//   {
//     title: "👥 अध्याय 3: सदस्यता (Membership)",
//     content:
//       "1. सदस्यता के प्रकार:\nसामान्य सदस्य\nसक्रिय सदस्य\nआजीवन सदस्य\n\n2. सदस्यता की शर्तें:\nचड़ार समाज का कोई भी व्यक्ति सदस्य बन सकता है\nसंगठन के नियमों का पालन अनिवार्य होगा\n\n3. सदस्यता समाप्ति:\nनियमों के उल्लंघन पर सदस्यता समाप्त की जा सकती है",
//   },
//   {
//     title: "🏗️ अध्याय 4: संगठन का ढांचा (Structure)",
//     content:
//       "🔹 राष्ट्रीय स्तर\nराष्ट्रीय अध्यक्ष\nराष्ट्रीय महासचिव\nराष्ट्रीय उपाध्यक्ष\nराष्ट्रीय सचिव\nराष्ट्रीय कोषाध्यक्ष\n\n🔹 प्रदेश स्तर\nप्रदेश अध्यक्ष\nप्रदेश महासचिव\nप्रदेश सचिव\nप्रदेश कोषाध्यक्ष\n\n🔹 जिला स्तर\nजिला अध्यक्ष\nजिला सचिव\nजिला कोषाध्यक्ष\n\n🔹 तहसील / ब्लॉक स्तर\nतहसील अध्यक्ष\nतहसील सचिव\n\n🔹 ग्राम स्तर\nग्राम अध्यक्ष\nसदस्य",
//   },
//   {
//     title: "💪 अध्याय 5: युवा संगठन (Youth Wing)",
//     content:
//       "संरचना:\nराष्ट्रीय युवा अध्यक्ष से लेकर ग्राम स्तर तक समान पद\n\nकार्य:\nयुवाओं को संगठित करना\nखेल, शिक्षा एवं रोजगार गतिविधियों को बढ़ावा देना\nरैली, अभियान एवं जागरूकता कार्यक्रम आयोजित करना",
//   },
//   {
//     title: "👩 अध्याय 6: महिला संगठन (Women Wing)",
//     content:
//       "संरचना:\nराष्ट्रीय महिला अध्यक्ष से ग्राम स्तर तक\n\nकार्य:\nमहिलाओं को सशक्त बनाना\nशिक्षा एवं स्वास्थ्य के प्रति जागरूकता\nसामाजिक कुरीतियों के खिलाफ अभियान",
//   },
//   {
//     title: "🧠 अध्याय 7: सलाहकार मंडल (Advisory Board)",
//     content:
//       "वरिष्ठ एवं अनुभवी सदस्य शामिल होंगे\nसंगठन को मार्गदर्शन देंगे\nनीतिगत निर्णयों में सहयोग करेंगे",
//   },
//   {
//     title: "🗳️ अध्याय 8: चुनाव प्रक्रिया (Election Process)",
//     content:
//       "सभी पदाधिकारी निर्धारित अवधि (जैसे 3 वर्ष) के लिए चुने जाएंगे\nचुनाव लोकतांत्रिक प्रक्रिया से होंगे\nआवश्यकता पड़ने पर मनोनयन भी किया जा सकता है",
//   },
//   {
//     title: "💰 अध्याय 9: वित्त (Finance)",
//     content:
//       "आय के स्रोत: सदस्यता शुल्क, दान, सहयोग राशि\nकोषाध्यक्ष द्वारा लेखा-जोखा रखा जाएगा\nवार्षिक लेखा-जोखा प्रस्तुत करना अनिवार्य होगा",
//   },
//   {
//     title: "⚖️ अध्याय 10: अनुशासन एवं नियम (Discipline & Rules)",
//     content:
//       "सभी सदस्यों को संगठन के नियमों का पालन करना होगा\nअनुशासनहीनता पर चेतावनी / निष्कासन किया जा सकता है\nसंगठन की छवि को नुकसान पहुंचाने पर कार्रवाई होगी",
//   },
//   {
//     title: "🔄 अध्याय 11: संशोधन (Amendment)",
//     content:
//       "संविधान में संशोधन राष्ट्रीय कार्यकारिणी की सहमति से किया जा सकता है\nकम से कम 2/3 बहुमत आवश्यक होगा",
//   },
//   {
//     title: "🚫 अध्याय 12: निष्कासन (Termination)",
//     content:
//       "नियम उल्लंघन, अनुशासनहीनता या समाज विरोधी गतिविधियों पर सदस्य/पदाधिकारी को हटाया जा सकता है",
//   },
// ];

const Constitution = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <div>
           <section className="hero-gradient text-primary-foreground section-padding text-center">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">हमारे बारे में</h1>
          <p className="text-primary-foreground/80 text-lg">About Us</p>
        </div>
      </section>
        <section className="section-padding bg-muted/30">
        <div className="container mx-auto max-w-4xl">

          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            📜 संविधान
          </h2>

          <div className="space-y-4">

            {/* Chapter 1 */}
            <motion.div
              className="bg-card border border-border rounded-xl overflow-hidden cursor-pointer"
              onClick={() => setActiveIndex(activeIndex === 1 ? null : 1)}
            >
              <div className="p-5 flex justify-between items-center gap-3">

                <h2 className="font-semibold text-primary text-base md:text-lg leading-snug w-2/3 ">

                  <span className="font-bold text-secondary block md:inline ">
                    🏛️ अध्याय 1:
                  </span>

                  <span className="block md:inline ">
                    संगठन का नाम, क्षेत्र एवं कार्यालय
                  </span>

                </h2>

                <span className="text-lg shrink-0">
                  {activeIndex === 2 ? "−" : "+"}
                </span>

              </div>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={activeIndex === 1 ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <p className="px-5 pb-5 whitespace-pre-line">
                  हम, अखिल भारतीय चड़ार समाज के सदस्य, समाज की एकता, शिक्षा, सम्मान, सामाजिक सुधार एवं सर्वांगीण विकास के उद्देश्य से इस संगठन की स्थापना करते हैं तथा इस संविधान को स्वीकार करते हैं।
                </p>
              </motion.div>
            </motion.div>

            {/* Chapter 2 */}
            <motion.div
              className="bg-card border border-border rounded-xl overflow-hidden cursor-pointer"
              onClick={() => setActiveIndex(activeIndex === 2 ? null : 2)}
            >
              <div className="p-5 flex justify-between items-center gap-3">

                <h2 className="font-semibold text-primary text-base md:text-lg leading-snug w-2/3 ">

                  <span className="font-bold text-secondary block md:inline ">
                    🏛️ अध्याय 1:
                  </span>

                  <span className="block md:inline ">
                    संगठन का नाम, क्षेत्र एवं कार्यालय
                  </span>

                </h2>

                <span className="text-lg shrink-0">
                  {activeIndex === 2 ? "−" : "+"}
                </span>

              </div>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={activeIndex === 2 ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16 p-4">
                  {chapter1.map((obj, i) => (
                    <motion.div
                      key={i}

                      viewport={{ once: true }}

                      className="flex items-start gap-3 bg-card border border-border rounded-xl p-5 "
                    >
                      <CheckCircle className="text-secondary shrink-0 mt-1" size={24} />
                      <p className="text-foreground text-lg">{obj}</p>
                    </motion.div>
                  ))}
                </div>

              </motion.div>
            </motion.div>

            {/* Chapter 3 */}
            {/* <motion.div
              className="bg-card border border-border rounded-xl overflow-hidden cursor-pointer"
              onClick={() => setActiveIndex(activeIndex === 3 ? null : 3)}
            >
              <div className="p-5 flex justify-between items-center">
                <h3 className="font-semibold text-lg">🎯 अध्याय 2: उद्देश्य (Objectives)</h3>
                <span>{activeIndex === 3 ? "−" : "+"}</span>
              </div>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={activeIndex === 3 ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
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
              </motion.div>
            </motion.div> */}
            {/* Chapter 4 */}
            {/* <motion.div
              className="bg-card border border-border rounded-xl overflow-hidden cursor-pointer"
              onClick={() => setActiveIndex(activeIndex === 3 ? null : 3)}
            >
              <div className="p-5 flex justify-between items-center">
                <h3 className="font-semibold text-lg">🎯 अध्याय 2: उद्देश्य (Objectives)</h3>
                <span>{activeIndex === 3 ? "−" : "+"}</span>
              </div>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={activeIndex === 3 ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
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
              </motion.div>
            </motion.div> */}
            {/* Chapter 5 */}
            {/* <motion.div
              className="bg-card border border-border rounded-xl overflow-hidden cursor-pointer"
              onClick={() => setActiveIndex(activeIndex === 3 ? null : 3)}
            >
              <div className="p-5 flex justify-between items-center">
                <h3 className="font-semibold text-lg">🎯 अध्याय 2: उद्देश्य (Objectives)</h3>
                <span>{activeIndex === 3 ? "−" : "+"}</span>
              </div>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={activeIndex === 3 ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
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
              </motion.div>
            </motion.div> */}
            {/* Chapter 6 */}
            {/* <motion.div
              className="bg-card border border-border rounded-xl overflow-hidden cursor-pointer"
              onClick={() => setActiveIndex(activeIndex === 3 ? null : 3)}
            >
              <div className="p-5 flex justify-between items-center">
                <h3 className="font-semibold text-lg">🎯 अध्याय 2: उद्देश्य (Objectives)</h3>
                <span>{activeIndex === 3 ? "−" : "+"}</span>
              </div>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={activeIndex === 3 ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
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
              </motion.div>
            </motion.div> */}



          </div>
        </div>
      </section>
    </div>
  )
}

export default Constitution