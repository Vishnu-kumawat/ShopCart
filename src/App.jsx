// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from "../components/Header";
// import Cart from '../components/Cart';
// import Checkout from '../components/Checkout';
// import FilteredProduct from '../components/FilterProduct';
// import Login from '../components/Login';
// import Register from '../components/Register';
// import { useState, useEffect } from 'react';
// import Footer from '../components/Footer';
// import Banner from '../components/Banner';
// import TopCategory from '../components/TopCategory';

// function HomePage({ products }) {
//   return (
//     <div>
//       <Banner products={products} />
//       <TopCategory products={products}/>
//     </div>
//   );
// }

// function App() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showLogin, setShowLogin] = useState(false);
//   const [showRegister, setShowRegister] = useState(false);

//   const openLogin = () => {
//     setShowLogin(true);
//     setShowRegister(false);
//   };

//   const openSignUp = () => {
//     setShowRegister(true);
//     setShowLogin(false);
//   };

//   const closeModals = () => {
//     setShowLogin(false);
//     setShowRegister(false);
//   };

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const response = await fetch('https://fakestoreapi.com/products');
//       const data = await response.json();
//       setProducts(data);
//       setLoading(false);
//     };

//     fetchProducts();
//   }, []);


//   return (
//     <Router>
//       <Header openLogin={openLogin} openSignUp={openSignUp} />
//       <Routes>
//         <Route path="/" element={<HomePage products={products} />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/checkout" element={<Checkout />} />
//         <Route path="/filtered-product" element={<FilteredProduct products={products} />} />
//         <Route path="/login" element={<Login openSignUp={openSignUp} />} />
//         <Route path="/register" element={<Register openLogin={openLogin} />} />
//       </Routes>
//       <Footer />

//       {showLogin && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-5 rounded-lg">
//             <Login openSignUp={openSignUp} />
//             <button onClick={closeModals} className="mt-4 text-red-500">Close</button>
//           </div>
//         </div>
//       )}
//       {showRegister && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-5 rounded-lg">
//             <Register openLogin={openLogin} />
//             <button onClick={closeModals} className="mt-4 text-red-500">Close</button>
//           </div>
//         </div>
//       )}
//     </Router>
//   );
// }

// export default App;


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "../components/Header";
import { useState } from 'react';
import Cart from '../components/Cart';
import Checkout from '../components/Checkout';
import FilteredProduct from '../components/FilterProduct';
import Login from '../components/Login';
import Register from '../components/Register';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import TopCategory from '../components/TopCategory';
import useFetchProducts from '../Hooks/useFetchProjuct';
import PromotedDeals from '../components/products/PromotedDeals';
import WeeklyProducts from '../components/products/WeeklyProducts';
import TodaysDeal from '../components/products/TodaysDeal';
import MostSelling from '../components/products/MostSelling';
import ChooseByBrand from '../components/products/ChooseByBrand';
import GetDiscount from '../components/products/GetDiscount';
import CashBack from '../components/CashBack';
import TrendingProduct from '../components/TrendingProduct';
import ServiceHelp from '../components/ServiceHelp';

function HomePage({ products }) {
  return (
    <div>
      <Banner products={products} />
      <TopCategory products={products} />
      <PromotedDeals/>
      <ChooseByBrand/>
      <GetDiscount/>
      <WeeklyProducts/>
      <CashBack/>
      <TodaysDeal/>
      <TrendingProduct/>
      <MostSelling/>
      <ServiceHelp/>
    </div>
  );
}

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const openLogin = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const openSignUp = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  const closeModals = () => {
    setShowLogin(false);
    setShowRegister(false);
  };

  // Use the custom hook to fetch products
  const { products, loading, error } = useFetchProducts();

  return (
    <Router>
      <Header openLogin={openLogin} openSignUp={openSignUp} />
      <Routes>
        <Route path="/" element={<HomePage products={products} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/filtered-product" element={<FilteredProduct products={products} />} />
        <Route path="/login" element={<Login openSignUp={openSignUp} />} />
        <Route path="/register" element={<Register openLogin={openLogin} />} />
      </Routes>
      <Footer />

      {/* Loading and Error handling */}
      {loading && <p>Loading products...</p>}
      {error && <p>{error}</p>}

      {/* Modal for Login */}
      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded-lg">
            <Login openSignUp={openSignUp} />
            <button onClick={closeModals} className="mt-4 text-red-500">Close</button>
          </div>
        </div>
      )}

      {/* Modal for Register */}
      {showRegister && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded-lg">
            <Register openLogin={openLogin} />
            <button onClick={closeModals} className="mt-4 text-red-500">Close</button>
          </div>
        </div>
      )}
    </Router>
  );
}

export default App;
