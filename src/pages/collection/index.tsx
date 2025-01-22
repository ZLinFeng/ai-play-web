import { PlusCircleOutlined } from "@ant-design/icons"
import { Button, DatePicker, Input, Select, Space } from "antd"

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
  return (
    <div className="flex-col w-full">
      <div className="pl-4 flex">
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
        <div className="pr-4">
          <Button type="primary" icon={<PlusCircleOutlined />}>
            Add
          </Button>
        </div>
      </div>
      <div className="flex justify-center"></div>
    </div>
  )
}
