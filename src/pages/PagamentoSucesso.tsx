import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const PagamentoSucesso = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-16 flex items-center justify-center min-h-[70vh]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-primary mb-4">Pagamento Confirmado!</h1>
          <p className="text-muted-foreground mb-8">
            Seu pedido foi recebido com sucesso. Entraremos em contato em breve para combinar a entrega.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/cardapio">
              <Button variant="outline">Ver Cardápio</Button>
            </Link>
            <Link to="/">
              <Button>Voltar ao Início</Button>
            </Link>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default PagamentoSucesso;
