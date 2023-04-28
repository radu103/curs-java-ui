import React from 'react'
import { Card, Stack, Text, Image } from 'react-ui'

export const Hotel = () => {
  return (
    <Card css={{ width: 300 }}>
      <Stack direction="vertical" gap={2}>
        <Image src="https://bit.ly/2k1H1t6" css={{ borderRadius: 2 }} />
        <Stack justify="space-between" align="center">
          <Text
            size={2}
            color="reds.600"
            weight="semibold"
            css={{ textTransform: 'uppercase' }}
          >
            Verified · Cape Town
          </Text>
          <Stack align="center" gap={1}>
            <StarIcon />
            <Text size={2} weight="semibold" color="yellows.700">
              4.84
            </Text>
          </Stack>
        </Stack>
        <Text size={4} weight="semibold">
          Modern, Chic Penthouse with Mountain, City & Sea Views
        </Text>
        <Text size={4}>$119/night</Text>
      </Stack>
    </Card>
  )
}

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="#CAA53D"
    stroke="#CAA53D"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)
