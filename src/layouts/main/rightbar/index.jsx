import Footer from "./footer";
import Premium from "./premium";
import SearchBar from "./search";
import Topics from "./topics";
import WhoFollow from "./who-follow";

export default function RightBar() {
  return (
    <aside className="w-[350px] mr-2.5 ">
      <SearchBar />
      <Premium />
      <Topics />
      <WhoFollow />
      <Footer />
    </aside>
  );
}
