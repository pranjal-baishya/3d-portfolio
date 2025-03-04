interface Theme {
  bg: string;
  bgLight: string;
  primary: string;
  text_primary: string;
  text_secondary: string;
  card: string;
  card_light: string;
  button: string;
  white: string;
  black: string;
  dark?: boolean;
  mode?: string;
  skill_bg?: string;
  skill_text?: string;
}

export const darkTheme: Theme = {
  bg: "#090917",
  bgLight: "#1C1E27",
  primary: "#854CE6",
  text_primary: "#F2F3F4",
  text_secondary: "#b1b2b3",
  card: "#171721",
  card_light: "#191924",
  button: "#854CE6",
  white: "#FFFFFF",
  black: "#000000",
  dark: true,
  mode: "dark",
  skill_bg: "#2a2a2a",
  skill_text: "#F2F3F4"
};

export const lightTheme: Theme = {
  bg: "#FFFFFF",
  bgLight: "#f0f0f0",
  primary: "#be1adb",
  text_primary: "#111111",
  text_secondary: "#48494a",
  card: "#FFFFFF",
  card_light: "#f0f0f0",
  button: "#5c5b5b",
  white: "#FFFFFF",
  black: "#000000",
  dark: false,
  mode: "light",
  skill_bg: "#f0f0f0",
  skill_text: "#111111"
};
