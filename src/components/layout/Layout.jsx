import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, activeTab, onTabChange }) => (
  <div className="app-container">
    <Header activeTab={activeTab} onTabChange={onTabChange} />
    <main className="main-content">{children}</main>
    <Footer />
  </div>
);

export default Layout;