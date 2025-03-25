import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/logo.png"
      width={30}
      height={30}
      className="me-1 rounded-sm group-data-collapsible:size-7"
      alt="shadcn ui kit logo"
      unoptimized
    />
  );
}
