import NavBar from "./components/Navbar";
import "./styles/global.css";
``;
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6), rgba(0, 0, 0,0.5 )), url('/landing.jpg')`,
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
