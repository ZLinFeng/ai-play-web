import {
  Button,
  DatePicker,
  Input,
  Select,
  Space,
  Table,
  type TableProps,
} from "antd"
import { useState } from "react"
import "./table.css"

const { RangePicker } = DatePicker

type ColumnsType<T extends object> = TableProps<T>["columns"]
type TableRowSelection<T extends object = object> =
  TableProps<T>["rowSelection"]

interface DataType {
  id: string
  appName: string
  scheduleTime: string
  executeTime: string
  status: string
}

const columns: ColumnsType<DataType> = [
  {
    title: "Task ID",
    dataIndex: "id",
    key: "id",
    fixed: "left",
    width: 200,
  },
  {
    title: "App Name",
    dataIndex: "appName",
    key: "appName",
    fixed: "left",
    width: 200,
  },
  {
    title: "Schedule Time",
    dataIndex: "scheduleTime",
    key: "scheduleTime",
    width: 200,
  },
  {
    title: "Execution Time",
    dataIndex: "executeTime",
    key: "executeTime",
    width: 200,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    width: 200,
  },
  {
    title: "Action",
    key: "action",
    fixed: "right",
    width: 200,
    render: (_, record) => (
      <Space size="middle">
        <Button color="magenta" variant="outlined" size="small">
          Details
        </Button>
      </Space>
    ),
  },
]

const LogTable: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])
  const [data, setData] = useState<DataType[]>([])

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys)
  }

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
  }

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex gap-4">
        <Space.Compact>
          <Input
            addonBefore="App Name"
            placeholder="input App text"
            allowClear
          />
        </Space.Compact>
        <Select
          className="w-[200px]"
          placeholder="Select App Status"
          options={[
            { value: "running", label: "Running" },
            { value: "failed", label: "Failed" },
            { value: "success", label: "Success" },
          ]}
          allowClear
        />
        <RangePicker />
      </div>
      <div className="w-full flex justify-center">
        <Table<DataType>
          pagination={{
            position: ["bottomRight"],
            total: 100,
            current: 2,
            pageSize: 30,
          }}
          columns={columns}
          dataSource={data}
          scroll={{ x: "max-content" }}
          className={`collection-table w-full min-w-full`}
          rowSelection={rowSelection}
        />
      </div>
    </div>
  )
}
export default LogTable
