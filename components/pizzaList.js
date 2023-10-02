import styles from './banner.module.css'
import stylesTwo from './menu.module.css'



const PizzaList = () => {
    return (
        <div className={styles.bgColour}>
            <div className={styles.bannerFont}>
                <div className="row">
                    <h5 className="themeFontColor text-center">Many Delicious Options</h5>
                </div>
                <table className="table table-hover">
                    <thead className="text-center">
                        <tr className={styles.bannerFont} style={{background: "#CB240C"}}>
                            <th>Pizza</th>
                            <th>Sides</th>
                            <th>Beverages</th>
                        </tr>
                    </thead>
                    <tbody className={stylesTwo.text}>
                        <tr>
                            <td>Select toppings</td>
                            <td>Select sides</td>
                            <td>Select drinks</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PizzaList;