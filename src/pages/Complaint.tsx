import React, { useState } from 'react'
import { motion } from "framer-motion";
import { Send } from 'lucide-react';
import {
    Table,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
} from "@/components/ui/table";

const Complaint = () => {
    const [form, setForm] = useState({ name: "", phone: "", address: "", message: "" });
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const msg = encodeURIComponent(`नाम: ${form.name}\nफ़ोन: ${form.phone}\n पता: ${form.address} शिकायत: ${form.message}`);
        window.open(`https://wa.me/919711668854?text=${msg}`, "_blank");
    };
    const data = [
        { name: "राम कुमार", phone: "+91 9876543210", address: "दिल्ली, भारत", status: "समाधान हो गया" },
        { name: "सीता देवी", phone: "+91 9123456780", address: "मुंबई, भारत", status: "प्रक्रिया में" },
        { name: "राहुल सिंह", phone: "+91 9988776655", address: "बेंगलुरु, भारत", status: "समाधान हो गया" },
        { name: "गीता शर्मा", phone: "+91 9876501234", address: "कोलकाता, भारत", status: "प्रक्रिया में" },
    ];
    return (
        <div>
            <section className="hero-gradient text-primary-foreground section-padding text-center">
                <div className="container mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">शिकायत/समाधान प्रपत्र</h1>
                    <p className="text-primary-foreground/80 text-lg">Complaint/Resolution Form</p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container mx-auto max-w-5xl ">
                    <div className="">

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
                                placeholder="पूरा पता दीजिए, एरिया और पिनकोड के साथ |"
                                required
                                rows={4}
                                value={form.address}
                                onChange={(e) => setForm({ ...form, address: e.target.value })}
                                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                            />
                            <textarea
                                placeholder="शिकायत का पूरा मामला यहां पर लिख के भेजें , हम जल्द से जल्द समाधान के लिए संपर्क करेंगे |"
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
            <section className=' rounded-lg shadow-md border border-gray-200 p-6 m-5'>
                <h2 className="text-2xl font-bold text-primary mb-2 text-center ">शिकायत के समाधान की सूचना यहीं पर दी जाएगी</h2>
                <div className="p-5">
                    <Table>
                        <TableHeader>

                            <TableRow>
                                <TableHead>नाम</TableHead>
                                <TableHead>मोबाइल नंबर</TableHead>
                                <TableHead>पता</TableHead>
                                <TableHead>स्थिति</TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {data.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.phone}</TableCell>
                                    <TableCell>{item.address}</TableCell>
                                    <TableCell
                                        className={`font-bold ${item.status === "समाधान हो गया"
                                                ? "text-green-600"
                                                : "text-red-600"
                                            }`}
                                    >
                                        {item.status}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                </div>
            </section>
        </div>
    )
}

export default Complaint