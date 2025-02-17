import type { TableProps } from "antd"
import { Button, Space, Table } from "antd"
import React, { useState } from "react"
import "./table.css"

type ColumnsType<T extends object> = TableProps<T>["columns"]
type TableRowSelection<T extends object = object> =
  TableProps<T>["rowSelection"]

interface DataType {
  key: string
  collectionName: string
  collectionType: number
  sources: string[]
  collectionStartTime: string
  collectionEndTime: string
  latestCollectionTime: string
  latestScheduleTime: string
  createTime: string
  updateTime: string
  status: string
  frequency: string
}

interface CollectionTableProps {
  onSelectionChange: (value: boolean) => void
}

const columns: ColumnsType<DataType> = [
  {
    title: "Collection Name",
    dataIndex: "collectionName",
    key: "collectionName",
    fixed: "left",
    width: 200,
  },
  {
    title: "Collection Type",
    dataIndex: "collectionType",
    key: "collectionType",
    fixed: "left",
    width: 200,
  },
  {
    title: "Sources",
    dataIndex: "sources",
    key: "source",
    width: 200,
  },
  {
    title: "Collection Start Time",
    dataIndex: "collectionStartTime",
    key: "collectionStartTime",
    width: 200,
  },
  {
    title: "Collection End Time",
    dataIndex: "collectionEndTime",
    key: "collectionEndTime",
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
    title: "Create Time",
    dataIndex: "createTime",
    key: "createTime",
    width: 200,
  },
  {
    title: "Update Time",
    dataIndex: "updateTime",
    key: "updateTime",
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
  const [data, setData] = useState<DataType[]>([])

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys)
    onSelectionChange(newSelectedRowKeys.length > 0)
  }

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
  }

  return (
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
  )
}
export default CollectionTable
