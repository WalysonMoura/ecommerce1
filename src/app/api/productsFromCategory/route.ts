import { NextRequest,NextResponse } from "next/server";



const { WOOCOMMERCE_CONSUMER_KEY,WOOCOMMERCE_GRAPHQL_URL } = process.env;


export async function GET(request: NextRequest) {
  const products = [
    {
      id: '1',
      databaseId: '123',
      onSale: true,
      averageRating: 4.5,
      slug: 'product-1',
      description: 'Descrição do produto 1',
      image: {
        id: 'image-1',
        uri: 'image-1.jpg',
        title: 'Imagem 1',
        srcSet: 'image-1.jpg',
        sourceUrl: 'image-1.jpg',
      },
      name: 'Product 1',
      salePrice: 9.99,
      regularPrice: 12.99,
      price: 9.99,
    },
    {
      id: '2',
      databaseId: '456',
      onSale: false,
      averageRating: 3.8,
      slug: 'product-2',
      description: 'Descrição do produto 2',
      image: {
        id: 'image-2',
        uri: 'image-2.jpg',
        title: 'Imagem 2',
        srcSet: 'image-2.jpg',
        sourceUrl: 'image-2.jpg',
      },
      name: 'Product 2',
      salePrice: null,
      regularPrice: 19.99,
      price: 19.99,
    },
  ];
  const { searchParams } = new URL(request.url);
  const categoryName = searchParams.get('category');
  
  const category = await categories.json({ data: { productCategory: { id, name: categoryName, products } } });
 
  return NextResponse.json({ category });
}






