import { Button } from "@/components/ui/button";
import heroMockup from "@/assets/hero-mockup.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glow */}
      <div className="hero-glow absolute inset-0 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="opacity-0 animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8">
            <span className="text-sm text-primary">✨ 14 dias grátis. Sem cartão de crédito.</span>
          </div>

          {/* Headline */}
          <h1 className="opacity-0 animate-fade-up-delay-1 text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
            Transforme sua estética em uma{" "}
            <span className="gold-gradient-text">experiência premium</span>
          </h1>

          {/* Subheadline */}
          <p className="opacity-0 animate-fade-up-delay-2 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Organize seus serviços, registre cada detalhe antes e depois, proteja-se contra reclamações e impressione seus clientes com tecnologia profissional.
          </p>

          {/* CTAs */}
          <div className="opacity-0 animate-fade-up-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button variant="hero" size="xl">
              Começar teste gratuito
            </Button>
            <Button variant="heroOutline" size="xl">
              Ver demonstração
            </Button>
          </div>

          {/* Mockup */}
          <div className="opacity-0 animate-fade-up-delay-4 relative max-w-5xl mx-auto">
            <div className="gold-glow rounded-2xl overflow-hidden border border-border/50">
              <img
                src={heroMockup}
                alt="DetailPro Dashboard - Painel de controle e app do cliente"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
