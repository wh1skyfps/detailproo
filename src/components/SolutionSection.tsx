import { Shield, SplitSquareHorizontal, ClipboardCheck, Smartphone } from "lucide-react";

const solutions = [
  {
    icon: Shield,
    title: "Registro completo de avarias",
    description: "Documente cada detalhe do veículo na entrada e se proteja contra reclamações.",
  },
  {
    icon: SplitSquareHorizontal,
    title: "Comparador antes e depois",
    description: "Mostre o impacto do seu trabalho com comparações visuais impressionantes.",
  },
  {
    icon: ClipboardCheck,
    title: "Checklist profissional",
    description: "Garanta que nenhum detalhe passe despercebido com checklists personalizados.",
  },
  {
    icon: Smartphone,
    title: "App exclusivo para o cliente",
    description: "Seu cliente acompanha tudo em tempo real pelo próprio celular.",
  },
];

const SolutionSection = () => {
  return (
    <section className="py-24 relative">
      <div className="section-divider mb-24" />
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-6">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">🚀 A solução</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          DetailPro: controle total,{" "}
          <span className="gold-gradient-text">experiência premium</span>
        </h2>
        <p className="text-center text-muted-foreground max-w-xl mx-auto mb-16">
          Uma plataforma profissional que protege seu negócio e eleva o nível da sua marca.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-6 hover:gold-border transition-all duration-300 hover:-translate-y-1 group animate-glow-pulse"
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <solution.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{solution.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
