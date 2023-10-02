import styles from './menu.module.css'

const Menu = () => {
    return (
        <div className={styles.listContainer}>
            <div className='col-4 text-center'>
                <ul className={styles.list && styles.text}>
                    <li>Chicken</li>
                    <li>Tandoori Chicken</li>
                    <li>Sweet Corn</li>
                </ul>
            </div>
            <div className='col-4 text-center'>
                <ul className={styles.list && styles.text}>
                    <li>Something1</li>
                    <li>Something1</li>
                    <li>Something1</li>
                </ul>
            </div>
            <div className='col-4 text-center'>
                <ul className={styles.list && styles.text}>
                    <li>Something2</li>
                    <li>Something2</li>
                    <li>Something2</li>
                </ul>
            </div>
        </div>
    );
};

export default Menu;