import LogoIcon from "@/components/icons/Logo"
import {
  AppstoreFilled,
  BugFilled,
  ControlFilled,
  DashboardFilled,
  DatabaseOutlined,
  SignalFilled,
} from "@ant-design/icons"
import { Menu, MenuProps } from "antd"
import { useContext, useEffect, useState } from "react"
import { Link, useLocation } from "umi"
import { RuntimeContext } from "../context"

type MenuItem = Required<MenuProps>["items"][number]

const items: MenuItem[] = [
  {
    key: "1",
    icon: <DashboardFilled />,
    label: <Link to={"/dashboard"}>Dashboard</Link>,
  },
  {
    key: "2",
    icon: <BugFilled />,
    label: "Collection",
    children: [
      {
        key: "3",
        label: <Link to={"/tasks"}>Tasks</Link>,
      },
      {
        key: "4",
        label: "Collection Logs",
      },
    ],
  },
  {
    key: "sub1",
    icon: <ControlFilled />,
    label: "Processing",
    children: [
      {
        key: "5",
        label: "Models",
      },
      {
        key: "6",
        label: "Workflow",
      },
      {
        key: "7",
        label: "Jobs",
      },
      {
        key: "8",
        label: "Processing Logs",
      },
    ],
  },
  {
    key: "sub2",
    label: "Analysis",
    icon: <SignalFilled />,
    children: [
      { key: "9", label: "Cases" },
      { key: "10", label: "Statistics" },
      { key: "11", label: "Graph" },
    ],
  },
  {
    key: "sub3",
    label: "Resource",
    icon: <DatabaseOutlined />,
    children: [
      { key: "12", label: "Information Table" },
      { key: "13", label: "Knowledge Graph" },
      { key: "17", label: "Digital Profile" },
    ],
  },
  {
    key: "sub4",
    label: "Management",
    icon: <AppstoreFilled />,
    children: [
      { key: "14", label: "Hosts" },
      { key: "15", label: "Components" },
      { key: "16", label: "Authorization" },
    ],
  },
]

const BaseSider: React.FC = () => {
  const context = useContext(RuntimeContext)
  const location = useLocation()

  const [selectedKeys, setSelectedKeys] = useState<string[]>([])

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setSelectedKeys(["1"])
        break
      case "/dashboard":
        setSelectedKeys(["1"])
        break
      case "/tasks":
        setSelectedKeys(["3"])
        break
      case "/history":
        setSelectedKeys(["4"])
        break
      case "/model":
        setSelectedKeys(["5"])
        break
      case "/workflow":
        setSelectedKeys(["6"])
        break
      case "/task":
        setSelectedKeys(["7"])
        break
      case "/graph":
        setSelectedKeys(["8"])
        break
      case "/table":
        setSelectedKeys(["9"])
        break
      case "/host":
        setSelectedKeys(["10"])
        break
      case "/component":
        setSelectedKeys(["11"])
        break
      default:
        setSelectedKeys([])
        break
    }
  }, [location.pathname])

  return (
    <>
      <aside
        className={`bg-slate-900 h-full flex flex-col items-center ${
          context.menuCollapsed ? "w-[50px]" : "w-[240px]"
        } ${
          context.menuCollapsed ? "min-w-[50px]" : "min-w-[240px]"
        } transition-width duration-200`}
      >
        <div
          className={`mt-4 flex w-full items-center ${
            context.menuCollapsed ? "justify-center" : "justify-start"
          } ${context.menuCollapsed ? "" : "pl-4"}`}
        >
          <LogoIcon />
          {!context.menuCollapsed && (
            <span className="text-white text-2xl pl-2">Berry Admin</span>
          )}
        </div>
        <Menu
          className="pt-4 flex-grow"
          selectedKeys={selectedKeys}
          defaultOpenKeys={["sub1", "sub2", "sub3"]}
          mode="inline"
          //theme="dark"
          inlineCollapsed={context.menuCollapsed}
          items={items}
        />
      </aside>
    </>
  )
}

export default BaseSider
