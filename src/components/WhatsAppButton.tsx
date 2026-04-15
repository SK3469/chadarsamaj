import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/9711668854"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[hsl(142,70%,45%)] text-primary-foreground shadow-xl flex items-center justify-center hover:scale-110 transition-transform"
    aria-label="WhatsApp"
  >
    <MessageCircle size={28} />
  </a>
);

export default WhatsAppButton;
