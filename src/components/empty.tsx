import { useNavigate } from "react-router-dom";
import { ArrowBigLeft } from "lucide-react";
export const Empty: React.FC = () => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate(-1);
  return (
    <div>
      <img
        src="https://cdn.dribbble.com/userupload/22737614/file/original-b42dc03eca8bc887ee07ccbcac904e2c.jpg?resize=752x564&vertical=center"
        alt="empty"
      />
      <div onClick={handleNavigate}>
        <ArrowBigLeft size={75} className="animate-bounce" />
        <p>Go Back</p>
      </div>
    </div>
  );
};
