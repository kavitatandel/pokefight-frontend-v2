import { Routes, Route } from "react-router-dom";
import AllPokemon from "./components/AllPokemon";
import Pokemon from "./components/Pokemon";
import PokemonInfo from "./components/PokemonInfo";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route exact path="/pokemon" element={<AllPokemon />}></Route>
        <Route path="/pokemon/:id" element={<Pokemon />}></Route>
        <Route path="/pokemon/:id/:info" element={<PokemonInfo />}></Route>
      </Routes>
    </>
  );
};

export default AppRouter;
