import { AlertTriangle, ImageOff, DollarSign, BookOpen } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Cliente reclama depois",
    description: "Sem registro de avarias, você fica vulnerável a reclamações injustas.",
  },
  {
    icon: ImageOff,
    title: "Fotos perdidas no WhatsApp",
    description: "Conversas bagunçadas, imagens misturadas, impossível encontrar quando precisa.",
  },
  {
    icon: DollarSign,
    title: "Cobrança questionada",
    description: "Sem transparência visual, o cliente não enxerga o valor do seu trabalho.",
  },
  {
    icon: BookOpen,
    title: "Imagem amadora",
    description: "Caderno e papel passam falta de profissionalismo.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-24 relative">
      <div className="section-divider mb-24" />
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">⚠️ O problema</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          O que está travando o crescimento da sua estética?
        </h2>
        <p className="text-center text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-4">
          Você pode estar perdendo dinheiro todos os dias…{" "}
          <span className="text-foreground font-medium">sem perceber.</span>
        </p>
        <p className="text-center text-muted-foreground max-w-xl mx-auto mb-16">
          Enquanto você trabalha duro, problemas simples continuam afetando sua reputação e seu lucro.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-6 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-colors">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{problem.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>

        {/* Transition text */}
        <p className="text-center text-xl md:text-2xl font-medium">
          Não é falta de esforço.{" "}
          <span className="gold-gradient-text">É falta de sistema.</span>
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;
