import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./Components/ProductDetails";
import Cart from './Components/Cart'

import Login from "./Components/Authentication/Login";
import { Box } from "@mui/material";
import Checkoutpage from "./Components/Checkoutpage";

function App() {
  return (
    <>
      <Box>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/product/:product_name/:product_id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/checkoutpage" element={<Checkoutpage />} />
          
        </Routes>
      </Box>
    </>

  );
}

export default App;
