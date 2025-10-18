import HeroSection from "@/components/HeroSection";
import AuthorsCards from "./AuthorsCards";

function AuthorsPage() {

    return (<>
        <h1>
            <HeroSection text="Authors" />
            <AuthorsCards />
        </h1>
    </>)
}

export default AuthorsPage;
