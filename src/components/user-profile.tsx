import { useRef, useEffect } from "react";

type Props = {
  name: string;
  avatar: string;
  isVisiable: boolean;
  setIsVisiable: (value: boolean) => void;
  logout: () => void;
};

export const UserProfile: React.FC<Props> = ({
  name,
  avatar,
  logout,
  isVisiable,
  setIsVisiable,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !e.composedPath().includes(containerRef.current)
      ) {
        setIsVisiable(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [setIsVisiable]);

  return (
    <div ref={containerRef} className="relative inline-block">
  
      <img
        className="w-8 h-8 rounded-full cursor-pointer border-2 border-gray-200 hover:border-blue-400 transition-colors duration-200"
        src={avatar}
        alt="avatar"
        onClick={() => setIsVisiable(!isVisiable)}
      />

      <div
        className={`absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg text-sm text-gray-800 transition-all duration-200 transform origin-top ${
          isVisiable
            ? "scale-100 opacity-100"
            : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
  
        <div className="absolute -top-2 right-4 w-3 h-3 bg-white rotate-45 shadow-md"></div>

        <div className="flex flex-col p-3 gap-2">
          <p className="font-semibold truncate">{name}</p>
          <button
            onClick={logout}
            className="text-left text-gray-600 hover:text-blue-600 transition-colors duration-150"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};
