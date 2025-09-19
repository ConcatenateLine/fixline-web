import { Link } from "@chakra-ui/react";

interface HeaderBarMenuItemProps {
  label: string;
  href: string;
}

export default function HeaderBarMenuItem({
  label,
  href,
}: HeaderBarMenuItemProps) {
  return (
    <Link
      href={href}
      color="link"
      transition="all 0.2s ease-in-out"
      fontSize="md"
      _hover={{
        textDecoration: "underline",
        transform: "scale(1.05)",
        color: "link-hover",
      }}
    >
      {label}
    </Link>
  );
}
