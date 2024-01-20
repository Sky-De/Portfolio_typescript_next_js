import { useInView } from "framer-motion";
import { setActiveNav } from "@/redux/features/nav/navSlice";
import { useAppDispatch } from "./reduxHooks";
import { UseIsInViewProps } from "@/types/allTypes";

export const useIsInView = ({ ref, navName }: UseIsInViewProps) => {
  const isInView = useInView(ref, { amount: 0.5 });
  const dispatch = useAppDispatch();
  if (isInView) {
    // timeout prevents ovverlap of rendering components and updating header
    setTimeout(() => {
      dispatch(setActiveNav(navName));
    }, 0);
  }
};
