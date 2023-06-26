import { useRouter } from "next/navigation"

export default function CheckAuth() {
    const router = useRouter();
    const token = localStorage.getItem('token');
        if (!token) router?.push('/login');
};