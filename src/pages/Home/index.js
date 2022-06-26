import { useEffect, useState } from "react";
import "./style.css";
import api from "../../services/api";
import { Link } from "react-router-dom";

function Home() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "7f2cea6111355b8918f995e7db54d01e",
          language: "pt-BR",
          page: 1,
        },
      });
      setFilmes(response.data.results.slice(0, 20));
    }
    loadFilmes();
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="">
        <h2>Carregando filmes ...</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="lista-filmes">
        {filmes.map((filme) => {
          return (
            <article key={filme.id}>
              <strong>{filme.title}</strong>
              <img
                src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                alt={filme.title}
              />
              <Link to={`/filme/${filme.id}`}>Acessar</Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
