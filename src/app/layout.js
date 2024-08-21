// /app/layout.js
import Header from './components/Header';
import Footer from './components/Footer';


const Layout = ({ children }) => {
  return (
    <html>
    <body>
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
    </body>
    </html>);
};

export default Layout;