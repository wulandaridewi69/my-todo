import Image from 'next/image';
import styles from '../styles/activities.module.scss';


const Activities = (props) => {

    return (
        <div className={styles.activities}>
            {props.data.result.map((item) => {
                return <div key={item.id}>
                    <a href={item.link}>
                        <Image className={styles.picture} src={item.image} />
                        <h5 className={styles.title}>{item.title}</h5>
                        <p>{item.description}</p>
                    </a>
                </div>

            })};
        </div>
    );
}

export default Activities;