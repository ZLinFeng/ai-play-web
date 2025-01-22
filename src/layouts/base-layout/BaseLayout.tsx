import { useContext } from "react"
import { Outlet } from "umi"
import { RuntimeContext } from "../context"
import BaseHeader from "./BaseHeader"
import BaseSider from "./BaseSider"

const BaseLayout = () => {
  const context = useContext(RuntimeContext)

  return (
    <>
      <section className="h-screen w-screen flex">
        <BaseSider />
        <div className="flex flex-col flex-grow">
          <BaseHeader />
          <div className="flex-grow pt-4">
            <Outlet />
          </div>
        </div>
      </section>
    </>
  )
}

export default BaseLayout
