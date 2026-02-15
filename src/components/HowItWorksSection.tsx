import { Car, Camera, Eye } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Car,
    title: "Cadastre o veículo",
    description: "Registre as informações do veículo e documente o estado inicial com fotos e anotações.",
  },
  {
    number: "02",
    icon: Camera,
    title: "Execute e documente",
    description: "Realize o serviço e registre cada etapa com fotos antes e depois, checklists e observações.",
  },
  {
    number: "03",
    icon: Eye,
    title: "Cliente acompanha tudo",
    description: "Seu cliente recebe acesso exclusivo para visualizar todo o processo em tempo real.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 relative">
      <div className="section-divider mb-24" />
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-6">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">🧩 Como funciona</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          Simples. Rápido.{" "}
          <span className="gold-gradient-text">Poderoso.</span>
        </h2>
        <p className="text-center text-muted-foreground max-w-xl mx-auto mb-20">
          Em apenas 3 passos, sua estética sobe de nível.
        </p>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={`flex-1 ${index % 2 === 1 ? "md:text-left" : "md:text-right"}`}>
                  <div className={`glass-card rounded-xl p-8 hover:-translate-y-1 transition-all duration-300`}>
                    <step.icon className="w-8 h-8 text-primary mb-4 mx-auto md:mx-0" />
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Number badge */}
                <div className="relative z-10 w-14 h-14 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <span className="text-primary-foreground font-bold text-lg">{step.number}</span>
                </div>

                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
