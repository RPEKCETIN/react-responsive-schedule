import React from 'react'
import { render } from '@testing-library/react'

import DateButton from '../main/DateButton'

describe("DateButton", () => {
    test("renders the date buttons component", () => {
        render(<DateButton label='Hello World' />)
    })
})