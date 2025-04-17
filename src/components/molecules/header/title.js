import Link from "next/link";
import Icon from "@/components/atoms/icon";

export default function Header() {
    return (
        <Link href="/" className="group cursor-pointer hover:opacity-80 transition-opacity duration-300 flex items-center">
        <Icon
            name= "brackets"
            alt="brackets logo"
            width={40}
            height={40}
        />
        <h1
            className="group-hover:text-gray-500 transition duration-300"
            style={{ fontFamily: 'Doto, sans-serif', fontSize: '2.5rem', fontWeight: 800, marginLeft: '10px' }}
        >
        Eric Polanski
        </h1>
    </Link>
    )
}