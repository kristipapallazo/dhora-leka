"use client";

const navItems = [
  { name: "Kryefaqja", href: "#home" },
  { name: "Rreth Nesh", href: "#about" },
  {
    name: "Programet",
    href: "#programs",
    submenu: ["Klasat", "Provimet", "Stafi Mësimor"],
  },
  {
    name: "Aktivitete",
    href: "#activities",
    submenu: ["Jashtëshkollore", "Olimpiadat", "Ekskursione"],
  },
  {
    name: "Prindër",
    href: "#parents",
    submenu: ["Komunikim", "Pagesat", "FAQ"],
  },
  { name: "Kontakt", href: "#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm bg-[var(--brown)]">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brown rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">D</span>
          </div>
          <span className="text-xl font-bold text-[#19231a]">Dhora Leka</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <a
                href={item.href}
                className="px-4 py-2 text-[#19231a] font-medium hover:text-[#33673b] transition"
              >
                {item.name}
              </a>

              {/* Dropdown for items with submenu */}
              {item.submenu && (
                <div className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {item.submenu.map((subItem) => (
                    <a
                      key={subItem}
                      href="#"
                      className="block px-4 py-2 text-sm hover:bg-[#f9f5f0]"
                    >
                      {subItem}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            href="#register"
            className="ml-4 bg-[#f69c84] text-white px-5 py-2 rounded-full text-sm font-semibold shadow hover:bg-[#e68a72] transition"
          >
            Regjistrohu
          </a>
        </nav>

        {/* Mobile menu button */}
        {/* <button className="md:hidden text-[#19231a]">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button> */}
      </div>
    </header>
  );
}
