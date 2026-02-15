import { Button } from "@/components/ui/button";
import logoDp from "@/assets/logo-dp.png";

const CTASection = () => {
  return (
    <section className="py-24 relative">
      <div className="section-divider mb-24" />
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center relative">
          {/* Background glow */}
          <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-[80px] pointer-events-none" />

          <div className="relative glass-card rounded-3xl p-12 md:p-16 gold-border">
            <img src={logoDp} alt="DetailPro" className="h-12 w-auto mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Eleve o padrão da sua estética{" "}
              <span className="gold-gradient-text">hoje mesmo.</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Pare de improvisar. Comece a profissionalizar.
            </p>

            <Button variant="cta" size="xl" className="mb-8">
              Começar teste gratuito
            </Button>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="text-primary">✓</span> 14 dias grátis
              </span>
              <span className="flex items-center gap-2">
                <span className="text-primary">✓</span> Sem cartão
              </span>
              <span className="flex items-center gap-2">
                <span className="text-primary">✓</span> Cancele quando quiser
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
