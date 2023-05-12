import * as Style from "./styles"

export function InformationBar() {
    return (
        <Style.InformationBar>
            <Style.DiscountText> <span role="img" aria-label="party-popper">
                🎉
            </span>{' '}
                Oferta Imperdível: Economize 5% com Pagamentos em PIX! {' '}
                <span role="img" aria-label="party-popper">
                    🎉
                </span></Style.DiscountText>

        </Style.InformationBar>
    );
};