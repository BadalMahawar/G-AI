import { Button } from "@/components/ui/button";
import Link from "next/link";

const LangingPage = () => {
    return (
        <div>
            <div>
                <h1>Landing Page</h1>
            </div>
            <Link href="/sign-in">
                <Button>SignIn</Button>
            </Link>
            <Link href="/sign-up">
                <Button>Registor</Button>
            </Link>

        </div>
    )
}
export default LangingPage;