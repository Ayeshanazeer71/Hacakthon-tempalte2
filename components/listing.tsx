import { Search, ShoppingCart, User } from "lucide-react";

export function Listing() {
  return (
    <nav className="border-b w-full">
      <div className="container mx-auto px-4 lg:px-8 flex h-16 items-center justify-between mt-28">
        {/* Logo */}
        <div className="text-base font-normal">Avion</div>

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
        <div className="flex space-x-4 justify-between ">
          <Search className="h-5 w-5" />
          <ShoppingCart className="h-5 w-5" />
          <User className="h-5 w-5" />
        </div>
      </div>

      {/* Fixed Images Side-by-Side with Gap and Padding */}
      <div className="flex justify-between items-center px-8 gap-x-8 mt-4">
        <img src="/images/wraLeft.png" alt="chair" />
        <img src="/images/wrapper.png" alt="chair" />
      </div>
    </nav>
  );
}

export default Listing;
