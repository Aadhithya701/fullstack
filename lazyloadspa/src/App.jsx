import { lazy, Suspense, useState } from "react";

const About = lazy(() => import("./About"));
const Contact = lazy(() => import("./Contact"));
const Home = lazy(() => import("./Home"));

function App() {
  const [page, setPage] = useState("Home");

  return (
    <div>
      <button onClick={() => setPage("Home")}>Home</button>
      <button onClick={() => setPage("About")}>About</button>
      <button onClick={() => setPage("Contact")}>Contact</button>

      <Suspense fallback={<h1>Loading...</h1>}>
        {page === "Home" && <Home />}
        {page === "About" && <About />}
        {page === "Contact" && <Contact />}
      </Suspense>
    </div>
  );
}

export default App;