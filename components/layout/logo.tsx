import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/logo.png"
      width={30}
      height={30}
      className="me-1 w-full rounded-[7px] group-data-[collapsible]:size-8"
      alt="shadcn ui kit logo"
    />
  );
}
