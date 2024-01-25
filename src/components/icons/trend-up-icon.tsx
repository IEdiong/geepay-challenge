import { Icon } from '@chakra-ui/react';
import { IconProps } from '@chakra-ui/react';

const TrendUpIcon = (props: IconProps) => (
  <Icon
    xmlns="http://www.w3.org/2000/svg"
    width="10"
    height="6"
    viewBox="0 0 10 6"
    fill="none"
    {...props}
  >
    <path
      d="M0.5 5.5L3.5 2.5L5.5 4.5L9.5 0.5"
      stroke="#34CAA5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 0.5H9.5V4"
      stroke="#34CAA5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);

export default TrendUpIcon;
