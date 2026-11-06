import styles from "./Home.module.css"

function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>영화 검색</h1>
      <p className={styles.message}>보고 싶은 영화 제목을 검색해보세요!!</p>
    </div>
  )
}

export default Home;
