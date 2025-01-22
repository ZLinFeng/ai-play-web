import BaseLayout from "@/layouts/base-layout/BaseLayout"
import { ConfigProvider } from "antd"
import { useState } from "react"
import { RuntimeContext } from "./context"

export default function Layout() {
  const [menuCollapsed, setMenuCollapsed] = useState(false)
  const context: RuntimeContext = {
    menuCollapsed: menuCollapsed,
    setMenuCollapsed: setMenuCollapsed,
  }

  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#0f172a",
            fontFamily: "Open Sans",
          },
          components: {
            Menu: {
              collapsedWidth: 50,
            },
          },
        }}
      >
        <RuntimeContext.Provider value={context}>
          <BaseLayout />
        </RuntimeContext.Provider>
      </ConfigProvider>
    </>
  )
}
