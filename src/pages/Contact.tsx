import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(`नाम: ${form.name}\nफ़ोन: ${form.phone}\nसंदेश: ${form.message}`);
    window.open(`https://wa.me/919711668854?text=${msg}`, "_blank");
  };

  return (
    <div>
      <section className="hero-gradient text-primary-foreground section-padding text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">संपर्क करें</h1>
          <p className="text-primary-foreground/80 text-lg">Contact Us</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-primary mb-4">संपर्क जानकारी</h2>
              {[
                { icon: MapPin, label: "पता", value: "नई दिल्ली, भारत" },
                { icon: Phone, label: "मोबाइल", value: "+91 9711668854" },
                { icon: Mail, label: "ईमेल", value: "info@chadhaarsamaj.org" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-card border border-border rounded-xl p-5">
                  <item.icon className="text-secondary shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-foreground">{item.label}</p>
                    <p className="text-muted-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Form */}
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="bg-card border border-border rounded-2xl p-8 space-y-5"
            >
              <h2 className="text-2xl font-bold text-primary mb-2">संदेश भेजें</h2>
              <input
                type="text"
                placeholder="आपका नाम"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <input
                type="tel"
                placeholder="मोबाइल नंबर"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <textarea
                placeholder="आपका संदेश"
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              />
              <button
                type="submit"
                className="w-full bg-secondary text-secondary-foreground py-3 rounded-lg font-bold text-lg hover:bg-secondary-warm transition-colors flex items-center justify-center gap-2"
              >
                <Send size={20} />
                WhatsApp पर भेजें
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
