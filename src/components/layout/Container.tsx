import { FC, ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className="container mx-auto px-4 md:px">
      {children}
    </div>
  );
};

export default Container;
