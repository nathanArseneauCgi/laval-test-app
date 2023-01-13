import { vi } from 'vitest'
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import App from './App';

describe('App', () => {
  let container: Element | DocumentFragment;

  beforeAll(() => {
    HTMLDialogElement.prototype.showModal = vi.fn();
    HTMLDialogElement.prototype.close = vi.fn();
  });

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  
  afterEach(() => {
    document.body.removeChild(container);
  });

  it('tests de la solution ', () => {
    act(() => {
      ReactDOM.createRoot(container).render(<App/>);
    })

    const openModalButton = container.querySelector('.btn-open-modal');

    act(() => {
      openModalButton?.dispatchEvent(new MouseEvent('click', {bubbles: true}));
    });
    expect(HTMLDialogElement.prototype.showModal).toHaveBeenCalledTimes(1);

    const h1 = container.querySelector('h1');
    expect(h1?.textContent).toBe("Bonjour Laval");

    const closeModalButton = container.querySelector('.btn-close-modal');
    act(() => {
      closeModalButton?.dispatchEvent(new MouseEvent('click', {bubbles: true}));
    });

    /**
     * We have 2 call on close because
     * The first call happen wen the component get mounted
     * The first call happen once we trigger the action to close the modal
     */
    expect(HTMLDialogElement.prototype.close).toHaveBeenCalledTimes(2);
  });
});