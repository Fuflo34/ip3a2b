import './CallBack.css'

export default function CallBack() {
    return (
        <>
            <div className="CallBack-box">
                <h2 style={{ color: "#fff" }}>Форма обратной связи</h2>
                <input style={{marginBottom: "10px"}} type="text" placeholder='Ваше ФИО' />
                <input style={{marginBottom: "10px"}} type="text" placeholder='Ваша почта' />
                <h4  style={{marginBottom: "10px", color: "#fff"}} >Причина обращения</h4>
                <select id="WhyCallBack" style={{marginBottom: "10px"}} >
                    <option value="ProductBack">Возврат товара</option>
                    <option value="IncorrectProduct">Попался брак</option>
                    <option value="IncorrectProduct">Выполнить обслуживание</option>
                    <option value="IncorrectProduct">Нужна консультация</option>
                </select>
                <button>Отправить</button>
            </div>
        </>
    )
}