import { NextRequest,NextResponse } from "next/server";

const { WOOCOMMERCE_CONSUMER_KEY,WOOCOMMERCE_GRAPHQL_URL } = process.env;


export async function GET(request: NextRequest) {
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
