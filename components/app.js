import Banner from "./banner";
import Menu from "./menu";
import PizzaList from "./pizzaList";

const App = () => {
    return (
        <div>
            <Banner headerText="Order Delicious Pizza Now!"/>
            <PizzaList />
            <Menu />
        </div>
    );
};

export default App;