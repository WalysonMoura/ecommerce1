import { NextRequest,NextResponse } from "next/server";



const { WOOCOMMERCE_CONSUMER_KEY,WOOCOMMERCE_GRAPHQL_URL } = process.env;


export async function GET(request: NextRequest) {
  const categories = [
    { id: '1', name: 'Category 1', slug: 'category-1' },
    { id: '2', name: 'Category 2', slug: 'category-2' },
  ];
  
  const allcategories = await categories.json();
 
  return NextResponse.json({ allcategories });
}






