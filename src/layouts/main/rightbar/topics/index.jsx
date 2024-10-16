import { topic } from "~/utils/consts";
import Topic from "./topic";
// import { Link } from "react-router-dom";
import SidebarSection from "~/components/sidebar-section";
export default function Topics() {
  return (
    <SidebarSection title="Keşfet" more="/trends">
      {topic.map((topic, index) => (
        <Topic item={topic} key={index} />
      ))}
      
    </SidebarSection>
  );
}
