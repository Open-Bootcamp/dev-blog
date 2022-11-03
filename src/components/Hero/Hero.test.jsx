import {describe, it} from 'vitest';
import { render, screen } from '@testing-library/react';
import Hero from './Hero'
describe('Hero',()=>{
  it('should render', ()=>{
    render(<Hero />)

  })
  it('should show text', ()=>{
    const author = 'Openbootcamp'
    render(<Hero author={author}/>)
    screen.findByText('Openbootcamp')

  })
 it('shoul show text: Lorem Ipsum is simply dummy',()=>{
  render(<Hero/>)
  screen.findByText('Lorem Ipsum is simply dummy')
 })
 it('shoul show img: ',()=>{
  render(<Hero />)
  screen.findByLabelText('img')
 })

})
