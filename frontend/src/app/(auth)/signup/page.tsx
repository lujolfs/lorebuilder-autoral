import Signup from "@/components/signup/Signup"
import styles from "./page.module.css"

export default function SignupPage() {
    return (
        <div className={styles.container}>
            <Signup />
            <div className={styles.title}>
                <h1>THE</h1>
                <h1>LOREBUILDER</h1>
            </div>
        </div>
    )
}