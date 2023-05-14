import { NextRequest, NextResponse } from "next/server";

import { GET_SINGLE_PRODUCT } from '@/utils/gql/GQL_QUERIES';
import client from '@/utils/apollo/ApolloClient';


const { WOOCOMMERCE_CONSUMER_KEY, WOOCOMMERCE_GRAPHQL_URL } = process.env;


export async function GET(request: NextRequest) {
  const product = {
    id: "1",
    databaseId: "1",
    averageRating: "4.5",
    slug: "example-product",
    description: "This is an example product.",
    onSale: true,
    image: {
      id: "1",
      uri: "https://example.com/image.jpg",
      title: "Example Product",
      srcSet: "https://example.com/image.jpg",
      sourceUrl: "https://example.com/image.jpg"
    },
    name: "Example Product",
    salePrice: "20.00",
    regularPrice: "25.00",
    price: "20.00",
    stockQuantity: 10,
    allPaColors: {
      nodes: [
        { name: "Red" },
        { name: "Blue" }
      ]
    },
    allPaSizes: {
      nodes: [
        { name: "Small" },
        { name: "Medium" },
        { name: "Large" }
      ]
    },
    variations: {
      nodes: [
        {
          id: "1",
          databaseId: "1",
          name: "Red Small",
          stockStatus: "IN_STOCK",
          stockQuantity: 5,
          purchasable: true,
          onSale: false,
          salePrice: "0.00",
          regularPrice: "20.00"
        },
        {
          id: "2",
          databaseId: "2",
          name: "Red Medium",
          stockStatus: "OUT_OF_STOCK",
          stockQuantity: 0,
          purchasable: false,
          onSale: false,
          salePrice: "0.00",
          regularPrice: "20.00"
        },
        {
          id: "3",
          databaseId: "3",
          name: "Red Large",
          stockStatus: "IN_STOCK",
          stockQuantity: 3,
          purchasable: true,
          onSale: true,
          salePrice: "15.00",
          regularPrice: "20.00"
        },
        {
          id: "4",
          databaseId: "4",
          name: "Blue Small",
          stockStatus: "IN_STOCK",
          stockQuantity: 2,
          purchasable: true,
          onSale: false,
          salePrice: "0.00",
          regularPrice: "20.00"
        },
        {
          id: "5",
          databaseId: "5",
          name: "Blue Medium",
          stockStatus: "IN_STOCK",
          stockQuantity: 7,
          purchasable: true,
          onSale: true,
          salePrice: "18.00",
          regularPrice: "20.00"
        },
        {
          id: "6",
          databaseId: "6",
          name: "Blue Large",
          stockStatus: "IN_STOCK",
          stockQuantity: 1,
          purchasable: true,
          onSale: false,
          salePrice: "0.00",
          regularPrice: "20.00"
        }
      ]
    }
  };


  return NextResponse.json({ product });
}




/*

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  try {
    // Execute a consulta GraphQL usando o Apollo Client
    const { data } = await client.query({
      query: GET_SINGLE_PRODUCT,
      variables: { id },
    });

    return NextResponse.json(data);

  } catch (error) {
    return NextResponse.json(`${error} Erro ao obter os dados do produto.`);
  }


}
*/