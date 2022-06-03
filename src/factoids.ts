export const factoids: Factoid[] = [
  {
    keyword: "leeb",
    title: "Leeb",
    description:
      'An idiot.\n\nComes from the phonetic pronunciation of "Libre" (leeb-ray), which itself \
is from the project LibreScore, whose Discord server is filled to the brim with idiots \
who can\'t read simple instructions.',
    footer: " - Urban Dictionary, paraphrased"
  },
  {
    keyword: "outdated",
    title: "Outdated Script",
    description:
      "You are using an outdated script. Please see <#900496770403041351> for instructions on \
how to update it.\n\n(You can click on the channel name highlighted in blue to go there.)"
  },
  {
    keyword: "neterror",
    title: "Network Error",
    description:
      "A network error probably means that the server is down. It should come back up \
within two hours."
  },
  {
    keyword: "nocoop",
    title: "No-coop",
    description:
      "We have offered you help that we think is best. We are sorry if you are not \
satisfied or disagree with our advice. Do not continue to ask the same question now that we've \
helped you. Thanks!",
    footer: " - r/techsupport discord"
  }
];

export interface Factoid {
  keyword: string;
  title: string;
  description: string;
  footer?: string;
}
