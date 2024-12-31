import Icon from "@ant-design/icons"
import type { GetProps } from "antd"

type CustomIconComponentProps = GetProps<typeof Icon>

const LogoSvg = () => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="53706"
    height="100"
    width="100"
  >
    <path
      d="M102.676475 271.86539l377.108276-163.785487a63.113803 63.113803 0 0 1 50.251351 0l377.108276 163.785487a63.113803 63.113803 0 0 1 0 115.765547l-377.108276 163.785488a63.113803 63.113803 0 0 1-50.251351 0l-377.108276-163.785488A63.113803 63.113803 0 0 1 102.676475 271.86539z"
      fill="#d4237a"
      p-id="53707"
      data-spm-anchor-id="a313x.search_index.0.i2.42bf3a81IuCFzU"
    ></path>
    <path
      d="M677.147996 550.646475l229.986699 99.909151a63.113803 63.113803 0 0 1 0 115.750715l-377.104975 163.78032a63.113803 63.113803 0 0 1-50.238587 0l-377.104975-163.78032a63.113803 63.113803 0 0 1 0-115.750715L332.609743 550.646475l147.18139 63.871169a63.113803 63.113803 0 0 0 42.096907 2.903235l8.204794-2.903235 147.055162-63.871169z"
      fill="#1296db"
      p-id="53708"
      data-spm-anchor-id="a313x.search_index.0.i0.42bf3a81IuCFzU"
    ></path>
  </svg>
)

const LogoIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={LogoSvg} {...props} />
)

export default LogoIcon
