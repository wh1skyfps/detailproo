import { Button } from "@/components/ui/button";
import logoDp from "@/assets/logo-dp.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/30">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img src={logoDp} alt="DetailPro" className="h-16 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#pricing" className="hover:text-primary transition-colors">Planos</a>
          <a href="#" className="hover:text-primary transition-colors">Recursos</a>
          <a href="#" className="hover:text-primary transition-colors">Contato</a>
        </div>

        <Button variant="hero" size="sm">
          Começar grátis
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
