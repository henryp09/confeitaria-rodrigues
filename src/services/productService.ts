import { Product, initialProducts } from "@/data/products";

// Estado local dos produtos (simula banco de dados)
let products: Product[] = [...initialProducts];

// Simula delay de API
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const productService = {
  // GET - Buscar todos os produtos
  async getProducts(): Promise<Product[]> {
    await delay(100);
    return [...products];
  },

  // GET - Buscar produto por ID
  async getProductById(id: string): Promise<Product | null> {
    await delay(100);
    return products.find((p) => p.id === id) || null;
  },

  // POST - Criar novo produto
  async createProduct(product: Omit<Product, "id">): Promise<Product> {
    await delay(100);
    const newProduct: Product = {
      ...product,
      id: Date.now().toString(),
    };
    products.push(newProduct);
    return newProduct;
  },

  // PUT - Atualizar produto
  async updateProduct(id: string, updates: Partial<Product>): Promise<Product | null> {
    await delay(100);
    const index = products.findIndex((p) => p.id === id);
    if (index === -1) return null;
    
    products[index] = { ...products[index], ...updates };
    return products[index];
  },

  // DELETE - Remover produto
  async deleteProduct(id: string): Promise<boolean> {
    await delay(100);
    const index = products.findIndex((p) => p.id === id);
    if (index === -1) return false;
    
    products.splice(index, 1);
    return true;
  },

  // Buscar por categoria
  async getProductsByCategory(category: string): Promise<Product[]> {
    await delay(100);
    if (category === "Todos") return [...products];
    return products.filter((p) => p.category === category);
  },

  // Buscar por termo
  async searchProducts(query: string): Promise<Product[]> {
    await delay(100);
    const lowerQuery = query.toLowerCase();
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(lowerQuery) ||
        p.description.toLowerCase().includes(lowerQuery)
    );
  },
};

/*
 * INTEGRAÇÃO COM BACKEND FUTURO:
 * 
 * Quando tiver um backend, substitua as funções acima por chamadas HTTP:
 * 
 * async getProducts(): Promise<Product[]> {
 *   const response = await fetch('/api/products');
 *   return response.json();
 * }
 * 
 * async createProduct(product: Omit<Product, 'id'>): Promise<Product> {
 *   const response = await fetch('/api/products', {
 *     method: 'POST',
 *     headers: { 'Content-Type': 'application/json' },
 *     body: JSON.stringify(product)
 *   });
 *   return response.json();
 * }
 * 
 * E assim por diante para os outros métodos.
 */
