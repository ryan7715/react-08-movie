import { useState } from "react";
import { useNavigate } from "react-router";

function SearchBar() {
  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const handleSearch = () => {
    if (!input.trim()) return;

    navigate(`/search?keyword=${encodeURIComponent(input)}`);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="영화 제목을 입력하세요."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleSearch}>검색</button>
    </div>
  );
}

export default SearchBar;
