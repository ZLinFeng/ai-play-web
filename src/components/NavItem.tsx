import { Link } from "@heroui/link";

interface NavItemProps {
  icon: React.ReactNode;
  label?: string;
  to: string;
}

const NavItem: React.FC<NavItemProps> = (props) => {
  return (
    <>
      <Link href={props.to}>
        <div className="flex gap-1 items-center">
          {props.icon}
          <span>{props.label}</span>
        </div>
      </Link>
    </>
  );
};

export default NavItem;
