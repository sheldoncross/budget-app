import { ListItem } from "@rneui/base";
import { Pressable } from "react-native";


type ExpenseItemProps = {
    id: number,
    title: string,
    amount: number,
    onViewDetails: (id: number) => void
};

export default function ExpenseItem(props: ExpenseItemProps) {
  return (
    <Pressable onPress={() => props.onViewDetails(props.id)}>
        <ListItem bottomDivider >
          <ListItem.Content>
            <ListItem.Title>{props.title}</ListItem.Title>
            <ListItem.Subtitle>{props.amount.toString()}</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
    </Pressable>
  );
};

