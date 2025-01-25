import { useContext, useEffect, useRef, useState } from "react"
import { Outlet } from "umi"
import { RuntimeContext } from "../context"
import BaseHeader from "./BaseHeader"
import BaseSider from "./BaseSider"

const BaseLayout = () => {
  const { menuCollapsed } = useContext(RuntimeContext)
  const ref = useRef<HTMLDivElement>(null)

  const [bodyWidth, setBodyWidth] = useState(0)

  const computedContentWidth = (
    collapsed: boolean,
    windowWidth: number,
  ): number => {
    if (collapsed) {
      return windowWidth - 50
    } else {
      return windowWidth - 240
    }
  }

  window.addEventListener("resize", () => {
    setBodyWidth(computedContentWidth(menuCollapsed, ref.current?.clientWidth!))
  })

  useEffect(() => {
    setBodyWidth(computedContentWidth(menuCollapsed, ref.current?.clientWidth!))
  }, [menuCollapsed])

  return (
    <>
      <section className="h-screen w-screen flex" ref={ref}>
        <BaseSider />
        <div
          className="flex flex-col flex-1 min-w-[800px]"
          style={{ width: bodyWidth }}
        >
          <BaseHeader />
          <div className="flex-1 p-4">
            <Outlet />
          </div>
        </div>
      </section>
    </>
  )
}

export default BaseLayout
