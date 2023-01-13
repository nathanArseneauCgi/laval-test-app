import { vi } from 'vitest'
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import {Modal} from '.';

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

  it('should test the modal component', () => {
    const message = "its working !";
    const closeFn = vi.fn();
    act(() => {
      ReactDOM.createRoot(container).render(<Modal isOpen={true} close={closeFn} message={message} />);
    })

    expect(HTMLDialogElement.prototype.showModal).toHaveBeenCalledTimes(1);
    expect(HTMLDialogElement.prototype.close).toHaveBeenCalledTimes(0);

    const h1 = container.querySelector('h1');
    expect(h1?.textContent).toBe(message);

    const closeModalButton = container.querySelector('.btn-close-modal');
    act(() => {
      closeModalButton?.dispatchEvent(new MouseEvent('click', {bubbles: true}));
    });

    expect(closeFn).toHaveBeenCalledTimes(1);
  });

  it("it should call close on the modal", () => {
    act(() => {
        ReactDOM.createRoot(container).render(<Modal isOpen={false} close={() => {}} message="" />);
      })

    expect(HTMLDialogElement.prototype.close).toHaveBeenCalledTimes(1);
  })
});