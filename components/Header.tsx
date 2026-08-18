import Link from 'next/link';
export default function Header(){return <header className="header"><div className="container header-inner"><Link className="logo" href="/">RENTALL</Link><nav className="nav"><Link href="/">Search</Link><Link href="/owner">For owners</Link><Link href="/admin">Admin</Link><Link href="/auth">Sign in</Link></nav></div></header>}
