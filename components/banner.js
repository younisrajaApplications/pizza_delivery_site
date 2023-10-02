import styles from "./banner.module.css"

const Banner = (props) => {
    return (
        <div className={styles.bgColour}>
            <header className="row">
                <div className="col-5">
                    <img src="./PizzaDeliveryLogo.png" alt="logo" className={styles.logo}/>
                </div>
                <div className="col-7 mt-5">
                    <div className={styles.bannerFont}>
                        <h4>{props.headerText}</h4>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Banner;
