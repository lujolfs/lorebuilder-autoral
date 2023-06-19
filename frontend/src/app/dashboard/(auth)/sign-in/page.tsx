import Link from "next/link"

export default function Signin() {
    return (
        <div>
            <header>
                <h1>Logar na conta</h1>
                <Link href="/sign-up">Criar conta</Link>
            </header>
        </div>
    )
}