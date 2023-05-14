import { NextRequest, NextResponse } from "next/server";

import { GET_SINGLE_PRODUCT } from '@/utils/gql/GQL_QUERIES';
import client from '@/utils/apollo/ApolloClient';


const { WOOCOMMERCE_CONSUMER_KEY, WOOCOMMERCE_GRAPHQL_URL } = process.env;

export async function GET( request: Request,
    {
      params,
    }: {
      params: { id: string };
    },) {
        const id = params.id; 

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
