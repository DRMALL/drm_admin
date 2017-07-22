
import xxtest from './xxtest'

const mockCallback = jest.fn();
xxtest([0,2,3,5], mockCallback);

it('...', () => {
// The mock function is called twice
expect(mockCallback.mock.calls.length).toBe(4);

// // The first argument of the first call to the function was 0
expect(mockCallback.mock.calls[1][0]).toBe(2);

// // The first argument of the second call to the function was 1
expect(mockCallback.mock.calls[3][0]).toBe(5);
})

