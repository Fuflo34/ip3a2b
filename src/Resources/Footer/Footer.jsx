import CallBack from '../CallBack/CallBack'
import './footer.css'

export default function Footer() {
    return (
        <>
            <div className="footer-box">
                <div className="box-contact">
                    <div className="Help" style={{marginBottom: "10px"}}>
                        <h2 style={{ color: "#fff" }}>Как нас найти -</h2>
                        <p style={{ color: "#fff", marginTop: "10px" }}> г. Москва, ул. 5-я кабельная, д. 2 стр. 1 </p>
                    </div>
                    <div className="footer-contacts-block">
                        <h2 style={{ color: "#fff" }}>Наши контакты</h2>
                        <p style={{ color: "#fff", marginTop: "10px" }}>Телефон: +7(999)-148-54-66</p>
                        <p style={{ color: "#fff", marginTop: "10px" }}>Почта: info@fillin1422.ru</p>
                    </div>
                </div>
                <CallBack />
            </div>
        </>
    )
}