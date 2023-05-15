
// Styles
import * as Styles from "./styles";

// Components
import SingleProduct from '../components/SingleProduct';

import type { Metadata, ResolvingMetadata } from 'next';
import { Suspense } from "react";


export async function generateStaticParams() {
  const WOOCOMMERCE_GRAPHQL_URL = process.env.WOOCOMMERCE_GRAPHQL_URL
  const products = await fetch(`${WOOCOMMERCE_GRAPHQL_URL}/products`, {
    next: {
      revalidate: 60 * 2
    }
  }).then((res) => res.json());

  return products.map((product: { id: any; }) => ({
    id: product.id,
  }));
}


interface ProductsProps {
  params: {
    id: string;
  },
  searchParams: { [id: string]: string | string[] | undefined };
}

function formatSlug(slug: string): string {
  const encodedSlug = encodeURIComponent(slug);
  const decodedSlug = encodedSlug.replace(/-/g, ' ');

  return decodedSlug;
}



export async function generateMetadata(
  { params, searchParams }:  ProductsProps,
  parent?: ResolvingMetadata,
): Promise<Metadata> {

  const formattedSlug = await formatSlug(params.id)
  // optionally access and extend (rather than replace) parent metadata
  //const previousImages = (await parent).openGraph?.images || [];

  return {
    title: formattedSlug,
    openGraph: {
      // images: ['/some-specific-page-image.jpg', ...previousImages],
    },
  };
}


function SkeletonProduct() {
  return (
    <Styles.SkeletonProduct>

    </Styles.SkeletonProduct>
  )
}

// Definir o componente Page
export default async function Product({ params, searchParams }: ProductsProps) {

  const { id } = searchParams;

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