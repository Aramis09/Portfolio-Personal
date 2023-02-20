import { Link } from "react-router-dom";
import style from './styles/aside.module.css';
import icon_person from './styles/images/icon_person.png';
import icon_goals from './styles/images/icon_goals.png';
import icon_studies from './styles/images/icon_studies.png';
import icon_experience from './styles/images/icon_experience.png';
import icon_redes from './styles/images/icon_redes.png';
const Aside = props =>{
    return (
        <div className={style.asideBackground}>
            <Link to = '/person'>
                <div className={style.questions}>
                    <img src={icon_person} alt="" />
                    <h4>Quien Soy ?</h4>
                </div>
            </Link>
            <Link to = '/goals'>
                <div className={style.questions}>
                    <img src={icon_goals} alt="" />
                    <h4>Cuales son mis objetivos ?</h4>
                </div>
            </Link>
            <Link to = '/studies'>
                <div className={style.questions}>
                    <img src={icon_studies} alt="" />
                    <h4>Como fue mi formacion ?</h4>
                </div>
            </Link>

            <Link to = '/proyects'>
                <div className={style.questions}>
                    <img src={icon_experience} alt="" />
                    <h4>Cual es mi experiencia ?</h4>
                </div>
            </Link>
            <Link to = '/contact'>
                <div className={style.questions}>
                    <img src={icon_redes} alt="" />
                    <h4>Como puede contactarme ?</h4>
                </div>
            </Link>
        </div>
    );
};

export default Aside;