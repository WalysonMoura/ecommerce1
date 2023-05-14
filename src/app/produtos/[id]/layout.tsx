'use client'

import { CartContext } from "@/contexts/CartProvider";
import { getFormattedCart } from "@/utils/functions/functions";
import { GET_CART } from "@/utils/gql/GQL_QUERIES";
import { useQuery } from "@apollo/client";
import { useContext, useEffect } from "react";

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function ProductLayout({ children }: RootLayoutProps) {
    const { setCart } = useContext(CartContext);

    const { data, refetch } = useQuery(GET_CART, {
        notifyOnNetworkStatusChange: true,
        onCompleted: () => {
            // Update cart in the localStorage.
            const updatedCart = getFormattedCart(data);

            if (!updatedCart && !data?.cart?.contents?.nodes.length) {
                // Should we clear the localStorage if we have no remote cart?

                return;
            }

            localStorage.setItem('woocommerce-cart', JSON.stringify(updatedCart));

            // Update cart data in React Context.
            setCart(updatedCart);
        },
    });

    useEffect(() => {
        refetch();
    }, [refetch]);

    return (
        <>
            {children}
        </>
    )
}
