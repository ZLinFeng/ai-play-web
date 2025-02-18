import Icon from "@ant-design/icons"
import type { GetProps } from "antd"

type CustomIconComponentProps = GetProps<typeof Icon>

const FacebookSvg = () => (
  <svg
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="8460"
    width="15"
    height="15"
  >
    <path
      d="M546.986667 1024H56.490667A56.533333 56.533333 0 0 1 0 967.466667V56.533333C0 25.301333 25.301333 0 56.533333 0h910.933334C998.698667 0 1024 25.301333 1024 56.533333v910.933334c0 31.232-25.301333 56.533333-56.533333 56.533333H706.56v-396.544h133.12l19.882667-154.538667H706.56V374.186667c0-44.714667 12.373333-75.221333 76.586667-75.221334h81.834666v-138.24c-14.165333-1.92-62.72-6.101333-119.253333-6.101333-118.016 0-198.784 72.021333-198.784 204.288v113.92H413.525333v154.581333h133.418667V1024z"
      fill="#3B5998"
      p-id="8461"
    ></path>
  </svg>
)

const FacebookIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={FacebookSvg} {...props} />
)

export default FacebookIcon
