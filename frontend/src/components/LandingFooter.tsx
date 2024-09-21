
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function LandingFooter() {
  return (
    <footer className="p-4 md:p-6 bg-gray-900 text-white">
      <div className="flex justify-between">
        <div className=" flex flex-col text-xs md:text-base">
          <div>© 2024 Medium. All rights reserved.</div>
          <div className=" space-x-0 md:space-x-4 mt-2 flex flex-col md:flex-row">
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Terms of Service</Link>
          </div>
        </div>
        <div className="space-y-4 flex flex-col">
          <Input
            placeholder="Subscribe to our newsletter"
            className="bg-gray-800 border-none"
          />
          <Button size='sm'>Subscribe</Button>
        </div>
      </div>
    </footer>
  );
}