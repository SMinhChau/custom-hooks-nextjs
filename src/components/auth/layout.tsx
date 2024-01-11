import React from "react";

type Props = {
  children: React.ReactNode;
};

const LoginLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="container h-dvh bg-background-primary flex justify-center items-center">
      {children}
    </div>
  );
};

export default LoginLayout;
