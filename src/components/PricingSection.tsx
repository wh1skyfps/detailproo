import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "79",
    description: "Para quem está começando a profissionalizar",
    features: [
      "Até 30 veículos/mês",
      "Registro de avarias",
      "Fotos antes e depois",
      "1 usuário",
      "Suporte por email",
    ],
    popular: false,
    variant: "pricingOutline" as const,
  },
  {
    name: "Pro",
    price: "149",
    description: "Para estéticas em crescimento",
    features: [
      "Até 100 veículos/mês",
      "Registro de avarias",
      "Comparador antes e depois",
      "Checklist profissional",
      "App do cliente",
      "3 usuários",
      "Suporte prioritário",
    ],
    popular: true,
    variant: "pricing" as const,
  },
  {
    name: "Premium",
    price: "299",
    description: "Para operações de alto volume",
    features: [
      "Veículos ilimitados",
      "Todas as features Pro",
      "Relatórios avançados",
      "API de integração",
      "Usuários ilimitados",
      "Gerente de sucesso dedicado",
      "Onboarding personalizado",
    ],
    popular: false,
    variant: "pricingOutline" as const,
  },
];

const PricingSection = () => {
  return (
    <section className="py-24 relative" id="pricing">
      <div className="section-divider mb-24" />
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-6">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">💰 Planos</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          Escolha o plano ideal para o momento da sua estética
        </h2>
        <p className="text-center text-muted-foreground max-w-xl mx-auto mb-16">
          14 dias grátis em todos os planos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 relative ${
                plan.popular
                  ? "pricing-popular bg-card"
                  : "glass-card"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider">
                  Mais Popular
                </div>
              )}

              <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-muted-foreground text-sm">R$</span>
                <span className="text-5xl font-bold gold-gradient-text">{plan.price}</span>
                <span className="text-muted-foreground text-sm">/mês</span>
              </div>

              <Button variant={plan.variant} size="lg" className="mb-8">
                Começar agora
              </Button>

              <ul className="space-y-3">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
