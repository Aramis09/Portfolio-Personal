import styles from './styles/contacts.module.css'

const Contact = props =>{
    
    const openNewTab = (id) => {
        const link = document.getElementById(id).textContent;
        console.log(link)
        window.open(link, '_blank');

     };
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <h4>Teléfono:</h4>
                <p>+54 9 385 6886004</p>
            </div>
            <div className={styles.info}>
                <h4>WhatsApp</h4>
                <p id = 'wpp' onClick={()=>openNewTab('wpp')}>https://wa.me/5493856886004</p>
            </div>
            <div className={styles.info}>
                <h4>LinkedIn</h4>
                <p id ='In' onClick={()=>openNewTab('In')}>https://www.linkedin.com/in/AramisDev/</p>
            </div>
            <div className={styles.info}>
                <h4>Mail</h4>
                <p>aramisjaime48@gmail.com</p>  
            </div>
            <div className={styles.info}>
                <h4>GitHub</h4>
                <p id = 'Git' onClick={()=>openNewTab('Git')}>https://www.github.com/Aramis09</p>
            </div>
        </div>
    );
};

export default Contact;