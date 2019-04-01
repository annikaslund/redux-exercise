const INITAL_STATE = { emoji: "乁༼☯‿☯✿༽ㄏ" };

function emojiReducer(state = INITAL_STATE, action) {
    switch (action.type) {

        case "SCARED":
            return { ...state, emoji: "(ノдヽ)" };

        case "TRY_MY_BEST":
            return { ...state, emoji: "＼\٩( 'ω' )و //／" };

        case "EXCITED":
            return { ...state, emoji: "ʘ ͜ʖ ʘ" };

        case "FUNNY":
            return { ...state, emoji: "ↁ_ↁ" };

        default:
            return state;
    }
}

const store = Redux.createStore(emojiReducer);

window.onload = function () {
    const emojiElement = document.querySelector("h1");

    document.querySelector("#emoji-scared")
        .addEventListener("click", function () {
            store.dispatch({ type: "SCARED" });
            const currentEmoji = store.getState().emoji;
            emojiElement.innerText = currentEmoji;
        });

    document.querySelector("#emoji-try-my-best")
        .addEventListener("click", function () {
            store.dispatch({ type: "TRY_MY_BEST" });
            const currentEmoji = store.getState().emoji;
            emojiElement.innerText = currentEmoji;
        });

    document.querySelector("#emoji-excited")
        .addEventListener("click", function () {
            store.dispatch({ type: "EXCITED" });
            const currentEmoji = store.getState().emoji;
            emojiElement.innerText = currentEmoji;
        });

    document.querySelector("#emoji-funny")
        .addEventListener("click", function () {
            store.dispatch({ type: "FUNNY" });
            const currentEmoji = store.getState().emoji;
            emojiElement.innerText = currentEmoji;
        });
}