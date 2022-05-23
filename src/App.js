import { useState } from "react";
import { Layout } from "antd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RestaurantPage from "./components/RestaurantPage";
import RestaurantList from "./components/RestaurantList";
import MenuBar from "./components/MenuBar";
import LogIn from "./components/Login";

const { Header, Content } = Layout;

function App() {
  const [user, setUser] = useState();
  return (
    <BrowserRouter>
      <Layout className="Layout">
        <Header>
          <MenuBar />
        </Header>
        <Content>
          <Routes>
            <Route
              path="/restaurants/:restaurantId"
              element={
                <h1>
                  <RestaurantPage />
                </h1>
              }
            />
            <Route
              path="/restaurants/:restaurantId"
              element={<RestaurantPage />}
            />
            <Route path="/random" element={<h1>Random</h1>} />
            <Route
              path="/add"
              element={
                !user ? <LogIn setUser={setUser} /> : <h1>Add Restaurant</h1>
              }
            />
            <Route path="/" element={<RestaurantList />} />
          </Routes>
        </Content>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
