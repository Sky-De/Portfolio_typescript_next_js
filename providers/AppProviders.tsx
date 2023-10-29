import { Provider } from "react-redux";
import { FC, ReactNode } from "react";
import { store } from "@/redux/store/store";
import { ThemeProvider } from "next-themes";

type Props = {
  children: ReactNode;
};

export const AppProviders: FC<Props> = ({ children }: Props) => {
  return (
    <Provider store={store}>
      <ThemeProvider>{children}</ThemeProvider>
    </Provider>
  );
};

export default AppProviders;
