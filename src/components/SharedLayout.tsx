import { Suspense } from "react"
import Navigation from "./Navigation/Navigation"
import Loader from "./Loader"
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
    return (
        <>
            <header>
                <Navigation />
            </header>
            <main>
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </main>    
        </>
    );
};

export default SharedLayout;