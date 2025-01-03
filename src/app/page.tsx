// import Image from "next/image";
import Header from "./components/Navbar";
import Footer from "./components/Footer";
import Page_01 from "./components/01_page";
import Page_02 from "./components/02_page";
import Page_03 from "./components/03_page";
import Page_04 from "./components/04_page";
import Page_05 from "./components/05_page";
import Page_06 from "./components/06_page";
import Page_07 from "./components/07_page";
import Page_08 from "./components/08_page";
import Page_09 from "./components/09_page";
import Page_10 from "./components/10_page";
import Page_11 from "./components/11_page";

export default function Home(){  // start
  return(
    <div>
      <Header />


      {/* one start */}
      <Page_01 />
      {/* one end */}
      

      {/* two start */}
      <Page_02 />
      {/* two end */}


      {/* three start */}
      <Page_03 />
      {/* three end */}

      {/* four start */}
      <Page_04 />
      {/* four task end */}


      {/* five start */}
      <Page_05 />
      {/* five end */}


      {/* six start */}
      <Page_06 />
      {/* six end */}


      {/* seven start */}
      <Page_07 />
      {/* seven end */}


      {/* eight start */}
      <Page_08 />
      {/* eight end */}


      {/* nine start */}
      <Page_09 />
      {/* nine end */}

      {/* ten start */}
      <Page_10 />
      {/* ten end */}


      {/* eleven start */}
      <Page_11 />
      {/* eleven end */}

      <Footer />
    </div>
  )
}