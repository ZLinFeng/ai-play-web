import { useContext, useEffect, useRef, useState } from "react"
import { Outlet } from "umi"
import { RuntimeContext } from "../context"
import BaseHeader from "./BaseHeader"
import BaseSider from "./BaseSider"

const BaseLayout = () => {
  const context = useContext(RuntimeContext)

  const ref = useRef<HTMLDivElement>(null)

  const [bodyWidth, setBodyWidth] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        setBodyWidth(ref.current.clientWidth)
      }
    }

    handleResize()
  }, [])

  return (
    <>
      <section className="h-screen w-screen flex">
        <BaseSider />
        <div className="flex flex-col flex-grow" ref={ref}>
          <BaseHeader />
          <div className="flex-grow p-4 w-full">
            <Outlet />
          </div>
        </div>
      </section>
    </>
  )
}

export default BaseLayout
