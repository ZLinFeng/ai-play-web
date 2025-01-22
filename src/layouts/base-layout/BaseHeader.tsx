import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons"
import { Button } from "antd"
import { useContext } from "react"
import { RuntimeContext } from "../context"

const BaseHeader: React.FC = () => {
  const context = useContext(RuntimeContext)

  return (
    <>
      <header className="h-[50px] flex items-center bg-slate-50">
        <Button
          type="primary"
          size="small"
          icon={
            context.menuCollapsed ? (
              <MenuUnfoldOutlined />
            ) : (
              <MenuFoldOutlined />
            )
          }
          className="ml-4 border-none"
          onClick={() => {
            console.log("click")
            context.setMenuCollapsed(!context.menuCollapsed)
          }}
        />
      </header>
    </>
  )
}

export default BaseHeader
