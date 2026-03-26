import { supabase } from "@/integrations/supabase/client";

export interface Product {
  id: string;
  name: string;
  subtitle: string | null;
  description: string;
  price: number;
  image_url: string;
  category: string;
  stripe_price_id: string | null;
  active: boolean;
}

// Import local images as fallback mapping
import boloChocolate from "@/assets/bolo-chocolate.jpg";
import tortaMorango from "@/assets/torta-morango.jpg";
import boloRedVelvet from "@/assets/bolo-red-velvet.jpg";
import docinhos from "@/assets/docinhos.jpg";

const imageMap: Record<string, string> = {
  "/assets/bolo-chocolate.jpg": boloChocolate,
  "/assets/torta-morango.jpg": tortaMorango,
  "/assets/bolo-red-velvet.jpg": boloRedVelvet,
  "/assets/docinhos.jpg": docinhos,
};

export const resolveImage = (imageUrl: string): string => {
  return imageMap[imageUrl] || imageUrl;
};

export const formatPrice = (price: number): string => {
  return price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};

export const productService = {
  async getProducts(): Promise<Product[]> {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("active", true)
      .order("created_at");

    if (error) throw error;
    return data || [];
  },

  async getProductById(id: string): Promise<Product | null> {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", id)
      .maybeSingle();

    if (error) throw error;
    return data;
  },

  async getProductsByCategory(category: string): Promise<Product[]> {
    if (category === "Todos") return this.getProducts();
    
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("active", true)
      .eq("category", category);

    if (error) throw error;
    return data || [];
  },

  async searchProducts(query: string): Promise<Product[]> {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("active", true)
      .or(`name.ilike.%${query}%,description.ilike.%${query}%`);

    if (error) throw error;
    return data || [];
  },
};
