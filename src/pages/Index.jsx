import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Search, User } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Header */}
      <header className="flex items-center justify-between py-4 border-b">
        <div className="flex items-center space-x-4">
          <img src="/placeholder.svg" alt="Financial Times Logo" className="h-8" />
          <nav className="hidden md:flex space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/world" className="hover:underline">World</Link>
            <Link to="/business" className="hover:underline">Business</Link>
            <Link to="/markets" className="hover:underline">Markets</Link>
            <Link to="/opinion" className="hover:underline">Opinion</Link>
            <Link to="/life-arts" className="hover:underline">Life & Arts</Link>
            <Link to="/more" className="hover:underline">More</Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Input type="text" placeholder="Search" className="pr-10" />
            <Search className="absolute right-2 top-2 h-5 w-5 text-gray-500" />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Login</DropdownMenuItem>
              <DropdownMenuItem>Subscribe</DropdownMenuItem>
              <DropdownMenuItem>My Account</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* Hero Section */}
      <section className="my-8">
        <div className="relative">
          <img src="/placeholder.svg" alt="Featured Article" className="mx-auto object-cover w-full h-[400px]" />
          <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4">
            <h2 className="text-2xl font-bold">Featured Article Headline</h2>
            <p className="mt-2">Brief description of the featured article.</p>
          </div>
        </div>
      </section>

      {/* Top Stories */}
      <section className="my-8">
        <h2 className="text-xl font-bold mb-4">Top Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((story) => (
            <div key={story} className="border p-4">
              <img src="/placeholder.svg" alt="Story" className="mx-auto object-cover w-full h-[200px]" />
              <h3 className="mt-2 font-bold">Story Headline</h3>
              <p className="mt-1">Brief description of the story.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sections */}
      {["World", "Business", "Markets", "Opinion", "Life & Arts"].map((section) => (
        <section key={section} className="my-8">
          <h2 className="text-xl font-bold mb-4">{section}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((article) => (
              <div key={article} className="border p-4">
                <img src="/placeholder.svg" alt="Article" className="mx-auto object-cover w-full h-[200px]" />
                <h3 className="mt-2 font-bold">Article Headline</h3>
                <p className="mt-1">Brief description of the article.</p>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0">
          <div className="flex space-x-4">
            <Link to="/about" className="hover:underline">About Us</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
            <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
            <Link to="/terms" className="hover:underline">Terms of Service</Link>
            <Link to="/advertise" className="hover:underline">Advertise with Us</Link>
          </div>
          <div className="flex space-x-4">
            <img src="/placeholder.svg" alt="Facebook" className="h-6 w-6" />
            <img src="/placeholder.svg" alt="Twitter" className="h-6 w-6" />
            <img src="/placeholder.svg" alt="LinkedIn" className="h-6 w-6" />
            <img src="/placeholder.svg" alt="Instagram" className="h-6 w-6" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
