import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-foreground mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/cardapio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Cardápio
                </Link>
              </li>
              <li>
                <Link to="/encomenda" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Encomendas
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Sobre Nós
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contato</h3>
            <p className="text-sm text-muted-foreground">
              (11) 99999-9999
            </p>
            <p className="text-sm text-muted-foreground">
              contato@confeitariarodrigues.com.br
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Acompanhe</h3>
            <p className="text-sm text-muted-foreground">
              @confeitariarodrigues
            </p>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Confeitaria Rodrigues. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
