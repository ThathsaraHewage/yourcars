import { Custom_Filter, Head, Search_Bar } from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Head />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Cars for Sale</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className="home__filters">
          <Search_Bar />
          <div className="home__filter-container">
            <Custom_Filter title="fuel" />
            <Custom_Filter title="year" />
          </div>
        </div>
      </div>
    </main>
  );
}
