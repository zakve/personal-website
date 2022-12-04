import { Text } from "@nextui-org/react";

type Props = {
  text: string
}

const ListItem = ({ text }: Props) => {
  return (
    <Text css={{
      "&::before": {
        content: "■",
        fontSize: 14,
        paddingRight: 20,
        color: "$primary"
      }
    }}>
      {text}
    </Text>
  )
}

export default ListItem
