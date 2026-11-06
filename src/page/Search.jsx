import { Link, useSearchParams } from "react-router";
import { useEffect, useState } from "react";
import styles from "./Search.module.css";

function Search() {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  const [list, setList] = useState([]);
  const [loading, setLoadinG] = useState(false);

  useEffect(() => {
    if (!keyword) return;

    setLoadinG(true);
    setList([]);

    fetch(
      `https://www.omdbapi.com/?apikey=6a0a8eb4&s=${encodeURIComponent(keyword)}`,
    )
      .then((res) => res.json())
      .then((json) => {
        setList(json.Search || []);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoadinG(false));
  }, [keyword]);

  return (
    <div className={styles.container}>
      <h2>검색 결과 : {keyword}</h2>

      {loading ? (
        <div className={styles.message}>로딩 중입니다...</div>
      ) : list.length === 0 ? (
        <div className={styles.message}>검색 결과가 없습니다...</div>
      ) : (
        list.map((item, index) => {
          return (
            <Link
              key={index}
              to={`/detail/${item.imdbID}`}
              className={styles.movie}
            >
              {item.Poster !== "N/A" ? (
                <img
                  className={styles.cover}
                  src={item.Poster}
                  alt={item.TITLE}
                />
              ) : (
                <div className={styles.no_cover}>NO COVER</div>
              )}

              <div>
                <div className={styles.title}>{item.TITLE}</div>
              </div>

              <div className={styles.year}>개봉 연도 : {item.Year}</div>
            </Link>
          );
        })
      )}
    </div>
  );
}

export default Search;
