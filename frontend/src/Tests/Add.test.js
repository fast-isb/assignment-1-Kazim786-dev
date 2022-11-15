import { AddRestaurant } from '../components/Admin/Restaurant/Add';
import {screen,render, waitFor} from '@testing-library/react'
import {MemoryRouter} from 'react-router-dom'


describe('Testing the Add Component',()=>{

    test('Test form Submit type button',()=>{
        render(<MemoryRouter>
            <AddRestaurant/>
        </MemoryRouter>)
        // expect(screen.getByText('Add New Restaurant').closest('Link')).toHaveAttribute('to','/admin/restaurant/add')
        waitFor(()=> expect(screen.getByTestId('addresbtn')).toBeInTheDocument() );
    });
    test('Test main heading',()=>{
        render(<MemoryRouter>
            <AddRestaurant/>
        </MemoryRouter>)
        expect(screen.getByTestId('mainhead')).toHaveTextContent('Add Restaurant')
    });
    test('Test form Submit type button',()=>{
        render(<MemoryRouter>
            <AddRestaurant/>
        </MemoryRouter>)
        
        expect(screen.getByText('Restaurant name')).toBeInTheDocument() ;
    });

    
    
})