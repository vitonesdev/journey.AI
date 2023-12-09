export default {
    jump: new KeyboardEvent('keydown', {key: 'Space', keycode: 32}),
    dispatch(event) {
        document.dispatchEvent(this[event]);
    }
}

