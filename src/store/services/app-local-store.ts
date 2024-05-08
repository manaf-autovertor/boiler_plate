import store from "store";
import expirePlugin from "store/plugins/expire";

import { LocalStorage } from "../../constants/local-storage";

// import type { PermanentStorableInfo } from "../slices/types";

store.addPlugin(expirePlugin);
export const AppLocalStore = {
    // getTokenInfo: (): PermanentStorableInfo => {
    //     return store.get(LocalStorage.USER_KEY);
    // },

    // setTokenInfo: (state: PermanentStorableInfo) => {
    //     store.set(LocalStorage.USER_KEY, state);
    // },

    deleteTokens: () => {
        store.remove(LocalStorage.USER_KEY);
        window.location.reload();
    },
};
