import styles from './styles/studies.module.css'
const Studies = ()=>{
    return(
        <div className={styles.container}>
            <div>
                <h4 className={styles.tittleBootcamp}>Soy Henry</h4>
                <p>Soy estudiante avanzado del este bootcamp, estando en la etapa final del curso. <br />
                    El mismo consta de 4 módulos donde se ve un panorama general de un Full-Stack developer:
                    <ul>
                        <li>
                            Módulos 1: &nbsp;Nos enseñan toda la lógica de programación, viendo distintos tipos de estructuras de datos como <b>listas 
                            enlazadas</b>, <b>árboles binarios </b>, <b>pilas</b>. Muchas otras cosas más.
                        </li>
                        <br />
                        <li>
                            Módulos 2: &nbsp;En este módulo vemos en la librería <b>React JS</b>, donde se acostumbra a trabajar centralizando el estado con <b>Redux</b>.
                        </li>
                        <br />
                        <li>
                            Módulos 3 y 4: &nbsp; Trabajamos con <b>Node JS, Express, Sequelize y postgreSQL</b> para <b>crear un servidor</b> con el cual poder efectuar respuestas válidas a las peticiones del cliente. Este servidor consulta a una base de datos creada con SQL.
                        </li>
                    </ul>
                </p>
            </div>
            <div>
                <h4 className={styles.tittleUniversity}>Universidad Nacional Santiago Del Estero</h4>
                <p>Estudiante avanzado <b>Ingeniería Electrónica</b>. En esta carrera se vio el tema de programación de micro-controladores Pic.</p>
            </div>
        </div>
    )
}

export default Studies;