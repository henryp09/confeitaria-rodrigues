import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Instagram, MapPin, Clock } from "lucide-react";

const Contato = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-2">Entre em Contato</h1>
          <p className="text-foreground">Estamos aqui para te ajudar! 💚</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-6">Nossas Informações</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Telefone / WhatsApp</p>
                  <p className="text-muted-foreground">(11) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-semibold text-foreground">E-mail</p>
                  <p className="text-muted-foreground">contato@confeitariarodrigues.com.br</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Instagram className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Instagram</p>
                  <p className="text-muted-foreground">@confeitariarodrigues</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Endereço</p>
                  <p className="text-muted-foreground">Rua das Flores, 123 - Centro, São Paulo - SP</p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:col-span-2">
                <Clock className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-semibold text-foreground mb-2">Horário de Funcionamento</p>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Segunda a Sexta: 9h às 19h</li>
                    <li>• Sábado: 9h às 15h</li>
                    <li>• Domingo: Fechado</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="bg-card rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Localização</h2>
            <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center mb-4">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                <p className="text-muted-foreground">Mapa interativo do Google Maps</p>
              </div>
            </div>
            <p className="text-muted-foreground text-center mb-4">
              Rua das Flores, 123 - Centro, São Paulo - SP, CEP 01234-567
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="outline">
                Abrir no Google Maps
              </Button>
              <Button className="bg-accent hover:bg-accent/90">
                Fale Conosco no WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contato;
