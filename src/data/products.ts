import boloChocolate from "@/assets/bolo-chocolate.jpg";
import tortaMorango from "@/assets/torta-morango.jpg";
import boloRedVelvet from "@/assets/bolo-red-velvet.jpg";
import docinhos from "@/assets/docinhos.jpg";

export interface Product {
  id: string;
  name: string;
  subtitle?: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export const initialProducts: Product[] = [
  {
    id: "1",
    name: "Bolo de Chocolate",
    subtitle: "Premium",
    description: "Bolo de chocolate belga com ganache e morangos frescos",
    price: 120,
    image: boloChocolate,
    category: "Bolos",
  },
  {
    id: "2",
    name: "Torta de Morango",
    description: "Torta crocante recheada com creme e morangos selecionados",
    price: 95,
    image: tortaMorango,
    category: "Tortas",
  },
  {
    id: "3",
    name: "Bolo Red Velvet",
    description: "Clássico bolo vermelho aveludado com cream cheese",
    price: 135,
    image: boloRedVelvet,
    category: "Bolos",
  },
  {
    id: "4",
    name: "Docinhos Finos Sortidos",
    description: "Seleção de brigadeiros gourmet, beijinhos e cajuzinhos",
    price: 3.5,
    image: docinhos,
    category: "Doces",
  },
];

export const formatPrice = (price: number): string => {
  return price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};
