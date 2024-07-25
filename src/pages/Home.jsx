import Head from "../components/head";
import React from "react";
import BottomMenu from "../components/ui/bottomMenu";
import Main from "../components/main";
import Container from "../Layout/Container";
import Footer from "../components/Footer/footer";

function Home() {
  return (
    <div className="relative">
     
        <Head />
        <Container>
          <Main />
        </Container>

        <BottomMenu />
      
      <Footer />
    </div>
  );
}

export default Home;
