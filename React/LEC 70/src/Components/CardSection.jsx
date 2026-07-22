import React from "react";
import Apps from "../data/app";
import Card from "./Card";

const CardSection = () => {
  return (
    <section className="overflow-x-auto px-10 py-20">
      <div className="flex gap-9 w-max ">
        {Apps.map((app) => (
          <Card key={app.id} app={app} />
        ))}
      </div>
    </section>
  );
};

export default CardSection;
