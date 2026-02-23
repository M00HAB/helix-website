import { useState } from "react";
import { Mail, MapPin, Stethoscope, Handshake, MessageCircle } from "lucide-react";
import { FadeIn, SectionTitle } from "@/components/SectionTitle";
import medicalOffice from "@/assets/medical-office.png";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message. We will get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={medicalOffice} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative container-max px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <FadeIn>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Contact & Professional{" "}
              <span className="text-accent">Inquiries</span>
            </h1>
            <p className="text-primary-foreground/70 max-w-xl leading-relaxed">
              Helix MCC Technology is designed for professional, clinical, and distribution
              environments. For clinical questions, distribution inquiries, or any other inquiries,
              please contact the Helix team.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Inquiry Types */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <SectionTitle title="Medical & Clinical Inquiries" />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Stethoscope,
                title: "Medical & Clinical Inquiries",
                desc: "For healthcare professionals seeking clinical data, usage protocols, or institutional samples.",
              },
              {
                icon: Handshake,
                title: "Distribution & Partnership",
                desc: "For distribution opportunities, regional partnerships, or retail collaborations.",
              },
              {
                icon: MessageCircle,
                title: "General Contact",
                desc: "For general questions or comments, we are here to help with any inquiry.",
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-card border border-border p-6 rounded-lg text-center hover:shadow-md transition-shadow h-full">
                  <item.icon className="text-accent mx-auto mb-4" size={28} />
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <section className="section-padding bg-card">
        <div className="container-max">
          <FadeIn>
            <h2 className="text-xl font-bold text-foreground mb-6">Contact Details</h2>
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <Mail className="text-accent" size={20} />
                <a href="mailto:info@helixmcc.com" className="text-accent font-medium hover:underline">
                  info@helixmcc.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-accent" size={20} />
                <span className="text-muted-foreground">Location: Saudi Arabia</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-background">
        <div className="container-max max-w-xl mx-auto">
          <SectionTitle title="Request Information" />
          <FadeIn>
            <div className="flex flex-wrap gap-6 mb-8 justify-center">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="text-accent" size={16} />
                <span className="text-muted-foreground">Email: </span>
                <a href="mailto:info@helixmcc.com" className="text-accent hover:underline">info@helixmcc.com</a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="text-accent" size={16} />
                <span className="text-muted-foreground">Location: Saudi Arabia</span>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-border rounded px-4 py-3 text-sm bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-border rounded px-4 py-3 text-sm bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                />
              </div>
              <textarea
                placeholder="Your Message"
                rows={5}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full border border-border rounded px-4 py-3 text-sm bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
              />
              <button
                type="submit"
                className="bg-accent text-accent-foreground px-8 py-3 rounded-full font-semibold hover:brightness-110 transition w-full"
              >
                Request Information
              </button>
            </form>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Contact;
