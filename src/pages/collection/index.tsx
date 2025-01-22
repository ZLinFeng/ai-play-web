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
    <div className="flex flex-col w-full gap-4">
      {/* 查询条件栏 */}
      <div className="flex">
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
      {/* 查询结果 */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 pl-4 pt-4">
          <div className="h-[20px] w-[5px] bg-slate-900 rounded" />
          <span className="text-sm font-bold">Keyword Collection</span>
        </div>
        <div className="flex flex-wrap gap-8">
          <div className="w-[200px] h-[80px] border border-slate-900 rounded-md"></div>
          <div className="w-[200px] h-[80px] border border-slate-900 rounded-md"></div>
          <div className="w-[200px] h-[80px] border border-slate-900 rounded-md"></div>
          <div className="w-[200px] h-[80px] border border-slate-900 rounded-md"></div>
          <div className="w-[200px] h-[80px] border border-slate-900 rounded-md"></div>
          <div className="w-[200px] h-[80px] border border-slate-900 rounded-md"></div>
        </div>
        <div></div>
      </div>
    </div>
  )
}
