import Navbar from "./_components/Navbar";
import Menu from "./_components/Menu";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
            <Navbar />
            <div className="flex flex-col h-screen">
                <Menu />
                <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    )
}