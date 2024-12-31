import {
  CodepenOutlined,
  DashboardOutlined,
  FolderOpenOutlined,
  ForkOutlined,
  RobotOutlined,
  SettingOutlined,
} from "@ant-design/icons"
import {
  ProConfigProvider,
  ProLayout,
  ProSettings,
} from "@ant-design/pro-components"
import { useState } from "react"
import { Link, Outlet } from "umi"

export default function Layout() {
  const [pathname, setPathname] = useState(location.pathname)

  const settings: ProSettings | undefined = {
    layout: "top",
    splitMenus: true,
    fixSiderbar: true,
    title: "AI Play Admin",
  }

  const props = {
    route: {
      path: "/",
      routes: [
        {
          path: "/dashboard",
          name: "Dashboard",
          icon: <DashboardOutlined />,
        },
        {
          path: "/models",
          name: "Models",
          icon: <CodepenOutlined />,
        },
        {
          path: "/workflow",
          name: "Workflow",
          icon: <ForkOutlined />,
        },
        {
          path: "/resources",
          name: "Resources",
          icon: <FolderOpenOutlined />,
        },
        {
          path: "/chatbot",
          name: "Chat Bot",
          icon: <RobotOutlined />,
        },
        {
          path: "/settings",
          name: "Settings",
          icon: <SettingOutlined />,
        },
      ],
    },
  }

  return (
    <div className="h-screen w-screen">
      <ProConfigProvider dark={true}>
        <ProLayout
          location={{
            pathname: pathname == "/" ? "/dashboard" : pathname,
          }}
          menu={{
            type: "group",
          }}
          menuItemRender={(item, dom) => {
            return (
              <Link
                onClick={() => {
                  setPathname(item.path || "/dashboard")
                }}
                to={item.path || "/dashboard"}
              >
                {dom}
              </Link>
            )
          }}
          {...props}
          {...settings}
        >
          <div className="w-full h-screen">
            <Outlet />
          </div>
        </ProLayout>
      </ProConfigProvider>
    </div>
  )
}
