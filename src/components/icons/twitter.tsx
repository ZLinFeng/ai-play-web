import Icon from "@ant-design/icons"
import type { GetProps } from "antd"

type CustomIconComponentProps = GetProps<typeof Icon>

const TwitterSvg = () => (
  <svg
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="10268"
    width="16"
    height="16"
  >
    <path
      d="M849.92 51.2H174.08c-67.8656 0-122.88 55.0144-122.88 122.88v675.84c0 67.8656 55.0144 122.88 122.88 122.88h675.84c67.8656 0 122.88-55.0144 122.88-122.88V174.08c0-67.8656-55.0144-122.88-122.88-122.88z m-217.99936 768L470.0672 581.98016 264.33024 819.2H212.71552l233.26208-272.52736L212.71552 204.8h179.35872l153.22112 224.57344L740.58752 204.8h52.66432l-223.55968 260.31616L811.27936 819.2h-179.35872z"
      p-id="10269"
      fill="#2c2c2c"
    ></path>
    <path
      d="M285.09184 243.72224l372.1472 538.07616h81.65888L366.75584 243.72224z"
      p-id="10270"
      fill="#2c2c2c"
    ></path>
  </svg>
)

const TwitterIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={TwitterSvg} {...props} />
)

export default TwitterIcon
