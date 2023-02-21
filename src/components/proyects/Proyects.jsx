import styles from './styles/proyect.module.css';
const Proyects = props =>{
    return (
        <section className={styles.container}>
            <div>
                <h4>Experiencia relacionada con Soft-Skills</h4>
                <p>Trabajo en Equipo:</p>
                <p>
                    <ul>
                        <li>
                            <strong>Henry Hero:</strong> &nbsp; Fui parte de este grupo de personas que se organiza para llevar a cabo la enseñanza de los alumnos ingresantes de Soy henry (<b>8 semanas</b>). <br /> Este trabajo requería conocer la disciplina en cuanto a programación, si no además las habilidades didácticas de transferencia, coordinación para ser aplicadas en grupos números.
                           
                        </li>
                        <br />
                        <li>
                            <strong>Ayudante de Segunda:</strong> &nbsp; En este cargo dicté parte de la materia de Física en la Universidad. Estuve <b>2 años</b> &nbsp; (seleccionado por concurso y orden de mérito) &nbsp; trabajando en un equipo cátedra, <b>coordinando y aprendiendo</b> con superiores e de igual cargo para brindar enseñanza.
                        </li>
                    </ul>
                </p>
            </div>
            <div>
                <h4>Experiencia relacionada con Programación</h4>
                <p>
                   <strong>Individual Proyect:</strong>  &nbsp; Esto es la penúltima etapa del bootcamp 'Soy Henry', que consta del desarrollo de una
                    página web desde cero de forma individual. <br />
                    Link: <b> https://proyectodogs.netlify.app/</b>
                    <ul>
                       <li> Cliente: &nbsp; Creado en su totalidad con <b>React Js</b>, manejando un estado centralizado con <b>Redux</b>.</li>
                                    <br />
                        <li>Servidor: &nbsp; Desarrollado con <b>Node Js, Express y utilizando el ORM Sequelize</b>.</li>
                        <br />
                        <li>Base de Datos: &nbsp; Se utilizó <b> postgreSQL</b> para su creacion y también se trabajó con <b>pgAdmin</b>.</li>
                    </ul>
                    
                </p>
                <p>
                    <strong>Programación de micro-controladores:</strong> &nbsp;  Se desarrolló algunos proyectos sencillos en el lenguaje de bajo nivel &nbsp;  'Ensamblador - Assembler' con micro-controladores de la empresa PIC . <br />
                    Todo esto fue llevado a cabo en la universidad nacional de mi provincia.
                </p>
            </div>
        </section>
    );
};

export default Proyects;