const INITAL_STATE = { emoji: "乁༼☯‿☯✿༽ㄏ" };

function emojiReducer(state = INITAL_STATE, action) {
    switch (action.type) {

        case "SCARED":
            return { ...state, emoji: action.payload };

        case "TRY_MY_BEST":
            return { ...state, emoji: action.payload };

        case "EXCITED":
            return { ...state, emoji: action.payload };

        case "FUNNY":
            return { ...state, emoji: action.payload }; 

        default:
            return { ...state };
    }
}

const store = Redux.createStore(emojiReducer);
