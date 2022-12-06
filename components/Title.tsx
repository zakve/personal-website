import type { NextPage } from 'next'
import { Text } from "@nextui-org/react";

type Props = {
  text: string
}

const Title = ({ text }: Props) => {
  return (
    <Text
      h2
      css={{
        '&::after': {
          background: '$primary',
          bottom: 0,
          content: "",
          height: '2px',
          left: 0,
          margin: "auto",
          position: "absolute",
          right: 0,
          width: "50px"
        },
        fontSize: '32px',
        padding: '70px 15px 36px',
        position: 'relative',
        textAlign: 'center',
      }}
    >
      {text}
    </Text>
  )
}

export default Title
