import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Encomenda = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-2">Encomenda Personalizada</h1>
          <p className="text-foreground italic">Vamos criar algo especial juntos! 🎂</p>
        </div>

        <div className="max-w-2xl mx-auto bg-card rounded-lg shadow-md p-8">
          <form className="space-y-8">
            {/* Contact Information */}
            <div>
              <h2 className="text-xl font-semibold text-primary mb-4">Informações de Contato</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Nome Completo *</Label>
                  <Input id="name" type="text" required className="mt-1" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Telefone/WhatsApp *</Label>
                    <Input id="phone" type="tel" placeholder="(11) 99999-9999" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" type="email" className="mt-1" />
                  </div>
                </div>
              </div>
            </div>

            {/* Order Details */}
            <div>
              <h2 className="text-xl font-semibold text-primary mb-4">Detalhes da Encomenda</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date">Data do Evento *</Label>
                    <Input id="date" type="date" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="flavor">Sabor *</Label>
                    <Select required>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Selecione..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="chocolate">Chocolate</SelectItem>
                        <SelectItem value="morango">Morango</SelectItem>
                        <SelectItem value="red-velvet">Red Velvet</SelectItem>
                        <SelectItem value="baunilha">Baunilha</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="size">Tamanho *</Label>
                    <Select required>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Selecione..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pequeno">Pequeno</SelectItem>
                        <SelectItem value="medio">Médio</SelectItem>
                        <SelectItem value="grande">Grande</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="servings">Serve Quantas Pessoas? *</Label>
                    <Input id="servings" type="number" placeholder="Ex: 20" required className="mt-1" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="description">Descrição do Bolo *</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Descreva como você imagina seu bolo: decoração, cores, temas, detalhes especiais, etc."
                    rows={5}
                    required 
                    className="mt-1"
                  />
                </div>
              </div>
            </div>

            <Button type="submit" className="w-full">
              Enviar Encomenda
            </Button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Encomenda;
