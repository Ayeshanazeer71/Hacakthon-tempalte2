import { Search, ShoppingCart, User } from "lucide-react";

export function SecondHome() {
  return (
    <nav className="border-b w-full mt-28">
      <div className="container mx-auto px-4 lg:px-8 flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="text-base font-normal ">Avion</div>

        {/* Navigation Items */}
        <div className="hidden lg:flex space-x-6">
          <span>Plant pots</span>
          <span>Ceramics</span>
          <span>Tables</span>
          <span>Chairs</span>
          <span>Crockery</span>
          <span>Tableware</span>
          <span>Cutlery</span>
        </div>

        {/* Icons */}
        <div className="flex space-x-4">
          <Search className="h-5 w-5" />
          <ShoppingCart className="h-5 w-5" />
          <User className="h-5 w-5" />
        </div>
      </div>

      {/* Fixed Image */}
      <img src="/images/table.png" alt="table" className="w-full" />
    </nav>
  );
}

export default SecondHome;
