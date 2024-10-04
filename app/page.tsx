import NavBar from "./components/Navbar";
import "./styles/reset.css";
export default function Page() {
  return (
    <section
      style={{
        backgroundImage: `url(/landing.jpg)`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <NavBar />
    </section>
  );
}
