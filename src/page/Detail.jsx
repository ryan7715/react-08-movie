import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import styles from "./Detail.module.css";

function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=6a0a8eb4&i=${id}&plot=full`)
      .then((res) => res.json())
      .then((json) => {
        setMovie(json);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className={styles.container}>
      <button onClick={() => navigate(-1)}>뒤로가기</button>

      {!movie ? (
        <div>로딩 중입니다...</div>
      ) : (
        <div className={styles.detail}>
          <img className={styles.poster} src={movie.Poster} alt={movie.Title} />

          <div className={styles.info}>
            <h2>{movie.Title}</h2>

            <p>개봉 날짜 : {movie.Released}</p>
            <p>장르 : {movie.Genre}</p>
            <p>평점 : {movie.imdbRating}</p>
            <p>감독 : {movie.Director}</p>

            <h3>줄거리</h3>
            <p>{movie.Plot}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
