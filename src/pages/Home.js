import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <h1>Welcome to the Pokemon Games</h1>
            <p>Select your Pokemon for the fight</p>

            {/* // ChooosePokemon COMPONENT: */}
            {/* Set state to FIRE/WATER/POISON             */}
            <button>Fire Pokemon</button>
            <button>Water Pokemon</button>
            <button>Poison Pokemon</button>

            {/* // Gallery COMPONENT: */}
            {/* if state is fire: show firebackroud background
and .filter only pokemons with fire type */}
            <div>Gallery component</div>




            {/* <Link to={`/choose`}>
                <button>My Pokemon is chosen!!</button>
            </Link> */}

        </>
    )
}

export default Home;