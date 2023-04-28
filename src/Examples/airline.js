import React from 'react'
import { Card, Stack, Text, Element } from 'react-ui'

export const Airline = () => {
  return (
    <Card>
      <Stack direction={['vertical', 'horizontal', 'horizontal']} gap={4}>
        <Stack align="center" gap={1}>
          <AirCanadaLogo />
          <Text size={2} variant="subtle">
            Air Canada
          </Text>
        </Stack>

        <Stack justify="space-between" marginX="auto">
          <Stack direction="vertical" align="flex-end">
            <Text size={6}>09:15</Text>
            <Text size={4} variant="subtle">
              AMS
            </Text>
          </Stack>

          <Stack
            direction="vertical"
            align="center"
            css={{ minWidth: '100px', paddingX: 4 }}
          >
            <Text size={2}>8h 35</Text>
            <Stack css={{ width: '100%' }} align="center" gap={1}>
              <Divider />
              <AirplaneIcon />
            </Stack>
            <Text size={1} color="greens.700">
              Direct
            </Text>
          </Stack>

          <Stack direction="vertical" align="flex-start">
            <Text size={6}>11:50</Text>
            <Text size={4} variant="subtle">
              JFK
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  )
}

const AirCanadaLogo = props => (
  <svg x="0px" y="0px" viewBox="0 0 40 40" width="24" height="24">
    <g>
      <path
        fill="#D82F2E"
        d="M20.7,27.9c0-1.3,0.7-1.5,1.9-0.8c2.2,1.2,4.6,2.5,4.6,2.5c0.1-0.7,0.7-1.3,2-1c1.2,0.3,2.6,0.6,2.6,0.6   s-0.7-1.7-1.1-2.4c-0.6-1.4,0-2,0.6-2.2c0,0-0.8-0.6-1.4-1c-1.2-0.8-0.9-1.7,0.2-2.2c1.6-0.7,3.6-1.6,3.6-1.6   c-0.6-0.4-1.4-1.4-0.5-2.6c0.8-1.2,2-2.8,2-2.8s-2.2,0-3.6,0c-1.3,0-1.6-1.1-1.6-1.8c0,0-2.1,1.5-3.6,2.5c-1.3,0.9-2.4,0-2.2-1.5   c0.3-2.3,0.6-4.9,0.6-4.9c-0.8,0.5-2.1,0.5-2.7-0.8C21.1,6.2,20,3.9,20,3.9s-1,2.2-1.9,4.1c-0.6,1.3-2,1.3-2.7,0.8   c0,0,0.3,2.6,0.6,4.9c0.2,1.5-1,2.3-2.2,1.5c-1.5-1-3.6-2.5-3.6-2.5c0,0.7-0.3,1.8-1.6,1.8c-1.4,0-3.6,0-3.6,0s1.2,1.7,2,2.8   c0.8,1.2,0.1,2.2-0.5,2.6c0,0,2,0.9,3.6,1.6c1.2,0.5,1.5,1.3,0.2,2.2c-0.6,0.4-1.4,1-1.4,1c0.6,0.2,1.2,0.8,0.6,2.2   c-0.3,0.7-1.1,2.4-1.1,2.4s1.4-0.3,2.6-0.6c1.3-0.3,2,0.3,2,1c0,0,2.3-1.3,4.5-2.5c1.2-0.7,1.9-0.4,1.9,0.8V31c0,1.8-0.3,3.8-1,4.8   C9.8,34.9,2.7,28.1,2.7,19.1C2.7,9.8,10.5,2.2,20,2.2c9.6,0,17.3,7.5,17.3,16.8c0,8.7-6.7,15.8-15.4,16.7v2.3   c10.2-0.9,18.1-9.1,18.1-19C40.1,8.5,31.1,0,20,0C9,0,0,8.5,0,19.1c0,9.3,6.9,17,16.2,18.7c1.6,0.3,2.5,0.5,3.4,1.5   c1-1.8,1.2-5.6,1.2-7.8V27.9z"
      />
    </g>
  </svg>
)

const AirplaneIcon = () => (
  <svg version="1.1" x="0" y="0" viewBox="0 0 12 12" width="12" height="12">
    <path
      fill="#898294"
      d="M3.922,12h0.499c0.181,0,0.349-0.093,0.444-0.247L7.949,6.8l3.233-0.019C11.625,6.791,11.989,6.44,12,6 c-0.012-0.44-0.375-0.792-0.818-0.781L7.949,5.2L4.866,0.246C4.77,0.093,4.602,0,4.421,0L3.922,0c-0.367,0-0.62,0.367-0.489,0.71 L5.149,5.2l-2.853,0L1.632,3.87c-0.084-0.167-0.25-0.277-0.436-0.288L0,3.509L1.097,6L0,8.491l1.196-0.073 C1.382,8.407,1.548,8.297,1.632,8.13L2.296,6.8h2.853l-1.716,4.49C3.302,11.633,3.555,12,3.922,12"
    />
  </svg>
)

const Divider = props => (
  <Element
    as="hr"
    css={{
      width: '100%',
      borderBottom: '0.25px solid',
      borderColor: 'grays.500'
    }}
    {...props}
  />
)