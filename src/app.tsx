import Emoji from "./components/emoji.js";
import Footer from "./components/footer.js";

export default function App() {
  return (
    <div
      style={{
        minHeight: "100dvh",
        maxHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Emoji />
      <Footer />
    </div>
  );
}
