import "./App.css";
import MyNavbar from "./components/navbar";

import Footer from "./components/footer";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Layout/>
      <Footer />
    </div>
  );
}

export default App;
