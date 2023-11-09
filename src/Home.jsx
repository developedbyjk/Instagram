import React from "react";

import Header from './Components/Header';
import Posts from './Components/Posts'
import Footer from './Components/Footer';
import Stories from "./Components/Stories";

export default function Home() {

    return(
        <>
    <Header />
    {/* <Stories/> */}
    <Posts/>
    <Footer/>
        </>
    )
}