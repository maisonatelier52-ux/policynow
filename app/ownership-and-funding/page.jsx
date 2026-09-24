import PolicyPage from "../../components/PolicyPage";
import staticPages from "../../data/static-pages.json";

export default function Page() {
  return <PolicyPage data={staticPages["ownership-and-funding"]} />;
}
