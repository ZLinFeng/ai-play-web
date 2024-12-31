import { PageContainer } from "@ant-design/pro-components"
import type { GetProps } from "antd"
import { Input } from "antd"
type SearchProps = GetProps<typeof Input.Search>

const { Search } = Input

const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
  console.log(info?.source, value)

export default () => {
  return (
    <PageContainer>
      <Search
        placeholder="请输入"
        allowClear
        enterButton="搜索"
        size="large"
        onSearch={onSearch}
      />
    </PageContainer>
  )
}
