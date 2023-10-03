import Banner from "./banner";
import Menu from "./menu";
import PizzaList from "./pizzaList";

const App = () => {
    return (
        <>
        <div style={{background: "#CB240C", color: "#31711E"}}>
            <Banner headerText="Order Delicious Pizza Now!"/>
        </div>
        <div style={{background:"#31711E", color: "#CB240C"}}>
            <PizzaList />
            <Menu />
        </div>
        </>
    );
};

export default App;