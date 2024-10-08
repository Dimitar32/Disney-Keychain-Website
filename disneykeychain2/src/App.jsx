import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import GeneralInfo from './components/GeneralInfo/GeneralInfo';
import Products from './components/Products/Products';
import ProductDetails from './components/ProductDetails/ProductDetails'; // Страница за детайлите на продуктите
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import './App.css'; // Глобални стилове
import OrderForm from './components/OrderForm/OrderForm';
 
function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <GeneralInfo />
                <Products />
                <OrderForm />
                <FAQ />
                <Footer />
            </div>
        </Router>
    );
}

export default App;

