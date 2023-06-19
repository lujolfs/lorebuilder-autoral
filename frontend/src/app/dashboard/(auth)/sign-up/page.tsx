import Link from "next/link"

export default function Signup() {
    return (
        <div>
            <header>
                <h1>Criar conta</h1>
                <Link href="/sign-in">Fazer login</Link>
            </header>
        </div>
    )
}