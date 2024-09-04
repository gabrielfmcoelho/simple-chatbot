type PageRoutesType = {
  title: string;
  items: PageRoutesItemType;
};

type PageRoutesItemType = {
  title: string;
  href: string;
  icon?: string;
  items?: PageRoutesItemType;
}[];

export const page_routes: PageRoutesType[] = [
  {
    title: "Dashboards",
    items: [
      {
        title: "Default",
        href: "/dashboard/default",
        icon: "PieChart"
      },
      {
        title: "E-commerce",
        href: "/dashboard/ecommerce",
        icon: "ShoppingBag"
      },
      { title: "CRM", href: "/dashboard/crm", icon: "BarChart" },
      {
        title: "Website Analytics",
        href: "/dashboard/website-analytics",
        icon: "Gauge"
      },
      {
        title: "Project Management",
        href: "/dashboard/project-management",
        icon: "FolderDot"
      },
      { title: "Cyripto", href: "/dashboard/cyripto", icon: "WalletMinimal" }
    ]
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
      { title: "Api Key", href: "/dashboard/apps/api-key", icon: "Key" }
    ]
  },
  {
    title: "Pages",
    items: [
      { title: "Profile", href: "/dashboard/pages/profile", icon: "ContactRound" },
      { title: "Users", href: "/dashboard/pages/users", icon: "Users" },
      { title: "Settings", href: "/dashboard/pages/settings", icon: "Settings" },
      {
        title: "Orders",
        href: "/dashboard/pages/orders",
        icon: "PackageSearch",
        items: [
          { title: "List", href: "/dashboard/pages/orders" },
          { title: "Detail", href: "/dashboard/pages/order/1" }
        ]
      },
      { title: "Products", href: "/dashboard/pages/products", icon: "PackageSearch" },
      { title: "Checkout", href: "/", icon: "CreditCard" },
      { title: "Authentication", href: "/", icon: "Fingerprint" },
      { title: "Invoices", href: "/", icon: "Scroll" },
      { title: "Blog", href: "/", icon: "Rss" },
      { title: "Pricing Table", href: "/", icon: "Gem" },
      { title: "Help Center", href: "/", icon: "BadgeHelp" }
    ]
  }
];
