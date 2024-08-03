import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import Image from "next/image";

export default function Page() {
    return (
        <div className="flex h-screen">
            {/* Top Menu */}
            <header className="fixed top-0 left-0 right-0 bg-gray-800 text-white p-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <div className="relative">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button className="w-10 h-10 rounded-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 bg-gray-300">
                                <Image
                                    src="/next.svg"
                                    alt="User profile"
                                    width={40}
                                    height={40}
                                    className="rounded-full bg-gray-300"
                                />
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </header>

            {/* Left Navigation */}
            <nav className="w-64 bg-gray-100 p-6 pt-20">
                <ul className="space-y-2">
                    <li>
                        <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded">
                            Users
                        </a>
                    </li>
                </ul>
            </nav>

            {/* Main Content Area */}
            <main className="flex-1 p-10 pt-20">
                <h2 className="text-2xl font-semibold mb-4">Welcome to your Dashboard</h2>
                <p>Select an option from the left navigation to get started.</p>
            </main>
        </div>
    );
}   