import { useInView } from "framer-motion";
import { useAppDispatch } from "./reduxHooks";
import { setActiveNav } from "@/redux/features/nav/navSlice";

type UseIsInViewProps = {
  ref: any;
  navName: string;
};

export const useIsInView = ({ ref, navName }: UseIsInViewProps) => {
  const isInView = useInView(ref, { amount: 0.5 });
  const dispatch = useAppDispatch();
  if (isInView) dispatch(setActiveNav(navName));
};
