import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients"
import { BurgerConstructor } from "../burger-constructor/burger-constructor"

const burger = {
  top: {
    title: "Краторная булка N-200i",
    price: 1255,
    image: "https://code.s3.yandex.net/react/code/bun-02.png",
    _id: "60666c42cc7b410027a1a9b1"
  },
  middle: [
    {
      title: "Мясо бессмертных моллюсков Protostomia",
      price: 1337,
      image: "https://code.s3.yandex.net/react/code/meat-02.png",
      _id: "60666c42cc7b410027a1a9b4"
    }
  ],
  bottom: {
    title: "Краторная булка N-200i",
    price: 1255,
    image: "https://code.s3.yandex.net/react/code/bun-02.png",
    _id: "60666c42cc7b410027a1a9b1"
  }
}

function App() {
  return (
    <div className={styles.app}>
      <AppHeader/>
      <main className={styles.main}>
        <BurgerIngredients {...burger}/>
        <BurgerConstructor {...burger}/>
      </main>
    </div>
  );
}

export default App;
