import { DisplayRestaurant } from '../components/Admin/Restaurant/Display';
import {screen,render, waitFor} from '@testing-library/react'
import {MemoryRouter} from 'react-router-dom'


describe('Testing the Display Component',()=>{
    
    test('Test add restaurant button', async()=>{
        render(<MemoryRouter>
            <DisplayRestaurant/>
        </MemoryRouter>)
        // expect(screen.getByText('Add New Restaurant').closest('Link')).toHaveAttribute('to','/admin/restaurant/add')
        await waitFor(()=>expect(screen.getByText('Add New Restaurant')).toBeInTheDocument())
    });

    test('Test update restaurant button',async()=>{
        render(<MemoryRouter>
            <DisplayRestaurant/>
        </MemoryRouter>)
        await waitFor(()=>expect(screen.queryByText('Update')).toBeDefined())
        await waitFor(()=> expect(screen.queryByText('Update')))
    });
    test('Test update restaurant button',async()=>{
        render(<MemoryRouter><DisplayRestaurant/></MemoryRouter>)
        await waitFor(()=>expect(screen.queryByTestId('updatebtn')).toBeDefined())
    });
    test('Test delete restaurant button',async()=>{
        render(<MemoryRouter><DisplayRestaurant/></MemoryRouter>)
        await waitFor(()=>expect(screen.queryByTestId('deletebtn')).toBeDefined())
    })

    
})