import React from 'react'
import { Card, Stack, Text, Paragraph, Link, Avatar } from 'react-ui'

export const Tweet = () => {
  return (
    <Card css={{ width: 500 }}>
      <Stack marginBottom={3} justify="space-between">
        <Stack gap={2}>
          <Link href="https://twitter.com/freezydorito">
            <Avatar
              size="medium"
              src="https://twitter-avatar.now.sh/freezydorito"
            />
          </Link>
          <Stack direction="vertical">
            <Link
              debug
              variant="subtle"
              weight="semibold"
              href="https://twitter.com/freezydorito"
            >
              laura bananas
            </Link>
            <Text size={3} variant="subtle">
              @freezydorito
            </Text>
          </Stack>
        </Stack>
        <Link
          href="https://twitter.com/freezydorito/status/1223958402281484289"
          target="_blank"
        >
          <TwitterIcon />
        </Link>
      </Stack>
      <Paragraph marginBottom={2}>
        <Text>designer: looks nice but can we move the headers 1px up</Text>
        <Text>
          developer: its not that we cant its that then i have to put 19px (ugly
          number) instead of 20px (beautiful number) in the css and that makes
          me sad
        </Text>
        <Text>designer: ah absolutely understandable carry on</Text>
      </Paragraph>

      <Text size={3} variant="subtle">
        2:16PM · Feb 2, 2020
      </Text>
    </Card>
  )
}

const TwitterIcon = () => (
  <svg
    id="Logo_FIXED"
    data-name="Logo — FIXED"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 400 400"
    width="32"
    height="32"
  >
    <path
      fill="#1da1f2"
      d="M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23"
    />
  </svg>
)
