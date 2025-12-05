import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import { AuthProvider } from "@/contexts/AuthContext";
import CartDrawer from "@/components/CartDrawer";

// Pages
import Index from "./pages/Index";
import Cardapio from "./pages/Cardapio";
import ProductDetails from "./pages/ProductDetails";
import Encomenda from "./pages/Encomenda";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";

// Admin Pages
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminProductForm from "./pages/admin/AdminProductForm";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <CartDrawer />
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Index />} />
              <Route path="/cardapio" element={<Cardapio />} />
              <Route path="/produto/:id" element={<ProductDetails />} />
              <Route path="/encomenda" element={<Encomenda />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/contato" element={<Contato />} />

              {/* Admin Routes */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/products/new" element={<AdminProductForm />} />
              <Route path="/admin/products/edit/:id" element={<AdminProductForm />} />

              {/* 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;

/*
 * ESTRUTURA PARA INTEGRAÇÃO COM BACKEND:
 * 
 * Quando você tiver um backend (Node.js, Python, etc.), basta:
 * 
 * 1. Substituir as funções em src/services/productService.ts por chamadas HTTP reais
 * 2. Substituir a lógica em src/contexts/AuthContext.tsx por autenticação real (JWT, session, etc.)
 * 3. Conectar o carrinho ao backend para persistência (opcional)
 * 
 * A estrutura está preparada para:
 * - REST API: substitua os métodos do productService por fetch/axios
 * - GraphQL: crie um novo service com queries/mutations
 * - Supabase/Firebase: substitua os services pelos SDKs correspondentes
 * 
 * Nenhuma alteração nos componentes será necessária!
 */
