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
  return (
    <div>
      <img
        className="w-7 h-7 rounded-full"
        src={avatar}
        alt="avatar"
        onClick={() => setIsVisiable(!isVisiable)}
      />
      {isVisiable && (
        <div className="absolute text-sm max-w-[70px] bg-white text-black text-center p-2 rounded-sm ">
          <p className="mb-2">{name}</p>
          <p className="hover:text-blue-700" onClick={logout}>
            logout
          </p>
        </div>
      )}
    </div>
  );
};
