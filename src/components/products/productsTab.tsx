import { products } from "@/data/products";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Product } from "@/types/product";
import { getAllProducts } from "@/services/product";

export const ProductsTab = async () => {
  const products = await getAllProducts();

  return (
    <Tabs defaultValue="tab1">
      <TabsList className="flex">
        <TabsTrigger value="tab1" className="flex-1">
          Tab 1
        </TabsTrigger>
        <TabsTrigger value="tab2" className="flex-1">
          Tab 2
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab1" className="mt-6">
        <ul>{products && products.map((e) => <li>{e.name}</li>)}</ul>
      </TabsContent>
      <TabsContent value="tab2" className="mt-6">
        Conteudo tab2
      </TabsContent>
    </Tabs>
  );
};
