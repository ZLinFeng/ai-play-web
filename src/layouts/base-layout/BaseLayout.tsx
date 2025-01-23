import { useContext, useEffect, useRef, useState } from "react"
import { Outlet } from "umi"
import { RuntimeContext } from "../context"
import BaseHeader from "./BaseHeader"
import BaseSider from "./BaseSider"

const BaseLayout = () => {
  const { menuCollapsed } = useContext(RuntimeContext)
  const ref = useRef<HTMLDivElement>(null)

  const [bodyWidth, setBodyWidth] = useState(0)

  useEffect(() => {
    console.log("menuCollapsed:", menuCollapsed)
    if (ref.current) {
      console.log("ref.current.offsetWidth:", ref.current.offsetWidth)
      setBodyWidth(ref.current.offsetWidth)
    }
  }, [menuCollapsed])

  return (
    <>
      <section className="h-screen w-screen flex">
        <BaseSider />
        <div className="flex flex-col" ref={ref}>
          <BaseHeader />
          <div className="flex-grow p-4">
            <Outlet />
          </div>
        </div>
      </section>
    </>
  )
}

export default BaseLayout
