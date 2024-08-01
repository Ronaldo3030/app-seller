
import { signOut } from "@/auth"
import { Button } from "./ui/button"

export function SignOut() {
    return (
        <form
            action={async () => {
                "use server"
                await signOut()
            }}
        >
            <Button type="submit" variant="outline" className="flex-1">
                Logout
            </Button>
        </form>
    )
}