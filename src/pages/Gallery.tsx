import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery1.jpeg";
import gallery2 from "@/assets/gallery2.jpeg";
import gallery3 from "@/assets/gallery3.jpeg";
import gallery4 from "@/assets/gallery4.jpeg";
import gallery5 from "@/assets/gallery5.jpeg";
import gallery6 from "@/assets/gallery6.jpeg";
import gallery7 from "@/assets/gallery7.jpg";
import gallery8 from "@/assets/gallery8.jpg";
import gallery9 from "@/assets/gallery9.jpg";
import gallery10 from "@/assets/gallery10.jpg";
import gallery11 from "@/assets/gallery11.jpg";
import gallery12 from "@/assets/gallery12.jpg";
import gallery13 from "@/assets/gallery13.jpeg";
import gallery14 from "@/assets/gallery14.jpeg";
import gallery15 from "@/assets/gallery15.jpeg";
import gallery16 from "@/assets/gallery16.jpeg";
import gallery17 from "@/assets/gallery17.jpeg";
import video from "@/assets/vid.mp4";
import video1 from "@/assets/vid1.mp4";


const images = [
  { src: gallery1, alt: "अधिवेशन की फोटो" },
  { src: gallery2, alt: "अधिवेशन की फोटो" },
  { src: gallery3, alt: "अधिवेशन की फोटो" },
  { src: gallery4, alt: "अधिवेशन की फोटो" },
  { src: gallery5, alt: "अधिवेशन की फोटो" },
  { src: gallery6, alt: "अधिवेशन की फोटो" },
];
const images2 = [
{ src: gallery7, alt: "कार्यक्रम की फोटो" },
{ src: gallery8, alt: "कार्यक्रम की फोटो" },
{ src: gallery9, alt: "कार्यक्रम की फोटो" },
{ src: gallery10, alt: "कार्यक्रम की फोटो" },
{ src: gallery11, alt: "कार्यक्रम की फोटो" },
{ src: gallery12, alt: "कार्यक्रम की फोटो" },
];
const images3 = [
  { src: gallery13, alt: "सम्मान समारोह" },
  { src: gallery14, alt: "सम्मान समारोह" },
  { src: gallery15, alt: "सम्मान समारोह" },
  { src: gallery16, alt: "सम्मान समारोह" },
  { src: gallery17, alt: "सम्मान समारोह" },
]
const vids = [
  { src: video, alt: "संगठन दवारा समाज के लोगो परेशानियो को जनाने के लिए भ्रमन" },
  { src: video1, alt: "सम्मान समारोह" },
]
const Gallery = () => (
  <div>
    <section className="hero-gradient text-primary-foreground section-padding text-center">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">गैलरी</h1>
        <p className="text-primary-foreground/80 text-lg">Photo Gallery</p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <div className="mt-12">
          <h2 className="text-4xl text-center mb-3 text-primary">अधिवेशन की फोटो</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl overflow-hidden shadow-lg card-hover group"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="bg-card p-4 text-center">
                  <p className="font-semibold text-foreground">{img.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-4xl text-center mb-3 text-primary">कार्यक्रम की फोटो</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {images2.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl overflow-hidden shadow-lg card-hover group"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="bg-card p-4 text-center">
                  <p className="font-semibold text-foreground">{img.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-4xl text-center mb-3 text-primary">सम्मान समारोह</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">


            {images3.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl overflow-hidden shadow-lg card-hover group"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="bg-card p-4 text-center">
                  <p className="font-semibold text-foreground">{img.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-4xl text-center mb-3 text-primary">कार्यक्रम की वीडियो</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">


            {vids.map((vid, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl overflow-hidden shadow-lg  group"
              >
                <video
                  src={vid.src}
                  // alt={vid.alt}
                  // loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-64 object-cover transition-transform duration-500"
                  controls
                />
                <div className="bg-card p-4 text-center">
                  <p className="font-semibold text-foreground">{vid.alt}</p>
                </div>
              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  </div>
);

export default Gallery;
