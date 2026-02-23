import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { FadeIn, SectionTitle } from "@/components/SectionTitle";
import heroProduct from "@/assets/hero-product.png";
import doctorImg from "@/assets/doctor-professional.png";
import mccTech from "@/assets/mcc-technology.png";
import mccPower from "@/assets/mcc-power-circle.png";
import heroLogo from "@assets/logo.png"
import safetyIcon from "@/assets/icons8-safety-96 1.png";
import bondIcon from "@/assets/icons8-bond-outlines-96 1.png";
import pathIcon from "@/assets/icons8-double-path-96 1.png";

const Home = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
                Advanced Mineral Technology Supporting the  <span className="text-accent">Skin’s Recovery Environment.</span> </h1>
              <p className="text-primary-foreground/70 text-lg mb-8 leading-relaxed max-w-lg">
                • Cosmeceutical product • Patent Pending • For external use
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/healthcare"
                  className="bg-accent text-accent-foreground px-6 py-3 rounded-full font-semibold hover:brightness-110 transition inline-flex items-center gap-2"
                >
                  For Healthcare Professionals <ArrowRight size={16} />
                </Link>
                <Link
                  to="/patients"
                  className="border border-primary-foreground/30 text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary-foreground/10 transition inline-flex items-center gap-2"
                >
                  For Patients <ArrowRight size={16} />
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <img
                src={heroProduct}
                alt="Helix MCC Product"
                className="w-full max-w-md mx-auto lg:max-w-full rounded-lg"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* How MCC Differs */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <SectionTitle title="How MCC Differs" />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-4">
              {[
                "Environmental support vs direct pharmacological action",
                "Mineral synergy vs single-ingredient formulations",
                "Structured safe-use framework vs reactive treatment",
              ].map((text, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="bg-primary text-primary-foreground p-6 rounded-lg shadow-md">
                    <p className="font-medium text-sm leading-relaxed">{text}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
            <FadeIn delay={0.2}>
              <img
                src={doctorImg}
                alt="Healthcare professional"
                className="w-full rounded-lg shadow-lg max-w-sm mx-auto lg:max-w-full"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* What Helix Is */}
      <section className="section-padding bg-card">
        <div className="container-max">
          <SectionTitle title="What Helix Is" />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <p className="text-muted-foreground leading-relaxed">
                Helix is an advanced mineral-based cosmeceutical formulation designed to support the skin’s natural recovery environment. Developed with proprietary MCC
                Technology, Helix focuses on optimizing external skin conditions while maintaining a structured safety framework.</p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <img
                src={mccTech}
                alt="MCC Technology close-up"
                className="w-full rounded-lg shadow-lg"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why MCC Technology */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <SectionTitle title="Why MCC Technology" />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: bondIcon,
                title: "",
                desc: "Engineered mineral composition designed to support optimal external skin environment conditions.",
              },
              {
                icon: safetyIcon,
                title: "",
                desc: "A proprBuilt with structured safe-use principles suitable for professional and patient guidance.ietary mineral blend designed for optimal bioavailability and skin compatibility.",
              },
              {
                icon: pathIcon,
                title: "",
                desc: "Developed to serve healthcare professionals and patients with clear communication pathways.",
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-primary text-primary-foreground p-8 rounded-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col items-center text-center gap-4">
                  <img src={item.icon} alt="" className="w-16 h-16 shrink-0 mb-2" />
                  <div>
                    <h3 className="font-semibold mb-3 text-sm">{item.title}</h3>
                    <p className="text-primary-foreground/60 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Power of MCC Technology */}
      <section className="section-padding bg-card">
        <div className="container-max">
          <SectionTitle title="Power of MCC Technology" />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden mx-auto shadow-xl">
                <img src={mccPower} alt="MCC Technology" className="w-full h-full object-cover" />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <ul className="space-y-5">
                {[
                  { title: "Supportive Mineral Cell Complex", desc: "MCC combines Zinc, Calcium, Magnesium, and Silica to support the skin." },
                  { title: "Clinically Driven", desc: "Clinically tested to promote a balanced skin recovery environment." },
                  { title: "Non-Antibiotic Approach", desc: "Natural mineral-based formula without antibiotics or harsh chemicals." },
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-3 h-3 rounded-full bg-accent mt-1.5 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Choose Your Path */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <SectionTitle title="Choose Your Path" />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "For Doctors",
                desc: "Access clinical data, professional guidance, usage frameworks, and scientific background of MCC Technology.",
                link: "/healthcare",
                btnText: "For Healthcare Professionals",
                primary: true,
              },
              {
                title: "For Patients",
                desc: "Learn how Helix supports your skin recovery environment, including safe usage instructions and FAQs.",
                link: "/patients",
                btnText: "For Patients",
                primary: false,
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-card border border-border p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">{item.desc}</p>
                  <Link
                    to={item.link}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition w-fit ${item.primary
                      ? "bg-accent text-accent-foreground hover:brightness-110"
                      : "border border-foreground/20 text-foreground hover:bg-muted"
                      }`}
                  >
                    {item.btnText} <ArrowRight size={14} />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Safe-Use Framework */}
      <section className="section-padding bg-card">
        <div className="container-max text-center max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-bold text-foreground mb-6">Safe-Use Framework</h2>
            <p className="text-muted-foreground leading-relaxed">
              Helix follows a structured safe-use framework ensuring proper external application guidance, recommended usage intervals, and contraindication awareness.            </p>
          </FadeIn>
        </div>
      </section>

      {/* Request More Information */}
      <section className="section-padding bg-background">
        <div className="container-max text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-foreground mb-4">Request More Information</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              For detailed product information, clinical insights, or partnership opportunities, contact our team.            </p>
            <Link
              to="/contact"
              className="bg-accent text-accent-foreground px-8 py-3 rounded-full font-semibold hover:brightness-110 transition inline-flex items-center gap-2"
            >
              Request Information <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Home;
