function CommunitySection() {
  return (
    <div className="mb-16">
      <h2
        className="text-2xl font-bold mb-6 text-(--secondary-color)"
        data-aos="fade-right"
        data-aos-duration="700"
      >
        Our Community
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div data-aos="fade-right" data-aos-duration="700">
          <p className="leading-relaxed mb-3">
            Willowbend Subdivision is more than just a residential area—it's a
            community of neighbors who care about each other and the place they
            call home. Our subdivision is designed with an emphasis on peaceful
            living, green surroundings, and strong community values.
          </p>
          <p className="leading-relaxed mb-3">
            With well-maintained infrastructure, dedicated security personnel,
            and accessible common areas, we create an environment where families
            feel safe and neighbors become friends. Our residents enjoy a quiet
            setting while remaining connected to essential services and local
            amenities.
          </p>
          <p className="leading-relaxed">
            At Willowbend, we believe that community is built on trust, mutual
            respect, and shared responsibility. Together, we maintain the
            standards that make our subdivision a desirable place to live.
          </p>
        </div>

        <div data-aos="fade-left" data-aos-duration="700" data-aos-delay="200">
          <div className="rounded-lg shadow-sm overflow-hidden">
            <img
              src="/Root/images/willowbendimg6.webp"
              className="w-full h-full object-cover"
              alt="Willowbend Community"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunitySection;
