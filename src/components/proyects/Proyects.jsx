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
                            <strong>Henry Hero:</strong> &nbsp; Fui parte de este grupo de personas que se organiza para llevar a cabo la enseñanza de los alumnos ingresantes de Soy henry (<b>8 semanas</b>). <br /> Este trabajo requeria conocer la disciplina en cuanto a programacion, sino ademas las habilidades didacticas de transferencia, coordinacion para ser aplicadas en grupos numeros.
                           
                        </li>
                        <br />
                        <li>
                            <strong>Ayudante de Segunda:</strong> &nbsp; En este cargo dicte parte de la materia de Fisica en la Universidad. Estuve <b>2 años</b> &nbsp; (seleccionado por concurso y orden de merito) &nbsp; trabajando en un equipo catedra, <b>coordinando y aprendiendo</b> con superiores e de igual cargo para brindar enseñanza.
                        </li>
                    </ul>
                </p>
            </div>
            <div>
                <h4>Experiencia relacionada con Programacion</h4>
                <p>
                   <strong>Individual Proyect:</strong>  &nbsp; Esto es la penultima etapa del Bootcamp soy henry, que consta del desarrollo de una
                    pagina web desde cero de forma individual. <br />
                    Link: <b> https://proyectodogs.netlify.app/</b>
                    <ul>
                       <li> Cliente: &nbsp; Creado en su totalidad con <b>React Js</b>, manejando un estado centralizado con <b>Redux</b>.</li>
                                    <br />
                        <li>Servidor: &nbsp; Desarrollado con <b>Node Js, Express y utilizando el ORM Sequelize</b>.</li>
                        <br />
                        <li>Base de Datos: &nbsp; Se utilizo <b> postgreSQL</b> para su creacion y tambien se trabajo con <b>pgAdmin</b>.</li>
                    </ul>
                    
                </p>
                <p>
                    <strong>Programacion de micro-controladores:</strong> &nbsp;  Se desarrollo algunos proyectos sencillos en el lenguaje de bajo nivel &nbsp;  'Ensamblador - Assembler' con micro-controladores de la empresa PIC . <br />
                    Todo esto fue llevado a cabo en la univerdad nacial de mi provincia.
                </p>
            </div>
        </section>
    );
};

export default Proyects;