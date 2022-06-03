export const factoids: Factoid[] = [
  {
    keyword: "leeb",
    title: "Leeb",
    description:
      'An idiot.\n\nComes from the phonetic pronunciation of "Libre" (leeb-ray), which itself \
is from the project LibreScore, whose Discord server is filled to the brim with idiots \
who can\'t read simple instructions.\n\n - Urban Dictionary, paraphrased'
  }
];

export interface Factoid {
  keyword: string;
  title: string;
  description: string;
}
