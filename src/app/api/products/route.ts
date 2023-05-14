import { NextRequest, NextResponse } from "next/server";



const { WOOCOMMERCE_CONSUMER_KEY, WOOCOMMERCE_GRAPHQL_URL } = process.env;


export async function GET(request: NextRequest) {

  const products = [
    {
      databaseId: '1',
      name: 'Product 1',
      onSale: true,
      slug: 'product-1',
      image: {
        sourceUrl: 'image-1.jpg',
      },
      price: 10.99,
      regularPrice: 12.99,
      salePrice: 9.99,
      variations: [
        {
          size: 'S',
          color: 'Red',
          price: 12.99,
          regularPrice: 14.99,
          salePrice: 11.99,
        },
        {
          size: 'M',
          color: 'Blue',
          price: 14.99,
          regularPrice: 16.99,
          salePrice: 13.99,
        },
      ],
    },
    {
      databaseId: '2',
      name: 'Product 2',
      onSale: false,
      slug: 'product-2',
      image: {
        sourceUrl: 'image-2.jpg',
      },
      price: 19.99,
      regularPrice: 19.99,
      salePrice: null,
      variations: [],
    },
  ];


  return NextResponse.json({ products });
}









export async function GETj(request: NextRequest) {
  const res = await fetch(WOOCOMMERCE_GRAPHQL_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'API-Key': WOOCOMMERCE_CONSUMER_KEY,
    },
    body: JSON.stringify({
      query: `
        query {
          products {
            nodes {
              id
              name
              price
            }
          }
        }
      `,
    }),
  });

  const data = await res.json();

  return NextResponse.json(data);
}
