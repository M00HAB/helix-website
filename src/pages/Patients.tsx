import { useState } from "react";
import { ChevronDown, Shield, Droplets, Sparkles, ArrowRight } from "lucide-react";
import { FadeIn, SectionTitle } from "@/components/SectionTitle";
import skinLayers from "@/assets/skin-layers-diagram.png";

const faqs = [
  {
    q: "Is Helix MCC safe to use?",
    a: "Helix MCC is formulated with carefully selected minerals and follows a structured safe-use framework. It is designed for topical use under recommended conditions. Always consult your healthcare provider before use.",
  },
  {
    q: "How long does it take to see results?",
    a: "Results may vary depending on individual skin conditions. Helix supports the skin's natural recovery environment, and outcomes should be evaluated over a recommended usage period as guided by your healthcare provider.",
  },
  {
    q: "Can I use Helix with other skincare products?",
    a: "Consult your healthcare provider before combining Helix with other topical treatments to ensure compatibility and optimal outcomes.",
  },
  {
    q: "Does Helix contain antibiotics?",
    a: "No. Helix MCC uses a non-antibiotic, mineral-based approach to support skin recovery environments rather than directly targeting microorganisms.",
  },
];

const Patients = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for reaching out. We will respond shortly.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-card section-padding">
        <div className="container-max text-center">
          <FadeIn>
            <h1 className="text-4xl lg:text-5xl font-bold text-accent mb-4">
              For Patients
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* What is Helix? */}
      <section className="section-padding bg-background">
        <div className="container-max max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-accent font-bold text-xl mb-4">What is Helix?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Helix MCC is a gentle, mineral-based formulation designed to support the skin's natural recovery processes. It works by creating an environment that helps the skin recover, rather than using harsh chemicals or antibiotics.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* How It Supports Skin Recovery */}
      <section className="section-padding bg-card">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h2 className="text-accent font-bold text-xl mb-6">How It Supports Skin Recovery</h2>
              <ul className="space-y-4">
                {[
                  "Locks in the right moisture",
                  "Supports natural MCC barrier function",
                  "Creates a protective surface",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-6 text-sm">
                Helix works alongside the skin's built-in mechanisms to support a favorable recovery environment without introducing aggressive active ingredients.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <img src={skinLayers} alt="Skin recovery diagram" className="rounded-lg shadow-md" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Suitable Situations */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <FadeIn>
            <h2 className="text-accent font-bold text-xl mb-8">Suitable Situations</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: Shield, label: "Post-Procedure Recovery" },
              { icon: Droplets, label: "Minor Irritations" },
              { icon: Sparkles, label: "Small Cuts & Abrasions" },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-card border border-border p-6 rounded-lg text-center hover:shadow-md transition-shadow">
                  <item.icon className="text-accent mx-auto mb-3" size={28} />
                  <p className="font-medium text-foreground text-sm">{item.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Warnings + FAQ */}
      <section className="section-padding bg-card">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12">
            <FadeIn>
              <h2 className="text-accent font-bold text-xl mb-6">Safety & Warnings</h2>
              <ul className="text-muted-foreground text-sm space-y-3">
                <li>• For external use only</li>
                <li>• Avoid contact with eyes</li>
                <li>• Stop use if irritation occurs</li>
                <li>• Keep out of reach of children</li>
              </ul>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-accent font-bold text-xl mb-6">FAQ</h2>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-border rounded-lg overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex justify-between items-center p-4 text-left bg-background hover:bg-muted/50 transition-colors"
                    >
                      <span className="font-medium text-sm text-foreground">{faq.q}</span>
                      <ChevronDown
                        size={16}
                        className={`text-muted-foreground shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""
                          }`}
                      />
                    </button>
                    {openFaq === i && (
                      <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed bg-background">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact Inquiry */}
      <section className="section-padding bg-background">
        <div className="container-max max-w-xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-xl font-bold text-foreground mb-2">Contact & Inquiry</h2>
            <p className="text-muted-foreground text-sm mb-6">
              Have a question? Feel free to reach out! Our team is here to help.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
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

export default Patients;
