/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backdropBrightness: {
        25: ".25",
        175: "1.75",
      },
      lineHeight: {
        120: "120%",
        150: "150%",
      },
      padding: {
        15: "60px",
        15.5: "62px",
        16.5: "66px",
        49: "196px",
        61: "61px",
      },
      margin: {
        2.5: "10px",
        17.5: "70px",
        70: "280px",
      },
      width: {
        6.5: "26px",
        22: "88px",
        23: "94px",
        50: "200px",
      },
      height: {
        15: "66px",
      },
      colors: {
        primary: "#2463FF",
        secondary: "#261676",
        paragraph: "#887DC0",
        shadow: "#243041",
        linear: "#67B6FF",
        gradientTop: "#FE71FE",
        gradientBot: "#7199FF",
      },
      fontSize: {
        "Heading-XL": "136px",
        "Heading-L": "88px",
        "Heading-M": "48px",
        "Heading-S": "32px",
        Body: "26px",
      },
      boxShadow: {
        bottom: "inset 0px -8px 0px 4px #140E66",
        top: "inset 0px 6px 0px 8px #3C74FF",
        InOut: "inset 0px -2px 0px 3px #140E66, inset 0px 1px 0px 6px #3C74FF",
        InOutPink:
          "inset 0px -2px 0px 3px #140E66, inset 0px 1px 0px 6px #C642FB",
        play: "inset 0px -4px 0px  5px #243041,inset 0px -12px 0px  11px #9D2DF5 ",
        utilsMob: "inset 0 -5px 0 -1px #9e2df540",
        utils: "inset 0 -6px 0 7px #9e2df540",
      },

      borderRadius: {
        20: "20px",
        40: "40px",
        inherit: "inherit",
      },
    },
  },
  plugins: [],
};
