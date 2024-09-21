import FeatureCard from "./FeatureCard";
export default function FeatureSection() {
  return (
    <section
      id="features"
      className="p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-[#f1f5f9]"
    >
      <FeatureCard
        icon="🚀"
        title="Instant Setup"
        description="Provide a personal dashboard where users can manage their posts."
      />
      <FeatureCard
        icon="🔒"
        title="Secure"
        description="Passcode protection for your public account posts."
      />
      <FeatureCard
        icon="💻"
        title="Cross-Platform"
        description="Works on any device with a modern web browser."
      />
    </section>
  );
}