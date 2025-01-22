import LogoIcon from "@/components/icons/Logo"
import {
  AppstoreFilled,
  BugFilled,
  ControlFilled,
  DashboardFilled,
  SignalFilled,
} from "@ant-design/icons"
import { Menu, MenuProps } from "antd"
import { useContext, useEffect, useState } from "react"
import { Link, useLocation } from "umi"
import { RuntimeContext } from "../context"

type MenuItem = Required<MenuProps>["items"][number]

const items: MenuItem[] = [
  { key: "1", icon: <DashboardFilled />, label: "Dashboard" },
  {
    key: "2",
    icon: <BugFilled />,
    label: <Link to={"/collection"}>Collection</Link>,
  },
  {
    key: "sub1",
    icon: <ControlFilled />,
    label: "Processing",
    children: [
      {
        key: "3",
        label: "Model",
      },
      {
        key: "4",
        label: "Workflow",
      },
      {
        key: "5",
        label: "Task",
      },
    ],
  },
  {
    key: "sub2",
    label: "Analysis",
    icon: <SignalFilled />,
    children: [
      { key: "6", label: "Graph" },
      { key: "7", label: "Table" },
    ],
  },
  {
    key: "sub3",
    label: "Management",
    icon: <AppstoreFilled />,
    children: [
      { key: "8", label: "Host" },
      { key: "9", label: "Component" },
    ],
  },
]

const BaseSider: React.FC = () => {
  const context = useContext(RuntimeContext)
  const location = useLocation()

  const [selectedKeys, setSelectedKeys] = useState<string[]>([])

  useEffect(() => {
    console.log("location: ", location.pathname)
    switch (location.pathname) {
      case "/":
        setSelectedKeys(["1"])
        break
      case "/collection":
        console.log("2")
        setSelectedKeys(["2"])
        break
      case "/model":
        setSelectedKeys(["3"])
        break
      case "/workflow":
        setSelectedKeys(["4"])
        break
      case "/task":
        setSelectedKeys(["5"])
        break
      case "/graph":
        setSelectedKeys(["6"])
        break
      case "/table":
        setSelectedKeys(["7"])
        break
      case "/host":
        setSelectedKeys(["8"])
        break
      case "/component":
        setSelectedKeys(["9"])
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
        }`}
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
          theme="dark"
          inlineCollapsed={context.menuCollapsed}
          items={items}
        />
      </aside>
    </>
  )
}

export default BaseSider
