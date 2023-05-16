import {render, screen} from '@testing-library/react';
import Login from './Login';


// 7 TESTS I GOING DOWN 



// T e s t i n g     u s e r n a m e
test ("username input should bee rendered", ()=>{
    render(<Login/>);
    const userInputElement = screen.getByPlaceholderText(/username/i);
    expect(userInputElement).toBeInTheDocument()
})


// T e s t i n g   u s e r n a m e   i n p u t    i s   e m p t y
test ("username input should bee empty", ()=>{
    render(<Login/>);
    const userInputElement = screen.getByPlaceholderText(/username/i);
    expect(userInputElement.value).toBe("")
})

//--------------------------------------------------------------//


// T e s t i n g    p a s s w o r d
test ("password input input should bee rendered", ()=>{
    render(<Login/>);
    const passwordInputElement = screen.getByPlaceholderText(/password/i);
    expect(passwordInputElement).toBeInTheDocument()
})


// T e s t i n g    p a s s w o r d   i n p u t    i s    e m p t y
test ("password input should bee empty", ()=>{
    render(<Login/>);
    const passwordInputElement = screen.getByPlaceholderText(/password/i);
    expect(passwordInputElement.value).toBe("")
})
//----------------------------------------------------------------//




// T e s t i n g    b u t t o n  i s   p r e s e n t
test ("button input should be rendered", ()=>{
    render(<Login/>);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument()
})

// T e s t i n g    b u t t o n  i s   d i s a b l e 
test ("button should be disable", ()=>{
    render(<Login/>);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeDisabled()
})


//-----------------------------------------------------------//





// C h e c k i n g    i f    t h e   f o r m   i s   i n s i d e  m a i n - t a g
test ("Is the form inside main-tag?", ()=>{
    render(<Login/>);
    const divElement = screen.getByRole("main");
    expect(divElement).toBeInTheDocument()
})

// T e s t i n g   h 1
test ("Checking the H1", ()=>{
    render(<Login/>);
    const h1Element = screen.getByRole("heading");
    expect(h1Element).toBeInTheDocument()
})
