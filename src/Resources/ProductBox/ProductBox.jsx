import './ProductBox.css'
import Moto from '../img/Moto.png'

export default function IntroBox() {
    return (
        <>
            <div className="Product-box">
                <div className="main-desc">
                    <div>
                        <img src={Moto} width={320} height={250}
                        style={{}}
                        />
                    </div>
                    <div className="product-desc">
                        <h4>Мотоцикл эндуро PROGASI PALMA 300 Blue</h4>
                    </div>
                </div>
                <div className="latest-desc">
                    <h1 style={{ color: "" }}>184 990 ₽</h1>
                    <p>Бренд — KEWS</p>
                    <p style={{ marginBottom: "10px" }}>В наличии</p>
                    <button>Заказать</button>
                </div>
            </div>
        </>
    )
}