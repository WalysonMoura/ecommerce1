'use client';
import * as Style from "./styles"

export function InformationBar() {
    return (
        <Style.InformationBar>
            <Style.DiscountText>
                Oferta Imperdível: <strong>Economize 5%</strong> com Pagamentos em
                <strong> PIX!</strong>
            </Style.DiscountText>
        </Style.InformationBar>
    )
}