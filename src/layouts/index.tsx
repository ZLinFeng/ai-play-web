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
            //controlItemBgActive: "#fafafa",
          },
          components: {
            Menu: {
              collapsedWidth: 50,
              itemBg: "#0f172a",
              itemActiveBg: "#595959",
              itemColor: "#8c8c8c",
              itemHoverColor: "#ffffff",
              itemSelectedColor: "#ffffff",
              itemSelectedBg: "#595959",
              subMenuItemBg: "#0f172a",
              subMenuItemSelectedColor: "#ffffff",
              popupBg: "#0f172a",
              //darkSubMenuItemBg: "#0f172a",
              //darkItemSelectedColor: "#ffffff",
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
            Select: {
              optionActiveBg: "#f0f0f0",
              optionSelectedBg: "#f0f0f0",
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
