import React from "react";

const Mountain = () => {
  const styles = {
    className: "px-5",
  };
  const mountains = [
    {
      className: styles.className,
      to: "/everest",
      name: "Mt Everest",
      image: "",
    },
    {
      className: styles.className,
      to: "/Kanchanjunga",
      name: "Mt Kanchanjunga",
      image: "",
    },
    {
      className: styles.className,
      to: "/dhaulagiri",
      name: "Mt Dhaulagiri",
      image: "",
    },
    {
      className: styles.className,
      to: "/fishtail",
      name: "Mt Fishtail",
      image: "",
    },
    {
      className: styles.className,
      to: "/annapurna",
      name: "Mt Annapurna",
      image: "",
    },
    {
      className: styles.className,
      to: "/lothse",
      name: "Mt Lothse",
      image: "",
    },
    {
      className: styles.className,
      to: "/makalu",
      name: "Mt Makalu",
      image: "",
    },
    {
      className: styles.className,
      to: "/choyou",
      name: "Mt Choyou",
      image: "",
    },
  ];
  return (
    <>
      <div className="mountain-list"></div>
    </>
  );
};

export default Mountain;
