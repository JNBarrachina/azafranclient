import {describe, expect, test} from 'vitest'
import {render, screen } from '@testing-library/react'

import { Ingredient } from './Ingredient'

describe('ingredient component', () => { 
    test('Suma 1 y 2 da como resultado 3', () => { 
        render(<Ingredient ingredient={"test"} />)
        screen.getByText("test")
    })
})