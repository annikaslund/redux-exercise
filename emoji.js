window.onload = function () {
    const emojiElement = document.querySelector("h1");

    document.querySelector("#emoji-scared")
        .addEventListener("click", function () {

            store.dispatch({ type: "SCARED", 
                             payload: "(ノдヽ)" });

            const currentEmoji = store.getState().emoji;
            emojiElement.innerText = currentEmoji;
        });

    document.querySelector("#emoji-try-my-best")
        .addEventListener("click", function () {

            store.dispatch({ type: "TRY_MY_BEST", 
                             payload: "＼\٩( 'ω' )و //／" });

            const currentEmoji = store.getState().emoji;
            emojiElement.innerText = currentEmoji;
        });

    document.querySelector("#emoji-excited")
        .addEventListener("click", function () {

            store.dispatch({ type: "EXCITED", 
                             payload: "ʘ ͜ʖ ʘ" });

            const currentEmoji = store.getState().emoji;
            emojiElement.innerText = currentEmoji;
        });

    document.querySelector("#emoji-funny")
        .addEventListener("click", function () {
            
            store.dispatch({ type: "FUNNY", 
                             payload: "ↁ_ↁ" });

            const currentEmoji = store.getState().emoji;
            emojiElement.innerText = currentEmoji;
        });
}