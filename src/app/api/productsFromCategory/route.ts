import { NextRequest, NextResponse } from "next/server";



const { WOOCOMMERCE_CONSUMER_KEY, WOOCOMMERCE_GRAPHQL_URL } = process.env;

interface ProductImage {
  id: string;
  uri: string;
  title: string;
  srcSet: string;
  sourceUrl: string;
}

interface Product {
  id: string;
  databaseId: string;
  onSale: boolean;
  averageRating: number;
  slug: string;
  description: string;
  image: ProductImage;
  name: string;
  salePrice: string;
  regularPrice: string;
  price: string;
}

interface ProductCategory {
  id: string | null;
  name: string;
  products: {
    nodes: Product[];
  };
}

interface Response {
  productCategory: ProductCategory;
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const categoryId = searchParams.get('id');

  const res:Response = {
    productCategory: {
      id: categoryId,
      name: 'Category Name',
      products: {
        nodes: [
          {
            id: '1',
            databaseId: '1',
            onSale: true,
            averageRating: 4.5,
            slug: 'product-1',
            description: 'Product 1 description',
            image: {
              id: '1',
              uri: 'image-1.jpg',
              title: 'Product 1',
              srcSet: '',
              sourceUrl: 'image-1.jpg',
            },
            name: 'Product 1',
            salePrice: '9.99',
            regularPrice: '12.99',
            onSale: true,
            price: '9.99',
          },
          {
            id: '2',
            databaseId: '2',
            onSale: false,
            averageRating: 3.8,
            slug: 'product-2',
            description: 'Product 2 description',
            image: {
              id: '2',
              uri: 'image-2.jpg',
              title: 'Product 2',
              srcSet: '',
              sourceUrl: 'image-2.jpg',
            },
            name: 'Product 2',
            salePrice: '19.99',
            regularPrice: '19.99',
            onSale: false,
            price: '19.99',
          },
        ],
      },
    },
  };


  return NextResponse.json(res);
}






