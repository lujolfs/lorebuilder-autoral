import { useRouter } from "next/navigation"

export default function CheckAuth() {
    const router = useRouter();
    const fetchItem: any = localStorage.getItem('token')
        if (!fetchItem) router?.push('/login')
};