import styles from "./Main.module.css"

function Main() {
  return (
      <div className={styles.container}>
        <section className={styles.mains}>
            <h2 className={styles.mains__title}>Nonton Bareng Mobile Legends <br />Biar Makin Semangat Mabarnya</h2>
            <div className={styles.main__container}>
                <div className={styles.main}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/O6__1syntPo?si=OYCSfR0ZgUpqFPbM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                 <h3 className={styles.main__title}>TOP GLOBAL MARTIS VS ENEMY TOP GLOBAL HERO AND HIGH RANK </h3>
                 <p className={styles.main__date}>10 November 2023</p>
                </div>
                <div className={styles.main}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/1-_bcW3odhA?si=NOw0KQNsTBQiCQrO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                 <h3 className={styles.main__title}>Challenge LJ Maen Khufra Tanpa Skill 2, Bapak Khufra Indonesia </h3>
                 <p className={styles.main__date}>10 November 2023</p>
                </div>
                <div className={styles.main}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/muGCmRG94Yw?si=dSut9NI0UPT0JvJo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                 <h3 className={styles.main__title}>SOLO RANK 36 KILL HAMPIR TREMOR TANGAN GUA MAIN FANNY</h3>
                 <p className={styles.main__date}>10 November 2023</p>
                </div>
                <div className={styles.main}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/T9-QFXJNtkg?si=Fgz-tUhfJqlCXhyh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                 <h3 className={styles.main__title}>Almost SAVAGE!! Monster Sidelane Miya with LifeSteal Build Be Like</h3>
                 <p className={styles.main__date}>10 November 2023</p>
                </div>
            </div>
        </section>
      </div>
  )
}

export default Main
