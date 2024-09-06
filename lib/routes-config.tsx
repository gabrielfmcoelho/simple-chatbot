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
      { title: "Todo List", href: "/dashboard/apps/todo-list", icon: "SquareCheck" },
      { title: "Notes", href: "/dashboard/apps/notes", icon: "StickyNote" },
      { title: "Calendar", href: "/dashboard/apps/calendar", icon: "Calendar" },
      { title: "Api Keys", href: "/dashboard/apps/api-keys", icon: "Key" }
    ]
  },
  {
    title: "Pages",
    items: [
      {
        title: "Profile",
        href: "/dashboard/pages/profile",
        icon: "ContactRound"
      },
      { title: "Users", href: "/dashboard/pages/users", icon: "Users" },
      {
        title: "Settings",
        href: "/dashboard/pages/settings",
        icon: "Settings",
        items: [
          { title: "Profile", href: "/dashboard/pages/settings" },
          { title: "Account", href: "/dashboard/pages/settings/account" },
          { title: "Appearance", href: "/dashboard/pages/settings/appearance" },
          { title: "Notifications", href: "/dashboard/pages/settings/notifications" },
          { title: "Display", href: "/dashboard/pages/settings/display" }
        ]
      },
      {
        title: "Orders",
        href: "/dashboard/pages/orders",
        icon: "PackageSearch",
        items: [
          { title: "Order List", href: "/dashboard/pages/orders" },
          { title: "Order Detail", href: "/dashboard/pages/order/1" }
        ]
      },
      {
        title: "Products",
        href: "/dashboard/pages/products",
        icon: "PackageSearch",
        items: [
          { title: "Product List", href: "/dashboard/pages/products" },
          { title: "Product Detail", href: "/dashboard/pages/product/1" }
        ]
      },
      {
        title: "Authentication",
        href: "/",
        icon: "Fingerprint",
        items: [
          { title: "Login", href: "/dashboard/pages/login" },
          { title: "Register", href: "/dashboard/pages/order/register" }
        ]
      }
    ]
  }
];
