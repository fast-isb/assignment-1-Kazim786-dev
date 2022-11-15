import { DisplayRestaurantById } from '../components/Admin/Restaurant/Display_specific_restaurant';
import {screen,render, waitFor} from '@testing-library/react'
import {MemoryRouter} from 'react-router-dom'

describe('Testing the DisplayRestaurantById Component',()=>{

    test('Test main heading',()=>{
        render(<MemoryRouter>
            <DisplayRestaurantById/>
        </MemoryRouter>)
        waitFor(()=>expect(screen.getByTestId('mainhead')).toBeDefined())
        waitFor(()=>expect(screen.getByTestId('mainhead')).toBeInTheDocument()) ;
    });

})