import Header from "./components/Header";

function App() {
  const redirectItems = [{ name: "Início", redirectTo: "#home" }];

  return (
    <>
      <Header
        instagramLink="https://www.instagram.com/confeitariacawco/"
        items={[{}]}
      ></Header>
      <main className="mainContent">
        {/* <div>Inicio</div>
        <Home/>
        <About />
        <Products/>
        <Contact/>
        <div>Sobre a CAWCO</div>
        <div>Produtos</div>
        <div>Contato</div> */}
      </main>
    </>
  );
}

export default App;
