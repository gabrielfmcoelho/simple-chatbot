type PageRoutesType = {
  title: string;
  items: PageRoutesItemType;
};

type PageRoutesItemType = {
  title: string;
  href: string;
  icon?: string;
  isComing?: boolean;
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
      { title: "Cyripto", href: "/dashboard/cyripto", icon: "WalletMinimal" },
      { title: "Academy", href: "#", icon: "GraduationCap", isComing: true },
      { title: "Online Courses", href: "#", icon: "LandPlot", isComing: true }
    ]
  },
  {
    title: "Apps",
    items: [
      { title: "Chats", href: "/dashboard/apps/chat", icon: "MessageSquare" },
      { title: "Inbox", href: "/dashboard/apps/inbox", icon: "Mail", isComing: true },
      { title: "Kanban", href: "/dashboard/apps/kanban", icon: "SquareKanban", isComing: true },
      {
        title: "Todo List",
        href: "/dashboard/apps/todo-list",
        icon: "SquareCheck",
        isComing: true
      },
      { title: "Notes", href: "/dashboard/apps/notes", icon: "StickyNote", isComing: true },
      { title: "Calendar", href: "/dashboard/apps/calendar", icon: "Calendar", isComing: true },
      { title: "File Manager", href: "#", icon: "Package", isComing: true },
      { title: "Api Keys", href: "/dashboard/apps/api-keys", icon: "Key", isComing: true }
    ]
  },
  {
    title: "Pages",
    items: [
      {
        title: "Landing Page",
        href: "#",
        icon: "Proportions",
        isComing: true
      },
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
          { title: "Order Detail", href: "/dashboard/pages/order/1", isComing: true }
        ]
      },
      {
        title: "Products",
        href: "/dashboard/pages/products",
        icon: "PackageSearch",
        items: [
          { title: "Product List", href: "/dashboard/pages/products" },
          { title: "Product Detail", href: "/dashboard/pages/products/1" },
          { title: "Add Product", href: "/dashboard/pages/products/create" }
        ]
      },
      {
        title: "Pricing",
        href: "#",
        icon: "BadgeDollarSign",
        items: [
          { title: "Column Pricing", href: "#", isComing: true },
          { title: "Table Pricing", href: "#", isComing: true },
          { title: "Pricing Modal", href: "#", isComing: true }
        ]
      },
      {
        title: "Authentication",
        href: "/",
        icon: "Fingerprint",
        items: [
          { title: "Login v1", href: "/dashboard/login/v1" },
          { title: "Login v2", href: "/dashboard/login/v2" },
          { title: "Register v1", href: "/dashboard/register/v1" },
          { title: "Register v2", href: "/dashboard/register/v2" },
          { title: "Forgot Password", href: "/dashboard/forgot-password" }
        ]
      },
      {
        title: "Error Pages",
        href: "/",
        icon: "Fingerprint",
        items: [
          { title: "404", href: "/dashboard/pages/error/404" },
          { title: "500", href: "/dashboard/pages/error/500" },
          { title: "403", href: "/dashboard/pages/error/403" }
        ]
      }
    ]
  }
];
