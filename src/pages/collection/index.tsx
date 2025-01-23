import CollectionTable from "@/components/table/CollectionTable"
import { PlusCircleOutlined } from "@ant-design/icons"
import { Button, DatePicker, Input, Select, Space } from "antd"
import { useEffect, useRef, useState } from "react"

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
  const parentRef = useRef<HTMLDivElement | null>(null)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (parentRef.current) {
      // 获取父节点的宽度
      setWidth(parentRef.current.offsetWidth)
    }
  }, [])

  return (
    <div className="flex flex-col w-full gap-4" ref={parentRef}>
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
        <div className="pr-4">
          <Button type="primary" icon={<PlusCircleOutlined />}>
            Add
          </Button>
        </div>
      </div>
      {/* 查询结果 */}
      <div className="pt-4 flex justify-center]" style={{ width: width }}>
        <CollectionTable />
      </div>
    </div>
  )
}
