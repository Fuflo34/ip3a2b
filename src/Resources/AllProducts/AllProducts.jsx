import './AllProducts.css'

import ProductBox from '../ProductBox/ProductBox.jsx'

export default function Productsbox({header}) {
    return (
        <>
            <div className="Products-box">
                <h1>{header}</h1>
                <div className="grid-product">
                <ProductBox />
                <ProductBox />
                <ProductBox />
                <ProductBox />
                <ProductBox />
                </div>
            </div>
        </>
    )
}