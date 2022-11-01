import { Link } from "@remix-run/react";
import Logo from "../components/Logo";

export default function Index() {
  return (
    <main>
      <header>
        <hgroup>
          <h1>
            <Link to="/">Contained</Link>
          </h1>
          <h2>A JavaScript Blog</h2>
        </hgroup>
      </header>
      <nav>
        <ul>
          <li>
            <Link to="/">Blog 1</Link>
          </li>
          <li>
            <Link to="/">Blog 2</Link>
          </li>
        </ul>
      </nav>
      <section>
        <article>
          <header>
            <h1>Article #1</h1>
          </header>
          <section>This is the first article.</section>
        </article>
        <article>
          <header>
            <h1>Article #2</h1>
          </header>
          <section>This is the second article.</section>
        </article>
      </section>

      <footer>© Devin Clark 2022</footer>
    </main>
  );
}
