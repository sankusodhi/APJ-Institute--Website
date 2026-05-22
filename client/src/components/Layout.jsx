import { Outlet } from 'react-router-dom';
import PopupAnnouncement from './PopupAnnouncement';
import TopHeaderBar from './home/TopHeaderBar';
import Navbar from './home/Navbar';
import Footer from './home/Footer';
import ScrollToTop from './ScrollToTop';
import FloatingContactButtons from './FloatingContactButtons';

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <PopupAnnouncement />
      <TopHeaderBar />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingContactButtons />
    </>
  );
}
