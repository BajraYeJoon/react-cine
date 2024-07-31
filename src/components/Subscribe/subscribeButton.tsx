import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const SubscribeButton = ({ className }: { className: string }) => {
  return (
    <Link to={`/subscribe`}>
      <Button className={className}>Subscribe</Button>
    </Link>
  );
};

export default SubscribeButton;
