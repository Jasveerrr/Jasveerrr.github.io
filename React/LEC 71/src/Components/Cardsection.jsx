import React from "react";
import Card from "./Card";
import users from "./Users";

const Cardsection = () => {
  return (
    <section className="w-full flex justify-center mt-10">
      <div className="grid grid-cols-3 gap-8">
        {users.map((app) => (
          <Card key={app.id} app={app} />
        ))}
      </div>
    </section>
  );
};

export default Cardsection;
