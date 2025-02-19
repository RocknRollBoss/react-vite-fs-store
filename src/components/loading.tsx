import { Loader } from "lucide-react";
import React from "react";
type Props = {
  className: string;
};
export const Loading: React.FC<Props> = ({ className }) => {
  return <Loader className={className} />;
};
