import { Link } from "react-router-dom";

const Error404 = () => {
    return <div className="flex flex-col gap-2 items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">Error 404: Page not found</h1>
        <h2>Looks like you're trying to go somewhere that doesn't exist!</h2>
        <Link to={"/"}>Return home</Link>
    </div>;
}
 
export default Error404;