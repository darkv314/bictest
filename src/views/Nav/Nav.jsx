import GamsLogoH from "../../assets/logos/gamsH.png";
import BicentenarioLogoH from "../../assets/logos/bicH.png";
import GamsLogoV from "../../assets/logos/gamsV.png";
import BicentenarioLogoV from "../../assets/logos/bicV.png";

import "./Nav.css";
import { useWindowWidth } from "@react-hook/window-size";
import { Link } from "react-router-dom";

function Nav() {
    const linksList = [
        {
            path: "/info-turistica",
            name: "Turismo",
        },
        {
            path: "/formacion",
            name: "Formación",
        },
    ];
    const width = useWindowWidth();
    return (
        <nav>
            <div className="nav-icons">
                <NavImg
                    alt={"Logo GAMS"}
                    hsrc={GamsLogoH}
                    vsrc={GamsLogoV}
                    imgClass={"nav-img-container"}
                    width={width}
                    to={"/"}
                />
                <NavImg
                    alt={"Logo Bicentenario"}
                    hsrc={BicentenarioLogoH}
                    vsrc={BicentenarioLogoV}
                    imgClass={"nav-img-container"}
                    width={width}
                    to={"/"}
                />
            </div>
            <div className="nav-links">
                {linksList.map((link) => (
                    <Link key={link.path} to={link.path}>
                        {link.name}
                    </Link>
                ))}
            </div>
        </nav>
    );
}

export default Nav;

function NavImg({ hsrc, vsrc, imgClass, alt, width, to }) {
    return (
        <div className={imgClass}>
            <Link to={to}>
                <img src={width <= 500 ? vsrc : hsrc} alt={alt} />
            </Link>
        </div>
    );
}
