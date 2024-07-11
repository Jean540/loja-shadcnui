import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Product } from "@/types/product";
import { getAllProducts } from "@/services/product";
import { ProductEmpty } from "./productEmpty";
import Image from "next/image";
import { ProductItem } from "./productItem";

type Tab = {
  title: string;
  value: string;
  products: Product[];
};

export const ProductsTab = async () => {
  const products = await getAllProducts();

  const tabs: Tab[] = [
    {
      title: "Sushi",
      value: "sushi",
      products: products.filter((p) => p.category == "sushi"),
    },
    {
      title: "Temaki",
      value: "temaki",
      products: products.filter((p) => p.category == "temaki"),
    },
    {
      title: "Combinados",
      value: "pack",
      products: products.filter((p) => p.category == "pack"),
    },
    {
      title: "Bebidas",
      value: "beverage",
      products: products.filter((p) => p.category == "beverage"),
    },
  ];

  return (
    <Tabs defaultValue="sushi">
      <TabsList className="flex">
        {tabs.map((t) => (
          <TabsTrigger key={t.value} value={t.value} className="flex-1">
            {t.title}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value} className="mt-6">
          {tab.products.length ? (
            <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
              {tab.products.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <ProductEmpty />
          )}
        </TabsContent>
      ))}

      <TabsContent value="tab2" className="mt-6">
        Conteudo tab2
      </TabsContent>
    </Tabs>
  );
};
