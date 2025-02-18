import CollectionTable from "@/components/table/CollectionTable"
import {
  DeleteFilled,
  PlusCircleOutlined,
  SignalFilled,
} from "@ant-design/icons"
import { Button, DatePicker, Pagination } from "antd"
import { useState } from "react"

const { RangePicker } = DatePicker

const options = [
  {
    value: "keyword",
    label: "Keyword",
  },
  {
    value: "account",
    label: "Account",
  },
]

export default () => {
  const [selected, setSelected] = useState(false)
  return (
    <div className="flex flex-col w-full gap-4">
      {/* 查询条件栏 */}
      <div className="flex w-full">
        <div className="flex gap-4">
          <Button
            color="purple"
            variant="solid"
            disabled={!selected}
            icon={<SignalFilled />}
          >
            Bulk Analysis
          </Button>
          <Button
            color="red"
            variant="solid"
            disabled={!selected}
            icon={<DeleteFilled />}
          >
            Bulk Delete
          </Button>
          <Button type="primary" icon={<PlusCircleOutlined />}>
            Add
          </Button>
        </div>
      </div>
      {/* 查询结果 */}
      <div className="flex justify-center flex-col gap-4">
        <CollectionTable onSelectionChange={setSelected} />
        <div className="flex justify-end">
          <Pagination total={85} defaultPageSize={20} defaultCurrent={1} />
        </div>
      </div>
    </div>
  )
}
