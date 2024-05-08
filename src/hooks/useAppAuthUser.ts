import { getUserInfo } from "../store/slices/userSlice";
import { useAppSelector } from "./useAppSelector";

export const useAppAuthUser = () => useAppSelector(getUserInfo);
