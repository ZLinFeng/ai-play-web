import { addTask, Collection, tasks } from "@/api/collection"
import CollectionTable from "@/components/table/CollectionTable"
import {
  DeleteFilled,
  FacebookOutlined,
  InstagramOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
  PlusOutlined,
  SignalFilled,
  TikTokOutlined,
  XOutlined,
  YoutubeOutlined,
} from "@ant-design/icons"
import {
  Button,
  Checkbox,
  DatePicker,
  Drawer,
  Form,
  Input,
  Pagination,
  Select,
  Space,
  Spin,
  Tag,
} from "antd"
import { useEffect, useState } from "react"

const { RangePicker } = DatePicker

export default () => {
  const [selected, setSelected] = useState(false)

  // 新增和更新任务抽屉
  const [open, setOpen] = useState(false)
  const [drawerTitle, setDrawerTitle] = useState("")

  // 表单数据
  const [form] = Form.useForm()

  // 多选框的值
  const SOURCE_OPTIONS = [
    {
      title: "Facebook",
      value: 6,
      label: (
        <Tag icon={<FacebookOutlined />} color="#3b5999" className="w-[90px]">
          Facebook
        </Tag>
      ),
    },
    {
      title: "X (Twitter)",
      value: 3,
      label: (
        <Tag icon={<XOutlined />} color="#2792eb" className="w-[90px]">
          X (Twitter)
        </Tag>
      ),
    },
    {
      title: "Instagram",
      value: 8,
      label: (
        <Tag icon={<InstagramOutlined />} color="#c81cbb" className="w-[90px]">
          Instagram
        </Tag>
      ),
    },
    {
      title: "Tiktok",
      value: 29,
      label: (
        <Tag icon={<TikTokOutlined />} color="#000000" className="w-[90px]">
          Tiktok
        </Tag>
      ),
    },
    {
      title: "Youtube",
      value: 9,
      label: (
        <Tag icon={<YoutubeOutlined />} color="#f91417" className="w-[90px]">
          Youtube
        </Tag>
      ),
    },
  ]
  const [isCheckAll, setIsCheckAll] = useState(false)
  const [isIndeterminate, setIsIndeterminate] = useState(false)
  const [checkedList, setCheckedList] = useState<number[]>([])
  const [tableData, setTableData] = useState<Collection.TaskResult[]>([])
  const [addUpdateLoading, setAddUpdateLoading] = useState(false)

  const handleCheckAll = (checked: boolean) => {
    const values = checked ? SOURCE_OPTIONS.map((o) => o.value) : []
    form.setFieldsValue({ sources: values })
    setCheckedList(values)
    setIsCheckAll(checked)
    setIsIndeterminate(false)
  }

  const handleCheckboxChange = (values: number[]) => {
    setCheckedList(values)
    if (values.length === SOURCE_OPTIONS.length) {
      setIsIndeterminate(false)
      setIsCheckAll(true)
    }

    if (values.length > 0 && values.length < SOURCE_OPTIONS.length) {
      setIsIndeterminate(true)
    }

    if (values.length === 0) {
      setIsIndeterminate(false)
    }
    form.setFieldsValue({ sources: values })
  }

  const addTaskBtn = () => {
    setOpen(true)
    setDrawerTitle("Add Collection Task")
  }

  // 取消
  const cancle = () => {
    form.resetFields()
    setCheckedList([])
    setOpen(false)
  }

  // 提交
  const submit = () => {
    const { taskName, taskType, keywords, collectionRange } =
      form.getFieldsValue()
    addTask({
      taskName: taskName,
      taskType: taskType,
      keywords: keywords,
      sources: checkedList,
      startTime: collectionRange[0].valueOf(),
      endTime: collectionRange[1].valueOf(),
    }).then((res) => {})
  }

  useEffect(() => {
    tasks({
      current: 1,
      size: 10,
    }).then((res) => {
      setTableData(res.records)
    })
  }, [])

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
          <Button
            type="primary"
            onClick={addTaskBtn}
            icon={<PlusCircleOutlined />}
          >
            Add
          </Button>
          <Drawer
            open={open}
            title={drawerTitle}
            width={550}
            closable={false}
            extra={
              <Space>
                <Button onClick={cancle}>Cancel</Button>
                <Button type="primary" onClick={submit}>
                  Submit
                </Button>
              </Space>
            }
          >
            <Spin spinning={addUpdateLoading}>
              <div className="flex flex-col gap-4">
                <Form layout="vertical" className="px-4" form={form}>
                  <Form.Item
                    label="Task Name"
                    name="taskName"
                    rules={[{ required: true }]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Task Type"
                    name="taskType"
                    rules={[{ required: true }]}
                  >
                    <Select
                      options={[
                        { label: "Keywords", value: 1 },
                        { label: "Account", value: 2 },
                      ]}
                    />
                  </Form.Item>
                  <Form.Item label="Sources" required>
                    <div className="flex gap-2 flex-wrap items-center">
                      <Checkbox
                        indeterminate={isIndeterminate}
                        onChange={(e) => handleCheckAll(e.target.checked)}
                        checked={isCheckAll}
                      >
                        All
                      </Checkbox>
                      <Checkbox.Group
                        options={SOURCE_OPTIONS}
                        name="sources"
                        onChange={handleCheckboxChange}
                        value={checkedList}
                      />
                    </div>
                  </Form.Item>
                  <Form.Item label="Time Range" name="collectionRange" required>
                    <RangePicker className="w-full" />
                  </Form.Item>
                  <Form.List
                    name="keywords"
                    rules={[
                      {
                        validator: async (_, names) => {
                          if (!names || names.length < 1) {
                            return Promise.reject(
                              new Error("At least 1 keyword is required."),
                            )
                          }
                        },
                      },
                    ]}
                  >
                    {(fields, { add, remove }, { errors }) => (
                      <>
                        {fields.map((field, index) => (
                          <Form.Item
                            label={index === 0 ? "Keywords" : ""}
                            required={true}
                            key={field.key}
                          >
                            <Form.Item
                              {...field}
                              validateTrigger={["onChange", "onBlur"]}
                              rules={[
                                {
                                  required: true,
                                  whitespace: true,
                                  message: "Please input keyword text",
                                },
                              ]}
                              noStyle
                            >
                              <Input style={{ width: "90%" }} />
                            </Form.Item>
                            {fields.length >= 1 ? (
                              <MinusCircleOutlined
                                className="dynamic-delete-button pl-2"
                                onClick={() => remove(field.name)}
                              />
                            ) : null}
                          </Form.Item>
                        ))}
                        <Form.Item>
                          <Button
                            className="w-full"
                            type="dashed"
                            onClick={() => add()}
                            icon={<PlusOutlined />}
                          >
                            Add Keyword
                          </Button>
                          <Form.ErrorList errors={errors} />
                        </Form.Item>
                      </>
                    )}
                  </Form.List>
                </Form>
              </div>
            </Spin>
          </Drawer>
        </div>
      </div>
      {/* 查询结果 */}
      <div className="flex justify-center flex-col gap-4">
        <CollectionTable onSelectionChange={setSelected} data={tableData} />
        <div className="flex justify-end">
          <Pagination total={85} defaultPageSize={20} defaultCurrent={1} />
        </div>
      </div>
    </div>
  )
}
