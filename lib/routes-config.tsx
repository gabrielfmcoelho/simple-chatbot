type PageRoutesType = {
  title: string;
  items: {
    title: string;
    href: string;
    icon?: string;
  }[];
};

export const page_routes: PageRoutesType[] = [
  {
    title: "Dashboards",
    items: [
      {
        title: "E-commerce",
        href: "/dashboard/ecommerce",
        icon: "ShoppingBag",
      },
      { title: "CRM", href: "/dashboard/crm", icon: "BarChart" },
      {
        title: "Analytics",
        href: "/dashboard/website-analytics",
        icon: "Gauge",
      },
      {
        title: "Project Management",
        href: "/dashboard/project-management",
        icon: "FolderDot",
      },
      { title: "Cyripto", href: "/dashboard/cyripto", icon: "WalletMinimal" },
      {
        title: "Hospital",
        href: "/dashboard/hospital",
        icon: "SquareActivity",
      },
    ],
  },
  {
    title: "Apps",
    items: [
      { title: "Chats", href: "/dashboard/apps/chat", icon: "MessageSquare" },
      { title: "Mail", href: "/dashboard/apps/mail", icon: "Mail" },
      { title: "Kanban", href: "/dashboard/apps/kanban", icon: "SquareKanban" },
      { title: "Todo List", href: "/dashboard/apps/todo", icon: "SquareCheck" },
      { title: "Notes", href: "/dashboard/apps/notes", icon: "StickyNote" },
      { title: "Calendar", href: "/dashboard/apps/calendar", icon: "Calendar" },
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
