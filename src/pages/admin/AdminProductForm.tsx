import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productService, Product } from "@/services/productService";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import AdminLayout from "@/components/admin/AdminLayout";
import { ArrowLeft, Save } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const categories = ["Bolos", "Tortas", "Doces", "Kits Festa"];

const AdminProductForm = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const isEditing = Boolean(id);

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    subtitle: "",
    description: "",
    price: "",
    image_url: "",
    category: "",
  });

  useEffect(() => {
    if (isEditing && id) {
      loadProduct(id);
    }
  }, [id, isEditing]);

  const loadProduct = async (productId: string) => {
    const product = await productService.getProductById(productId);
    if (product) {
      setFormData({
        name: product.name,
        subtitle: product.subtitle || "",
        description: product.description,
        price: product.price.toString(),
        image_url: product.image_url,
        category: product.category,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const productData = {
      name: formData.name,
      subtitle: formData.subtitle || null,
      description: formData.description,
      price: parseFloat(formData.price),
      image_url: formData.image_url || "/placeholder.svg",
      category: formData.category,
    };

    try {
      if (isEditing && id) {
        const { error } = await supabase.from("products").update(productData).eq("id", id);
        if (error) throw error;
        toast({ title: "Produto atualizado", description: "As alterações foram salvas com sucesso." });
      } else {
        const { error } = await supabase.from("products").insert(productData);
        if (error) throw error;
        toast({ title: "Produto criado", description: "O novo produto foi adicionado com sucesso." });
      }
      navigate("/admin/dashboard");
    } catch (error) {
      toast({ title: "Erro", description: "Não foi possível salvar o produto.", variant: "destructive" });
    }

    setLoading(false);
  };

  return (
    <AdminLayout>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <Button variant="ghost" onClick={() => navigate("/admin/dashboard")} className="gap-2">
            <ArrowLeft className="w-4 h-4" /> Voltar
          </Button>
        </div>

        <div className="bg-card rounded-xl shadow-sm border border-border/50 p-6">
          <h1 className="text-2xl font-bold text-foreground mb-6">
            {isEditing ? "Editar Produto" : "Novo Produto"}
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome do Produto *</Label>
                <Input id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Ex: Bolo de Chocolate" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subtitle">Subtítulo</Label>
                <Input id="subtitle" value={formData.subtitle} onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })} placeholder="Ex: Premium" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Descrição *</Label>
              <Textarea id="description" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} placeholder="Descreva o produto..." rows={3} required />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="price">Preço (R$) *</Label>
                <Input id="price" type="number" step="0.01" min="0" value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} placeholder="0.00" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Categoria *</Label>
                <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })} required>
                  <SelectTrigger><SelectValue placeholder="Selecione..." /></SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (<SelectItem key={cat} value={cat}>{cat}</SelectItem>))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="image_url">URL da Imagem</Label>
              <Input id="image_url" value={formData.image_url} onChange={(e) => setFormData({ ...formData, image_url: e.target.value })} placeholder="https://exemplo.com/imagem.jpg" />
              <p className="text-xs text-muted-foreground">Deixe em branco para usar imagem padrão</p>
            </div>

            <div className="flex gap-4 pt-4">
              <Button type="submit" disabled={loading} className="gap-2">
                <Save className="w-4 h-4" />
                {loading ? "Salvando..." : "Salvar Produto"}
              </Button>
              <Button type="button" variant="outline" onClick={() => navigate("/admin/dashboard")}>Cancelar</Button>
            </div>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminProductForm;
