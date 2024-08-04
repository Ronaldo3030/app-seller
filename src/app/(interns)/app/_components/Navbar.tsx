'use client'

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { usePathname } from 'next/navigation';


export default function Navbar() {

    const pathname = usePathname();
    const isSelected = (path: string) => pathname === path;
    return (
        <div className="hidden border-r bg-muted/40 lg:block">
            <div className="flex flex-col gap-2">
                <div className="flex h-[60px] items-center px-6">
                    <Link href="#" className="flex items-center gap-2 font-semibold" prefetch={false}>
                        <Package2Icon className="h-6 w-6" />
                        <span className="">Acme Inc</span>
                    </Link>
                </div>
                <div className="flex-1">
                    <nav className="grid items-start px-4 text-sm font-medium">
                        <Link
                            href="/app"
                            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${isSelected('/app') ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-primary'
                                }`}
                            prefetch={false}
                        >
                            <HomeIcon className="h-4 w-4" />
                            Dashboard
                        </Link>
                        <Link
                            href="/app/items"
                            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${isSelected('/app/items') ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-primary'
                                }`}
                            prefetch={false}
                        >
                            <ShoppingCartIcon className="h-4 w-4" />
                            Items
                        </Link>
                        <Link
                            href="/app/products"
                            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${isSelected('/app/products') ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-primary'
                                }`}
                            prefetch={false}
                        >
                            <PackageIcon className="h-4 w-4" />
                            Products
                        </Link>
                        <Link
                            href="/app/customers"
                            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${isSelected('/app/customers') ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-primary'
                                }`}
                            prefetch={false}
                        >
                            <UsersIcon className="h-4 w-4" />
                            Customers
                        </Link>
                        <Link
                            href="/app/analytics"
                            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${isSelected('/app/analytics') ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-primary'
                                }`}
                            prefetch={false}
                        >
                            <LineChartIcon className="h-4 w-4" />
                            Analytics
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
    );
}


function HomeIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
    )
}


function LineChartIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 3v18h18" />
            <path d="m19 9-5 5-4-4-3 3" />
        </svg>
    )
}


function MoveHorizontalIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="18 8 22 12 18 16" />
            <polyline points="6 8 2 12 6 16" />
            <line x1="2" x2="22" y1="12" y2="12" />
        </svg>
    )
}


function Package2Icon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
            <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
            <path d="M12 3v6" />
        </svg>
    )
}


function PackageIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m7.5 4.27 9 5.15" />
            <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
            <path d="m3.3 7 8.7 5 8.7-5" />
            <path d="M12 22V12" />
        </svg>
    )
}


function SearchIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    )
}


function ShoppingCartIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>
    )
}


function UsersIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    )

}