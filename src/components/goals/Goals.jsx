import styles from  './styles/goals.module.css';

const Goals =()=>{

    return (
        <div className={styles.container}>
            <div>
                <h4>Objetivos de Trabajo</h4>
                <p>
                    <ul>
                        <li>Libertad de trabajar de <b>forma remota</b> desde mi pais hacia otros paises.</li>
                        <br />
                        <li>Capacidad de <b>crecimiento personal</b> en la empresa a nivel de conocimientos y sueldo. </li>
                        <br />
                        <li><b>Buen ambiente laboral</b> en el equipo de trabajo. Siempre estoy dispuesto a brindar lo mejor de mi persona.</li>
                        <br />
                        <li>Posibilidad de pedir ayuda y de bridar ayuda siempre que se lo requiera.</li>
                        <br />
  
                        <label htmlFor=""></label>
                    </ul>
                </p>
            </div>

            <div>
                <h4>Objetivos Personales</h4>
                <p>
                    <ul>
                        <li>
                            Posibilidad de conocer la empresa, sin importar el pais (No somos solo un microfono y una video-camara, siempre <b>me interesa conocer a mis compañeros</b>).
                        </li>
                        <br />
                        <li>
                            Tener una vida sana viviendo de la programacion.
                        </li>
                        <br />
                        <li>
                            LLegar a ser senior developer JavaScript.
                        </li>
                    </ul>
                </p>
            </div>
        </div>
    );
};

export default Goals;