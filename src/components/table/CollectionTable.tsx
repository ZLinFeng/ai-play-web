import { Collection } from "@/api/collection"
import type { TableProps } from "antd"
import { Button, Space, Table } from "antd"
import React, { useState } from "react"
import "./table.css"

type ColumnsType<T extends object> = TableProps<T>["columns"]
type TableRowSelection<T extends object = object> =
  TableProps<T>["rowSelection"]

interface CollectionTableProps {
  onSelectionChange: (value: boolean) => void
}

const columns: ColumnsType<Collection.TaskResult> = [
  {
    title: "Task Name",
    dataIndex: "taskName",
    key: "taskName",
    fixed: "left",
    width: 200,
  },
  {
    title: "Task Type",
    dataIndex: "taskType",
    key: "taskType",
    fixed: "left",
    width: 200,
  },
  {
    title: "Sources",
    dataIndex: "sources",
    key: "sources",
    width: 200,
  },
  {
    title: "Start Time",
    dataIndex: "startTime",
    key: "startTime",
    width: 200,
  },
  {
    title: "End Time",
    dataIndex: "endTime",
    key: "endTime",
    width: 200,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    width: 200,
  },
  {
    title: "Frequency",
    dataIndex: "frequency",
    key: "frequency",
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
        <Button color="blue" variant="outlined" size="small">
          Edit
        </Button>
        <Button color="purple" variant="outlined" size="small">
          Analysis
        </Button>
        <Button danger size="small">
          Delete
        </Button>
      </Space>
    ),
  },
]

const CollectionTable: React.FC<CollectionTableProps> = ({
  onSelectionChange,
}) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])
  const [data, setData] = useState<Collection.TaskResult[]>([])

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys)
    onSelectionChange(newSelectedRowKeys.length > 0)
  }

  const rowSelection: TableRowSelection<Collection.TaskResult> = {
    selectedRowKeys,
    onChange: onSelectChange,
  }

  return (
    <div className="w-full flex justify-center">
      <Table<Collection.TaskResult>
        columns={columns}
        dataSource={data}
        scroll={{ x: "max-content" }}
        className={`collection-table w-full min-w-full`}
        rowSelection={rowSelection}
      />
    </div>
  )
}
export default CollectionTable
