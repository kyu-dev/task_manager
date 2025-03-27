import React from "react";
import { Calendar } from "@/components/ui/calendar";

const Home = () => {
  const [date, setDate] = React.useState(new Date());

  return (
    <div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    </div>
  );
};

export default Home;
