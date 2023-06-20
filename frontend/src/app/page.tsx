import Login from "@/components/login/Login"
import styles from "./home.module.css"

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>THE</h1>
                <h1>LOREBUILDER</h1>
            </div>
            <Login />
        </div>
    )
}