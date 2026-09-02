import OfficersHero from "../components/officers/OfficersHero";
import OfficersIntro from "../components/officers/OfficersIntro";
import OfficersGrid from "../components/officers/OfficersGrid";

function Officers() {
  return (
    <main className="pt-10 bg-(--background-color) min-h-screen">
      <OfficersHero />

      <section className="relative overflow-hidden py-10 sm:py-20 px-4 sm:px-6 lg:px-8 bg-(--background-color)">
        <img
          src="/images/site_icon.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute -right-16 -bottom-16 w-64 h-64 opacity-5"
        />
        <div className="max-w-6xl mx-auto relative">
          <OfficersIntro />
          <OfficersGrid />
        </div>
      </section>
    </main>
  );
}

export default Officers;
