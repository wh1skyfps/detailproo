import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Preciso instalar algo?",
    answer: "Não! O DetailPro funciona 100% na nuvem, direto do seu navegador. Basta criar sua conta e começar a usar. Sem downloads, sem instalações complicadas.",
  },
  {
    question: "Funciona no celular?",
    answer: "Sim! A plataforma é totalmente responsiva e otimizada para dispositivos móveis. Você pode registrar avarias, tirar fotos e gerenciar tudo direto do seu smartphone.",
  },
  {
    question: "Posso cancelar quando quiser?",
    answer: "Claro! Não há fidelidade. Você pode cancelar sua assinatura a qualquer momento, sem multas ou taxas adicionais.",
  },
  {
    question: "Minhas fotos ficam seguras?",
    answer: "Absolutamente! Todas as imagens e dados são armazenados em servidores seguros com criptografia de ponta. Seus registros estão protegidos e acessíveis apenas por você e seus clientes autorizados.",
  },
  {
    question: "E se eu tiver dúvidas?",
    answer: "Nosso time de suporte está disponível para ajudar. No plano Pro e Premium, você conta com suporte prioritário. Além disso, oferecemos uma base de conhecimento completa para te guiar.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-24 relative">
      <div className="section-divider mb-24" />
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-6">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">🧠 FAQ</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          Perguntas frequentes
        </h2>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-xl px-6 border-none"
              >
                <AccordionTrigger className="text-left text-base font-medium hover:no-underline hover:text-primary transition-colors py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
