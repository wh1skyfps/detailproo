import { TrendingUp, ShieldCheck, Award, Heart } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Aumente seu ticket médio",
    description: "Clientes que veem o valor do serviço aceitam pacotes maiores com mais facilidade.",
  },
  {
    icon: ShieldCheck,
    title: "Proteção contra prejuízos",
    description: "Registros detalhados evitam disputas e reclamações sem fundamento.",
  },
  {
    icon: Award,
    title: "Imagem profissional",
    description: "Transmita confiança e credibilidade em cada interação com seu cliente.",
  },
  {
    icon: Heart,
    title: "Clientes mais fiéis",
    description: "A experiência diferenciada fideliza e gera indicações espontâneas.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="section-divider mb-24" />
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-6">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">💎 Benefícios</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          Resultados que impactam direto no seu{" "}
          <span className="gold-gradient-text">faturamento</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-8 hover:gold-border transition-all duration-300 hover:-translate-y-1 group flex gap-5"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
