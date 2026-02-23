import { useState } from "react";
import { Download, ArrowRight } from "lucide-react";
import { FadeIn, SectionTitle } from "@/components/SectionTitle";
import helixTube from "@/assets/helixtube.png";
import mccTechnology from "@/assets/mccTechnology.png"

const Healthcare = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry. We will get back to you shortly.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-card section-padding">
        <div className="container-max text-center">
          <FadeIn>
            <h1 className="text-4xl lg:text-5xl font-bold text-accent mb-4">
              For Healthcare Professionals
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Clinical Overview */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <FadeIn>
              <h2 className="text-accent font-bold text-xl mb-4">Clinical Overview</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Helix MCC is a cosmeceutical product designed to support the skin's recovery environment through advanced mineral-based technology.               </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <img src={helixTube} alt="Helix Product" className="rounded-lg max-w-sm mx-auto" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* MCC Technology */}
      <section className="section-padding bg-card">
        <div className="container-max">
          <h2 className="text-accent font-bold text-xl mb-8">MCC Technology</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <FadeIn>
              <div className="space-y-6">
                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="font-semibold text-foreground mb-3">Mechanism of Action</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Mineral-based approach targeting skin conditions at the cellular environment level.
                  </p>
                </div>
                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="font-semibold text-foreground mb-3">Key Benefits</h3>
                  <ul className="text-muted-foreground text-sm space-y-2">
                    <li>• Non-antibiotic formulation</li>
                    <li>• Supports skin's natural recovery</li>
                    <li>• Clinically informed approach</li>
                    <li>• Supports extended comfort & tolerance</li>
                  </ul>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <img src={mccTechnology} alt="MCC Technology diagram" className="rounded-lg" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Usage Context */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <h2 className="text-accent font-bold text-xl mb-6">Usage Context</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-3">When to Use</h3>
                <ul className="text-muted-foreground text-sm space-y-2">
                  <li>• Post-procedure care</li>
                  <li>• Dermatological rehabilitation</li>
                  <li>• Skin recovery support</li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-3">Should Not Be Used</h3>
                <ul className="text-muted-foreground text-sm space-y-2">
                  <li>• On infected or open lesions</li>
                  <li>• Severe burns</li>
                  <li>• Patients with mineral allergies or sensitivities</li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Regulatory Position */}
      <section className="section-padding bg-card">
        <div className="container-max">
          <FadeIn>
            <h2 className="text-accent font-bold text-xl mb-4">Regulatory Position</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Conformance: Class I Medical Product – Mineral Dressing.
            </p>
            <button className="bg-accent text-accent-foreground px-6 py-3 rounded-full font-semibold hover:brightness-110 transition inline-flex items-center gap-2">
              <Download size={16} /> Download Scientific Brief
            </button>
          </FadeIn>
        </div>
      </section>

      {/* Institutional Inquiry Form */}
      <section className="section-padding bg-background">
        <div className="container-max max-w-xl mx-auto">
          <SectionTitle title="Institutional Inquiry" />
          <FadeIn>
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                placeholder="Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border border-border rounded px-4 py-3 text-sm bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border border-border rounded px-4 py-3 text-sm bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
              />
              <textarea
                placeholder="Message"
                rows={4}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full border border-border rounded px-4 py-3 text-sm bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
              />
              <button
                type="submit"
                className="bg-accent text-accent-foreground px-6 py-3 rounded-full font-semibold hover:brightness-110 transition w-full"
              >
                Submit Inquiry
              </button>
            </form>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Healthcare;
