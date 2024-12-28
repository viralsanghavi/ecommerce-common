import AddToBasketButton from "@/components/AddToBasketButton";
import {imageUrl} from "@/lib/imageUrl";
import {getProductBySlug} from "@/sanity/products/getProductBySlug";
import {PortableText} from "next-sanity";
import Image from "next/image";
import {notFound} from "next/navigation";

export const dynamic = "force-static";
export const revalidate = 60;

const ProductPage = async ({params}: {params: Promise<{slug: string}>}) => {
  const {slug} = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return notFound();
  }
  const isOutOfStock = product.stock != null && product.stock <= 0;
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          className={`relative aspect-square overflow-hidden rounded-lg shadow-lg ${isOutOfStock ? "opacity-50" : ""}`}
        >
          {product.image && (
            <Image
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              src={imageUrl(product.image).url()}
              alt={product.name || "Product Image"}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}

          {isOutOfStock && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <span className="text-white font-bold text-lg">Out of Stock</span>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <div className="text-xl font-semibold mb-4">
              ₹{product.price?.toFixed(2)}
            </div>
            <div className="prose max-w-none mb-4">
              {Array.isArray(product.description) && (
                <PortableText value={product.description} />
              )}
            </div>
          </div>
          <div className="mt-6">
            <AddToBasketButton product={product} disabled={isOutOfStock} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
