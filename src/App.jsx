import Gallery from "./components/gallery";
import SearchForm from "./components/searchForm";
import ThemeToggle from "./components/themeToggle";

const App = () => {
  return (
    <>
      <ThemeToggle />
      <SearchForm />
      <Gallery />
    </>
  );
};
export default App;
