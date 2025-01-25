import CollectionTable from "@/components/table/CollectionTable"
import {
  DeleteFilled,
  PlusCircleOutlined,
  SignalFilled,
} from "@ant-design/icons"
import { Button, DatePicker, Input, Select, Space } from "antd"
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
        <div className="flex-grow">
          <Space size="middle">
            <Space.Compact>
              <Select
                defaultValue="Keyword"
                options={options}
                className="w-[200px]"
              />
              <Input placeholder="Collection Name" />
            </Space.Compact>
            <Space.Compact>
              <RangePicker />
            </Space.Compact>
            <Space.Compact>
              <Button type="primary">Search</Button>
            </Space.Compact>
            <Space.Compact>
              <Button>Reset</Button>
            </Space.Compact>
          </Space>
        </div>
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
      <div className="pt-4 flex justify-center]">
        <CollectionTable onSelectionChange={setSelected} />
      </div>
    </div>
  )
}
