import { Layout } from "antd";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import RestaurantPage from "./components/RestaurantPage";
import RestaurantList from "./components/RestaurantList";
import MenuBar from "./components/MenuBar";
import LogIn from "./components/Login";

const { Header, Content } = Layout;

function App() {
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
            <Route path="/login" element={<LogIn />} />
            <Route path="/add" element={<h1>Add</h1>} />
            <Route path="/random" element={<h1>Random</h1>} />
            <Route path="/" element={<RestaurantList />} />
          </Routes>
        </Content>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
