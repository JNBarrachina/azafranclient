import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'

import { Ingredient } from './Ingredient'

describe('Ingredient component', () => {
  test('renders ingredient name', () => {
    render(
      <Ingredient
        ingredient={{ id: 1, name: 'test', quantity: '1 unit' }}
        onSelect={() => {}}
      />
    )
    expect(screen.getByText('test')).toBeDefined()
  })
})
