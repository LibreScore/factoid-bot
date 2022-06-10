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
how to update it.\n\n(You can click on the channel name highlighted in blue to go there.)",
    aliases: ["dbdp", "youtube"]
  },
  {
    keyword: "neterror",
    title: "Network Error",
    description:
      "A network error probably means that the server is down. It should come back up \
within two hours.",
    aliases: ["networkerror", "ne"]
  },
  {
    keyword: "nocoop",
    title: "No-coop",
    description:
      "We have offered you help that we think is best. We are sorry if you are not \
satisfied or disagree with our advice. Do not continue to ask the same question now that we've \
helped you. Thanks!",
    footer: " - r/techsupport discord"
  },
  {
    keyword: "tryagain",
    title: "Try Again",
    description:
      "When we ask you to try something again, we want you to try it right now. Please don't just \
relay the fact that you tried it in the past."
  },
  {
    keyword: "dw",
    title: "Doesn't work",
    description:
      "Saying something doesn't work is not enough info for us to help you. Explain what \
you are trying to do, and what issue you are facing in the process.",
    footer: " - r/techsupport discord, paraphrased"
  },
  {
    keyword: "official",
    title: "Official Scores",
    description:
      "Official scores can't be downloaded with the app or CLI. They can only be \
downloaded with the script and a Pro+ subscription.\n\nWithout the script, you can't download \
official scores at all, even with a Pro+ subscription."
  },
  {
    keyword: "dask",
    title: "Don't Ask to Ask",
    description:
      "The good thing about chats is that questions don't have to be \
answered in real time. Therefore, it is a better idea to just state the question than ask to be helped.\n\n\
More information: https://dontasktoask.com/"
  }
];

export interface Factoid {
  keyword: string;
  title: string;
  description: string;
  footer?: string;
  aliases?: string[];
}
