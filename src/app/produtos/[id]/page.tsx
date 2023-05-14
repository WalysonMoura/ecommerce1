
// Styles
import * as Styles from "./styles";

// Components
import SingleProduct from '../components/SingleProduct';

// Importar o hook useRouter do Next.js
import { useRouter } from 'next/router';


import type { Metadata } from 'next';
import { Suspense } from "react";


export async function generateStaticParams() {
  const WOOCOMMERCE_GRAPHQL_URL = process.env.WOOCOMMERCE_GRAPHQL_URL
  const products = await fetch(`${WOOCOMMERCE_GRAPHQL_URL}/products`).then((res) => res.json());

  return products.map((product: { id: any; }) => ({
    id: product.id,
  }));
}


interface ProductsProps {
  params: {
    id: string;
  };
}

export async function generateMetadate({ params }: ProductsProps) {
  return {
    title: params.id,
  };
}

function SkeletonProduct() {
  return (
    <Styles.SkeletonProduct>

    </Styles.SkeletonProduct>
  )
}

// Definir o componente Page
export default async function Product({ params }: ProductsProps) {

  const router = useRouter();
  const { id } = router.query;

  const data = await getProduct(id)
  const product = data?.product;

  return (
    <Suspense fallback={<SkeletonProduct />}>
      {product ? (
        <SingleProduct product={product} />
      ) : (
        <div className="mt-8 text-2xl text-center">
          Ops! Parece que o estoque acabou...
        </div>
      )}
    </Suspense>
  );
};

async function getProduct(productId: string | string[] | undefined) {
  const WOOCOMMERCE_GRAPHQL_URL = process.env.WOOCOMMERCE_GRAPHQL_URL
  const res = await fetch(`${WOOCOMMERCE_GRAPHQL_URL}/products/${productId}`);
  return res.json();
}