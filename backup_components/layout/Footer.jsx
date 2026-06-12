import FlagBar from "./FlagBar";

export default function Footer() {
return (
<footer>

<FlagBar/>

<div className="footer">

<div className="container">

<h2>Sauti ya Wananchi</h2>

<p>
Built by citizens for citizens.
Helping communities highlight local issues,
share evidence, and encourage action.
</p>

<div className="footer-links">

<a href="/about">About</a>

<a href="/support">Support</a>

<a href="/report">Report Issue</a>

<a href="/authorities">Authorities</a>

</div>

<p className="copyright">
© 2026 Sauti ya Wananchi
</p>

</div>

</div>

</footer>
);
}