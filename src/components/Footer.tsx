import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-primary-deep text-primary-foreground">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4 text-secondary">चढ़ार समाज राष्ट्रीय संगठन</h3>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            समाज के विकास, एकता और सामाजिक उत्थान के लिए कार्यरत।
          </p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">त्वरित लिंक</h4>
          <div className="flex flex-col gap-2">
            {[
              { to: "/", label: "होम" },
              { to: "/about", label: "हमारे बारे में" },
              { to: "/president", label: "राष्ट्रीय अध्यक्ष" },
              { to: "/news", label: "समाचार" },
              { to: "/gallery", label: "गैलरी" },
              { to: "/contact", label: "संपर्क" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">संपर्क</h4>
          <p className="text-primary-foreground/70 text-sm">📧 info@chadhaarsamaj.org</p>
          <p className="text-primary-foreground/70 text-sm mt-2">📞 +91 9711668854</p>
          <p className="text-primary-foreground/70 text-sm mt-2">📍 नई दिल्ली, भारत</p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center text-primary-foreground/50 text-sm">
        © 2026 चढ़ार समाज राष्ट्रीय संगठन। सर्वाधिकार सुरक्षित।
      </div>
    </div>
  </footer>
);

export default Footer;
