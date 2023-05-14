'use client'
/*eslint complexity: ["error", 20]*/
// Imports
import { useState, useEffect, Suspense } from 'react';

// Styles
import * as Styles from "./styles";

// Utils
import { filteredVariantPrice, paddedPrice } from '@/utils/functions/functions';

// Components
import Image from 'next/image';
import AddToCart, { IProductRootObject } from '@/components/ProductComponents/AddToCart';
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner';
import { calculateDiscount } from '@/utils/calculateDiscount';


function SkeletonProduct() {
    return (
        <Styles.SkeletonProduct>

        </Styles.SkeletonProduct>
    )
}



const SingleProduct = ({ product }: IProductRootObject) => {

    const [selectedVariation, setSelectedVariation] = useState<number>();
    let DESCRIPTION_WITHOUT_HTML;

    useEffect(() => {
        if (product.variations) {
            const firstVariant = product.variations.nodes[0].databaseId;
            setSelectedVariation(firstVariant);
        }
    }, [product.variations]);

    let { description, image, name, onSale, price, regularPrice, salePrice } =
        product;

    // Adicione preenchimento/caractere vazio após o símbolo de moeda aqui
    if (price) {
        price = paddedPrice(price, 'kr');
    }
    if (regularPrice) {
        regularPrice = paddedPrice(regularPrice, 'kr');
    }
    if (salePrice) {
        salePrice = paddedPrice(salePrice, 'kr');
    }

    // Retire o HTML da descrição
    if (process.browser) {
        DESCRIPTION_WITHOUT_HTML = new DOMParser().parseFromString(
            description,
            'text/html'
        ).body.textContent;
    }

    const placeholderFallBack = 'https://via.placeholder.com/600';

    return (
        <Suspense fallback={<SkeletonProduct />}>
            <section className="py-8 bg-white">
                <div className="container flex flex-wrap items-center pt-4 pb-12 mx-auto ">
                    <div className="grid grid-cols-1 gap-4 mt-16 lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
                        {image && (
                            <Image
                                id="product-image"
                                src={image.sourceUrl}
                                alt={name}
                                className="h-auto p-8 transition duration-500 ease-in-out transform xl:p-2 md:p-2 lg:p-2 hover:grow hover:scale-105"
                            />
                        )}
                        {!image && (
                            <Image
                                id="product-image"
                                src={
                                    process.env.NEXT_PUBLIC_PLACEHOLDER_LARGE_IMAGE_URL ??
                                    placeholderFallBack
                                }
                                alt={name}
                                className="h-auto p-8 transition duration-500 ease-in-out transform xl:p-2 md:p-2 lg:p-2 hover:grow hover:shadow-lg hover:scale-105"
                            />
                        )}
                        <div className="ml-8">
                            <p className="text-3xl font-bold text-left">{name}</p>
                            <br />

                            {/* Exibir preço de venda quando em promoção */}
                            {onSale && (
                                <Styles.Promotion>
                                    <Styles.Price>
                                        {product.variations && filteredVariantPrice(price, '')}
                                        {!product.variations && salePrice}
                                    </Styles.Price>
                                    <Styles.DiscountPrice>
                                        {product.variations && filteredVariantPrice(price, 'right')}
                                        {!product.variations && regularPrice}
                                    </Styles.DiscountPrice>
                                    {salePrice && regularPrice && (
                                        <Styles.DiscountPercentage>
                                            {calculateDiscount(salePrice, regularPrice).discountPercentage.toFixed(2)}% off
                                        </Styles.DiscountPercentage>
                                    )}
                                </Styles.Promotion>
                            )}

                            {/* Exibir preço normal quando não estiver à venda */}
                            {!onSale && (
                                <p className="pt-1 mt-4 text-2xl text-gray-900"> {price}</p>
                            )}
                            <br />
                            <p className="pt-1 mt-4 text-2xl text-gray-900">
                                {DESCRIPTION_WITHOUT_HTML}
                            </p>
                            {Boolean(product.stockQuantity) && (
                                <p
                                    v-if="data.product.stockQuantity"
                                    className="pt-1 mt-4 mb-4 text-2xl text-gray-900"
                                >
                                    {product.stockQuantity} på lager
                                </p>
                            )}
                            {product.variations && (
                                <p className="pt-1 mt-4 text-xl text-gray-900">
                                    <span className="py-2">Varianter</span>
                                    <select
                                        id="variant"
                                        name="variant"
                                        className="block w-80 px-6 py-2 bg-white border border-gray-500 rounded-lg focus:outline-none focus:shadow-outline"
                                        onChange={(e) => {
                                            setSelectedVariation(Number(e.target.value));
                                        }}
                                    >
                                        {product.variations.nodes.map(
                                            ({ id, name, databaseId, stockQuantity }) => {
                                                // Remove product name from variation name
                                                const filteredName = name.split('- ').pop();
                                                return (
                                                    <option key={id} value={databaseId}>
                                                        {filteredName} - ({stockQuantity} på lager)
                                                    </option>
                                                );
                                            }
                                        )}
                                    </select>
                                </p>
                            )}
                            <div className="pt-1 mt-2">
                                {
                                    // Exibe o botão AddToCart padrão se não tivermos variações. 
                                    // Se o fizermos, envie o variationId para o botão AddToCart
                                }
                                {product.variations && (
                                    <AddToCart
                                        product={product}
                                        variationId={selectedVariation}
                                    />
                                )}
                                {!product.variations && <AddToCart product={product} />}
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </Suspense>
    );
};

export default SingleProduct;