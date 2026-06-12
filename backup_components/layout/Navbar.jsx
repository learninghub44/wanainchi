import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {

const [open,setOpen] = useState(false);

return (
<>
<nav className="navbar">

<div className="container nav-content">

<Link to="/" className="logo">

<span>🇰🇪</span>

<div>
<h3>Sauti ya Wananchi</h3>
<p>Voice of the People</p>
</div>

</Link>

<div className="desktop-links">

<Link to="/">Home</Link>

<Link to="/report">Report Issue</Link>

<Link to="/authorities">Authorities</Link>

<Link to="/about">About</Link>

<Link to="/support">Support Us</Link>

</div>

<button
className="menu-btn"
onClick={()=>setOpen(!open)}
>
<Menu size={24}/>
</button>

</div>

{open && (
<div className="mobile-menu">

<Link to="/">Home</Link>

<Link to="/report">Report Issue</Link>

<Link to="/authorities">Authorities</Link>

<Link to="/about">About</Link>

<Link to="/support">Support Us</Link>

</div>
)}

</nav>
</>
);
}