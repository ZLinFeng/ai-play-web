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
            controlItemBgActive: "#fafafa",
          },
          components: {
            Menu: {
              collapsedWidth: 50,
              darkPopupBg: "#0f172a",
              darkSubMenuItemBg: "#0f172a",
            },
            Button: {
              primaryShadow: "",
            },
            Table: {
              headerBg: "#0f172a",
              headerColor: "#fff",
              headerBorderRadius: 0,
              cellPaddingBlockMD: 10,
              rowSelectedBg: "#fafafa",
              rowSelectedHoverBg: "fafafa",
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
