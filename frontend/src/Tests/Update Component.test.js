import { EditRestaurant } from '../components/Admin/Restaurant/Update';
import {screen,render, waitFor} from '@testing-library/react'
import {MemoryRouter} from 'react-router-dom'

describe('Testing the Update Component',()=>{

    test('Test form Submit type button',()=>{
        render(<MemoryRouter>
            <EditRestaurant/>
        </MemoryRouter>)
        // expect(screen.getByText('Add New Restaurant').closest('Link')).toHaveAttribute('to','/admin/restaurant/add')
        waitFor(()=> expect(screen.getByTestId('updresbtn')).toBeInTheDocument() );
    });
    test('Test main heading',()=>{
        render(<MemoryRouter>
            <EditRestaurant/>
        </MemoryRouter>)
        expect(screen.getByTestId('mainhead')).toHaveTextContent('Update Restaurant')
    });
    test('Test url field',()=>{
        render(<MemoryRouter>
            <EditRestaurant/>
        </MemoryRouter>)
        
        expect(screen.getByTestId('urlfield')).toBeInTheDocument() ;
    });
    test('Test zip code field',()=>{
        render(<MemoryRouter>
            <EditRestaurant/>
        </MemoryRouter>)
        
        expect(screen.getByTestId('zipfield')).toBeInTheDocument() ;
    });
    test('Test address field',()=>{
        render(<MemoryRouter>
            <EditRestaurant/>
        </MemoryRouter>)
        
        expect(screen.getByTestId('addressfield')).toBeInTheDocument() ;
    });
    
})