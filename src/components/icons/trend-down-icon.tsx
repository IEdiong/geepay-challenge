import { Icon } from '@chakra-ui/react';
import { IconProps } from '@chakra-ui/react';

const TrendDownIcon = (props: IconProps) => (
  <Icon
    xmlns="http://www.w3.org/2000/svg"
    width="10"
    height="6"
    viewBox="0 0 10 6"
    fill="none"
    {...props}
  >
    <path
      d="M0.5 0.5L3.5 3.5L5.5 1.5L9.5 5.5"
      stroke="#ED544E"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 5.5H9.5V2"
      stroke="#ED544E"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);

export default TrendDownIcon;
