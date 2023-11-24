import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import HomePage from "./pages/home-page/home-page";
import Header from "./components/header/header";
import ProductPage from "./pages/product-page/product-page";
import OrderPage from "./pages/order-page/order-page";

function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <Routes>
                    <Route path="/" element={<HomePage />}/>
                </Routes>
                <Routes>
                    <Route path="/app/:id" element={<ProductPage />}/>
                </Routes>
                <Routes>
                    <Route path="/order" element={<OrderPage />}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
