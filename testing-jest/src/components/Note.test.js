import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, prettyDOM, render } from '@testing-library/react'
import Note from './Note'

// El primer test, es comprobar si se renderiza el componente. 
// Es un test un poco absurdo, pero muchas veces nos puede salvar la vida
test('1 - ¿Se renderiza el componente?', () => {
    const note = {
        content: 'Esto es un test',
        important: true
    }

    // Renderizamos el componente Note
    const component = render(<Note note={note} />);

    // Revisar y comprobar si el componente a pintado esta información
    // Existen diversas formas para buscar 
    component.getByText('Esto es un test');
    component.getByText('es importante hacerlo');

    // En el caso de ser una lista con un monton de resultados y queramos 
    // buscar algo dentro de la lista

    // const li = component.container.querySelector('li');
    // console.log(prettyDOM(li));
})

test('2 - Probando el evento click del button', () => {
    const note = {
        content: 'Esto es un test',
        important: true
    }

    // Se hace pasar por una función 
    const mockHandler = jest.fn()

    const component = render(<Note note={note} hacerImportante={mockHandler} />);

    // Recuperamos el button
    const button = component.getByText('es importante hacerlo');
    // Queremos disparar un evento del tipo click
    fireEvent.click(button);

    // Esperamos que la función se llama una vez
    expect(mockHandler).toHaveBeenCalledTimes(1);
})