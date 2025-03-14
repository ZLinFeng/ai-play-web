import { Link } from "@heroui/link";

interface NavItemProps {
  icon: React.ReactNode;
  label?: string;
  to: string;
}

const NavItem: React.FC<NavItemProps> = (props) => {
  return (
    <div>
      <Link isBlock color="foreground" href={props.to}>
        <div className="flex gap-2 items-center text-xl">
          {props.icon}
          <span>{props.label}</span>
        </div>
      </Link>
    </div>
  );
};

export default NavItem;
