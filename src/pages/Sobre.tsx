import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Sobre = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-2">Sobre Nós</h1>
          <p className="text-foreground italic">Nossa história e paixão</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-card rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Confeitaria Rodrigues</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Confeccionando memórias especiais em momentos ainda mais especiais desde 2010.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Na Confeitaria Rodrigues, acreditamos que cada bolo conta uma história e cada doce carrega um sentimento. 
              Nosso compromisso é criar não apenas produtos deliciosos, mas experiências memoráveis para você e seus convidados.
            </p>
            <p className="text-foreground leading-relaxed">
              Trabalhamos com ingredientes selecionados e receitas desenvolvidas com muito carinho para garantir 
              que cada mordida seja especial. Seja para um aniversário, casamento ou qualquer celebração, 
              estamos aqui para tornar seu momento ainda mais doce.
            </p>
          </div>

          <div className="bg-secondary rounded-lg p-8">
            <h3 className="text-xl font-semibold text-primary mb-4">Nossos Valores</h3>
            <ul className="space-y-3 text-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Qualidade em cada ingrediente e processo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Atendimento personalizado e atencioso</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Criatividade e inovação nas receitas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Compromisso com a satisfação dos clientes</span>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Sobre;
