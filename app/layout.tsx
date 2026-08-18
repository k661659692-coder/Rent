import './globals.css'; import Header from '@/components/Header';
export const metadata={title:'RENTALL — Rent almost anything',description:'Rental marketplace MVP'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body><Header/><main>{children}</main><footer className="footer"><div className="container">RENTALL · MVP</div></footer></body></html>}
