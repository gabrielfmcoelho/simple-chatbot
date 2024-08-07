type PageRoutesType = {
  title: string
  items: {
    title: string
    href: string
    icon?: string
  }[]
}

export const page_routes : PageRoutesType[] = [
  {
    title: "Dashboards",
    items: [
      { title: "E-commerce", href: "/ecommerce", icon: "ShoppingBag" },
      { title: "CRM", href: "/crm", icon: "BarChart" },
      { title: "Analytics", href: "/analytics", icon: "Gauge" },
      { title: "Project Management", href: "/project-management", icon: "FolderDot" },
      { title: "Cyripto", href: "/", icon: "WalletMinimal" },
      { title: "Hospital", href: "/", icon: "SquareActivity" },
      { title: "School", href: "/", icon: "GraduationCap" },
      { title: "Course", href: "/", icon: "LandPlot" },
    ],
  },
  {
    title: "Apps",
    items: [
      { title: "Chats", href: "/", icon: "MessageSquare" },
      { title: "Email", href: "/", icon: "Mail" },
      { title: "Kanban", href: "/", icon: "SquareKanban" },
      { title: "Todo List", href: "/", icon: "SquareCheck" },
      { title: "Notes", href: "/", icon: "StickyNote" },
      { title: "Calendar", href: "/", icon: "Calendar" },
    ],
  },
  {
    title: "Pages",
    items: [
      { title: "Profile", href: "/", icon: "ContactRound" },
      { title: "Users List", href: "/", icon: "Users" },
      { title: "Settings", href: "/", icon: "Settings" },
      { title: "Products", href: "/", icon: "PackageSearch" },
      { title: "Checkout", href: "/", icon: "CreditCard" },
      { title: "Authentication", href: "/", icon: "Fingerprint" },
      { title: "Invoices", href: "/", icon: "Scroll" },
      { title: "Blog", href: "/", icon: "Rss" },
      { title: "Pricing", href: "/", icon: "Gem" },
      { title: "Help Center", href: "/", icon: "BadgeHelp" },
    ],
  },
];
