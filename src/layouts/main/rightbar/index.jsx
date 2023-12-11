import Premium from "./premium";
import SearchBar from "./search";
import Topics from "./topics";

export default function RightBar() {
  return (
    <aside className="w-[350px] mr-2.5 max-h-screen min-h-screen px-2 flex flex-col sticky top-0 ">
      <SearchBar />
      <Premium />
      <Topics />
    </aside>
  );
}
