import SearchBar from "../components/SearchBar.tsx";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { Container } from "./Home.tsx";
import { BackBtn } from "./Detail.tsx";
import styled from "styled-components";
import MovieCard from "../components/MovieCard.tsx";

export interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  Type: string;
}

interface SearchResponse {
  Search?: Movie[];
  Response: string;
}

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 100px;
  justify-content: center;
`;

function Search() {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  const navigate = useNavigate();

  const [list, setList] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!keyword) return;
    setLoading(true);
    // eslint-disable-next-line
    setList([]);
    setError("");

    fetch(`https://www.omdbapi.com/?apikey=6a0a8eb4&s=${keyword}`)
      .then((res) => res.json())
      .then((json: SearchResponse) => setList(json.Search || []))
      .catch((err) => {
        console.log(err);
        setList([]);
        setError("검색하는데 오류가 발생하였습니다.");
      })
      .finally(() => setLoading(false));
  }, [keyword]);

  return (
    <Container>
      <div>
        <BackBtn
          onClick={() => {
            navigate("/");
          }}
        >
          {" "}
          &larr; 홈으로
        </BackBtn>
        <div>
          <h1>검색 키워드 : {keyword}</h1>
          <SearchBar keyword={keyword} />
          {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}
        </div>
        <div></div>
      </div>
      <List>
        {list.length > 0
          ? list.map((item) => <MovieCard key={item.imdbID} movie={item} />)
          : !loading && <p>검색결과가 없습니다.</p>}
      </List>
    </Container>
  );
}

export default Search;
