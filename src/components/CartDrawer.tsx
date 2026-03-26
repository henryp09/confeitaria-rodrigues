import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { formatPrice, resolveImage } from "@/services/productService";
import { Minus, Plus, Trash2, ShoppingBag, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const CartDrawer = () => {
  const { items, isOpen, closeCart, updateQuantity, removeFromCart, totalPrice, clearCart } = useCart();
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const { toast } = useToast();

  const handleCheckout = async () => {
    setCheckoutLoading(true);
    try {
      const checkoutItems = items.map((item) => ({
        stripe_price_id: item.product.stripe_price_id,
        product_id: item.product.id,
        name: item.product.name,
        price: item.product.price,
        quantity: item.quantity,
      }));

      const { data, error } = await supabase.functions.invoke("create-checkout", {
        body: {
          items: checkoutItems,
          customer: { name: "Cliente", phone: "N/A" },
        },
      });

      if (error) throw error;
      if (data?.url) {
        clearCart();
        window.open(data.url, "_blank");
      }
    } catch (error: any) {
      toast({
        title: "Erro no checkout",
        description: error.message || "Não foi possível processar o pagamento.",
        variant: "destructive",
      });
    } finally {
      setCheckoutLoading(false);
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={closeCart}>
      <SheetContent className="w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 text-primary">
            <ShoppingBag className="w-5 h-5" />
            Seu Carrinho
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-muted-foreground">
            <ShoppingBag className="w-16 h-16 mb-4 opacity-20" />
            <p>Seu carrinho está vazio</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              <AnimatePresence mode="popLayout">
                {items.map((item) => (
                  <motion.div
                    key={item.product.id}
                    layout
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex gap-3 p-3 bg-secondary/50 rounded-lg"
                  >
                    <img
                      src={resolveImage(item.product.image_url)}
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-foreground truncate">{item.product.name}</h4>
                      <p className="text-sm text-muted-foreground">{formatPrice(item.product.price)}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Button size="icon" variant="outline" className="h-7 w-7" onClick={() => updateQuantity(item.product.id, item.quantity - 1)}>
                          <Minus className="w-3 h-3" />
                        </Button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <Button size="icon" variant="outline" className="h-7 w-7" onClick={() => updateQuantity(item.product.id, item.quantity + 1)}>
                          <Plus className="w-3 h-3" />
                        </Button>
                        <Button size="icon" variant="ghost" className="h-7 w-7 ml-auto text-destructive hover:text-destructive" onClick={() => removeFromCart(item.product.id)}>
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className="border-t pt-4 space-y-4">
              <div className="flex justify-between items-center text-lg font-bold">
                <span>Total:</span>
                <span className="text-primary">{formatPrice(totalPrice)}</span>
              </div>
              <div className="space-y-2">
                <Button className="w-full" size="lg" onClick={handleCheckout} disabled={checkoutLoading}>
                  {checkoutLoading ? (
                    <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Processando...</>
                  ) : (
                    "Finalizar Pedido"
                  )}
                </Button>
                <Button variant="outline" className="w-full" onClick={clearCart}>
                  Limpar Carrinho
                </Button>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
