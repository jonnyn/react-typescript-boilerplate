import ReactDOM from 'react-dom'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'
import Button from '../Button'

afterEach(cleanup)

// eslint-disable-next-line jest/expect-expect
it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Button />, div)
})

it('renders button correctly with label', () => {
  const { getByTestId } = render(<Button label="click test" />)
  expect(getByTestId('button')).toHaveTextContent('click test')
})

it('renders button correctly with disabled', () => {
  const { getByTestId } = render(<Button disabled />)
  expect(getByTestId('button')).toHaveAttribute('disabled')
})

it('renders button correctly with children', () => {
  const { getByTestId } = render(
    <Button>
      <div>Back</div>
    </Button>,
  )
  expect(getByTestId('button')).toHaveTextContent('Back')
})

it('matches snapshot', () => {
  const tree = renderer.create(<Button label="Back" />).toJSON()
  expect(tree).toMatchSnapshot()
})
