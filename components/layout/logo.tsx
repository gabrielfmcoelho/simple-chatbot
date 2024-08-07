import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 font-bold px-5 py-4">
      <img src="/logo.png" className="w-5 h-5" /> ShadcnUIKit
    </Link>
  );
}
