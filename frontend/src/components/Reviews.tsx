import { Card } from "@/components/ui/card";
export default function UserReviews() {
  return (
    <section id="reviews" className="p-12 bg-[#f1f5f9]">
      <h2 className="text-3xl font-bold text-center mb-8">
        What Our Users Say
      </h2>
      <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6">
        <Card className="p-6 text-center">
          <p className="text-lg text-gray-700">
            “Medium is a game-changer! The fastest way to post blogs.”
          </p>
          <div className="mt-4">
            <img
              src="/user1.png"
              alt="User 1"
              className="w-12 h-12 rounded-full mx-auto"
            />
            <div className="mt-2 text-gray-800">Emma Devine, Developer</div>
          </div>
        </Card>
        <Card className="p-6 text-center">
          <p className="text-lg text-gray-700">
            “The encryption is top-notch. I feel secure using Medium.”
          </p>
          <div className="mt-4">
            <img
              src="/user2.png"
              alt="User 2"
              className="w-12 h-12 rounded-full mx-auto"
            />
            <div className="mt-2 text-gray-800">Jane Smith, Designer</div>
          </div>
        </Card>
      </div>
    </section>
  );
}