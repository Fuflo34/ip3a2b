import logo from '../img/logo.svg'

import './Header.css'

export default function Header() {
    return (
        <>
            <div className="header-box">
                <div className="logotype">
                    <img src={logo} alt="" width={42} />
                    <h3 className="NameLogo" style={{ marginLeft: "10px" }}>Филин</h3>
                </div>
                <div>
                    <input className="header_input" type="text" placeholder='Поиск' /> <br />
                </div>
                <div className="navigation">
                    <a href="" style={{ marginRight: "10px" }} className="nav-link">Личный кабинет</a>
                    <a href="" className="nav-link">Обратная связь</a>
                </div>
            </div>
        </>
    )
}