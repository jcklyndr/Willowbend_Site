import Card from "../ui/Card";
import { officers } from "../../data/officersData";

function OfficersGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {officers.map((officer, index) => (
        <Card
          key={officer.id}
          image={officer.image}
          imageAlt={officer.position}
          eyebrow={officer.committee}
          title={officer.name}
          subtitle={officer.position}
          description={officer.description}
          listTitle="Key Responsibilities:"
          listItems={officer.responsibilities}
          aos="fade-up"
          aosDuration={800}
          aosDelay={(index % 3) * 100 + 100}
        />
      ))}
    </div>
  );
}

export default OfficersGrid;
