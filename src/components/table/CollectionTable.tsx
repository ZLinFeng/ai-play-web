import type { TableProps } from "antd"
import { Space, Table } from "antd"
import "./table.css"

type ColumnsType<T extends object> = TableProps<T>["columns"]

interface DataType {
  key: string
  collectionName: string
  collectionType: number
  source: string
  createTime: string
  updateTime: string
  startTime: string
  endTime: string
  status: string
  frequency: string
  tags: string[]
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
    title: "Source",
    dataIndex: "collectionName",
    key: "source",
    width: 200,
  },
  {
    title: "Create Time",
    dataIndex: "collectionName",
    key: "createTime",
    width: 200,
  },
  {
    title: "Update Time",
    dataIndex: "collectionName",
    key: "updateTime",
    width: 200,
  },
  {
    title: "Start Time",
    dataIndex: "collectionName",
    key: "startTime",
    width: 200,
  },
  {
    title: "End Time",
    dataIndex: "collectionName",
    key: "endTime",
    width: 200,
  },
  {
    title: "Status",
    dataIndex: "collectionName",
    key: "status",
    width: 200,
  },
  {
    title: "Frequency",
    dataIndex: "collectionName",
    key: "1",
    width: 200,
  },
  {
    title: "Frequency",
    dataIndex: "collectionName",
    key: "2",
    width: 200,
  },
  {
    title: "Frequency",
    dataIndex: "collectionName",
    key: "3",
    width: 200,
  },
  {
    title: "Frequency",
    dataIndex: "collectionName",
    key: "4",
    width: 200,
  },
  {
    title: "Action",
    key: "action",
    fixed: "right",
    width: 200,
    render: (_, record) => (
      <Space size="middle">
        <a>Delete</a>
      </Space>
    ),
  },
]

const data: DataType[] = [
  {
    key: "1",
    collectionName: "John Brown",
    collectionType: 32,
    source: "New York No. 1",
    tags: ["nice", "developer"],
    createTime: "",
    updateTime: "",
    startTime: "",
    endTime: "",
    status: "",
    frequency: "",
  },
  {
    key: "2",
    collectionName: "Jim Green",
    collectionType: 42,
    source: "London No. 1",
    tags: ["loser"],
    createTime: "",
    updateTime: "",
    startTime: "",
    endTime: "",
    status: "",
    frequency: "",
  },
  {
    key: "3",
    collectionName: "Joe Black",
    collectionType: 32,
    source: "Sydney No. 1",
    tags: ["cool", "teacher"],
    createTime: "",
    updateTime: "",
    startTime: "",
    endTime: "",
    status: "",
    frequency: "",
  },
]

const CollectionTable: React.FC = () => {
  return (
    <div className="w-full flex justify-center m-4">
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
        bordered
      />
    </div>
  )
}
export default CollectionTable
