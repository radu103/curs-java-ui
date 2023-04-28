import React from "react";
import { Card, Stack, Text, Avatar } from "react-ui";

export const Simple = () => {
  return (
    <Card css={{ width: 200 }}>
      <Stack gap={2}>
        <Avatar size="medium" src="https://github.com/sameen-shi.png" />
        <Stack direction="vertical">
          <Text>Siddharth</Text>
          <Text variant="subtle" size={2}>
            likes CSS
          </Text>
        </Stack>
      </Stack>
    </Card>
  );
};