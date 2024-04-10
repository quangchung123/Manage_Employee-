import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import "../styles/_layout.scss";


const Layout = ({children} : any) => {
    return (
       <div className="layout">
           <Header />
           <div>
               <Content>
                   {children}
               </Content>
           </div>
           <Footer />
       </div>
    );
};

export default Layout;