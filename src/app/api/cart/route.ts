import { NextRequest, NextResponse } from "next/server";



const { WOOCOMMERCE_CONSUMER_KEY, WOOCOMMERCE_GRAPHQL_URL } = process.env;


export async function GET(request: NextRequest) {
  const cartData = {
    cart: {
      contents: {
        nodes: [
          {
            key: 'cart_item_1',
            product: {
              node: {
                id: '1',
                databaseId: 1,
                name: 'Product 1',
                description: 'Description of product 1',
                type: 'simple',
                onSale: false,
                slug: 'product-1',
                averageRating: 4.5,
                reviewCount: 10,
                image: {
                  id: 'image_1',
                  sourceUrl: 'https://via.placeholder.com/150',
                  srcSet: '',
                  altText: 'Product 1 Image',
                  title: 'Product 1 Image',
                },
                galleryImages: {
                  nodes: [],
                },
              },
            },
            variation: {
              node: null,
            },
            quantity: 2,
            total: '20.00',
            subtotal: '20.00',
            subtotalTax: '2.00',
          },
          {
            key: 'cart_item_2',
            product: {
              node: {
                id: '2',
                databaseId: 2,
                name: 'Product 2',
                description: 'Description of product 2',
                type: 'variable',
                onSale: true,
                slug: 'product-2',
                averageRating: 3.5,
                reviewCount: 5,
                image: {
                  id: 'image_2',
                  sourceUrl: 'https://via.placeholder.com/150',
                  srcSet: '',
                  altText: 'Product 2 Image',
                  title: 'Product 2 Image',
                },
                galleryImages: {
                  nodes: [
                    {
                      id: 'image_2_1',
                      sourceUrl: 'https://via.placeholder.com/150',
                      srcSet: '',
                      altText: 'Product 2 Image 1',
                      title: 'Product 2 Image 1',
                    },
                    {
                      id: 'image_2_2',
                      sourceUrl: 'https://via.placeholder.com/150',
                      srcSet: '',
                      altText: 'Product 2 Image 2',
                      title: 'Product 2 Image 2',
                    },
                  ],
                },
              },
            },
            variation: {
              node: {
                id: 'variation_2_1',
                databaseId: 3,
                name: 'Product 2 - Variation 1',
                description: 'Description of product 2 variation 1',
                type: 'variation',
                onSale: true,
                price: '15.00',
                regularPrice: '20.00',
                salePrice: '15.00',
                image: {
                  id: 'image_2_1',
                  sourceUrl: 'https://via.placeholder.com/150',
                  srcSet: '',
                  altText: 'Product 2 Variation 1 Image',
                  title: 'Product 2 Variation 1 Image',
                },
                attributes: {
                  nodes: [
                    {
                      id: 'attribute_1',
                      name: 'Color',
                      value: 'Blue',
                    },
                    {
                      id: 'attribute_2',
                      name: 'Size',
                      value: 'Small',
                    },
                  ],
                },
              },
            },
            quantity: 1,
            total: '15.00',
            subtotal: '20.00',
            subtotalTax: '2.00',
          },
        ],
      },
      subtotal: '35.00',
      subtotalTax: '2.00',
      shippingTax: '0.00',
      shippingTotal: '0.00',
      total: '35.00',
      totalTax: '2.00',
      feeTax: '0.00',
      feeTotal: '0.00',
      discountTax: '0.00',
      discountTotal: '0.00',
    },
  };

  return NextResponse.json({ cartData });
}






