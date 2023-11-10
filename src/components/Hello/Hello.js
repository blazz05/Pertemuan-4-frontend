import styles from "./Hello.module.css"

function Hello() {
  return (
      <div className={styles.container}>
        <section className={styles.hello}>
            <div className={styles.left}>
                <h2 className={styles.title}>Mobile Legends</h2>
                <p className={styles.description}>
                    Nonton Bareng
                </p>
                <button className={styles.button}>Watch</button>
            </div>
            <div className='right'>
                <img 
                    className={styles.image}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6gWucRdSkaPhuAxpBHuQpJc3O64WVtBAWpg&usqp=CAU"
                    alt="placeholder"
                />
            </div>
        </section>
      </div>
  )
}

export default Hello
