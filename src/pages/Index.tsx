import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - Fullscreen */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/40 to-primary/20"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/30 rounded-full blur-3xl"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-primary mb-6 tracking-tight">
            Confeitaria Rodrigues
          </h1>
          <p className="text-2xl md:text-3xl text-foreground/80 italic mb-12 font-light">
            "Não há nada que um bolo não resolva!"
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/encomenda">
              <Button 
                size="lg" 
                className="bg-pink-400 hover:bg-pink-500 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Fazer Encomenda
              </Button>
            </Link>
            <Link to="/cardapio">
              <Button 
                size="lg" 
                variant="outline"
                className="bg-green-50 hover:bg-green-100 text-foreground border-2 border-primary/30 px-8 py-6 text-lg rounded-full shadow-md hover:shadow-lg transition-all"
              >
                Ver Cardápio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
