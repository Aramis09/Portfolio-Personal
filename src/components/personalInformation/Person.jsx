import style from './styles/person.module.css';
import personal_image from './styles/images/personal_image2.jpg';
const Person = props =>{
    return (
        <div className={style.container}>
            <div>
                <h4>Aramis Sebastian Jaime</h4>
                <div className={style.textImage}>    
                    <p>
                        Hola, soy desarrollador web <b>Full-Stack</b>, vivo en la provincia de Santiago Del Estero - Argentina.  Soy estudiante en busca de un trabajo tiempo completo, actualmente manejo diversas tecnologías relacionadas con <b>JavaScript</b> y orientado al Desarrollo web <br />
                        <br />
                        Front-End:&nbsp; <b>React JS</b>, &nbsp;<b>Redux</b>, &nbsp;<b>Html</b>, &nbsp;<b> CSS</b>. <br />
                        <br />
                        Back-End:&nbsp; <b>Node JS</b>, &nbsp;<b>Express</b>, &nbsp;<b>Sequelize</b>,&nbsp; <b>PostgreSQL</b>, &nbsp;<b>pgAdmin</b>.
                        <br />
                        <br />
                        Haciendo uso de las mismas soy capaz de crear desde cero una página web (SPA), a su vez estoy en constante aprendizaje de otras librerías que puedan ayudar a complementar los proyectos. <br />
                        <br />
                        
                    </p>
                    
                    <img src={personal_image} alt="person_image" />
                </div>
            </div>
        </div>
    );
};

export default Person;