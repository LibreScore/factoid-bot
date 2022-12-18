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
      "You're having trouble reaching LibreScore's servers. This is usually because LibreScore's servers are down. This only applies to the LibreScore app.\n\n**__What should I do?__**\n**1.** Make sure you are on version `v2.0.0` or greater of the LibreScore app. If you see a prompt to update, please do. You can see the app version by clicking the three dots in the top right corner, then clicking `About`.\n**2.** Wait exactly 2 hours and try again. The server will usually not be down for more than two hours at a time, unless it is under maintenance or hit by a natural disaster. Maintenance breaks will always be made public, if no message about maintenance is in <#774491656643674128> or <#776384156602335254>, then the server is not under maintenance.\n**3.** If downloads still don't work after exactly two hours, then it is an issue with your device or network. Only in this case, can you share the URL of your desired score for someone else to download it for you. This is in accordance with rule #7. For basic troubleshooting, try using another device, or a different network.",
    aliases: ["networkerror", "ne"]
  },
  {
    keyword: "tryagain",
    title: "Try Again",
    description:
      "When we ask you to try something again, we want you to try it right now. Please don't just \
relay the fact that you tried it in the past."
  },
  {
    keyword: "official",
    title: "Official Scores",
    description:
      "**Official Scores require a MuseScore Pro+ subscription (free trial available) to download.**\n> ***Note:** MSCZ files are not available for Official Scores. The LibreScore App cannot download Official Scores.*\n\n**__What should I do?__**\n**1.** Subscribe to a MuseScore Pro+ subscription from here: https://musescore.com/upgrade. A free trial is available.\n**2.** Use the Userscript (browser extension) to download PDF, MIDI, and MP3. The Userscript can be installed from here: https://github.com/LibreScore/dl-librescore#userscript\n\n**Q: Why do I need both the Pro+ Subscription and the Userscript?**\n***A:** MuseScore's Pro+ Subscription doesn't provide downloads for Official Scores, it only allows viewing them. The Userscript permits you to download Official Scores, as long as you can view them with a Pro+ subscription.*"
  },
  {
    keyword: "dask",
    title: "Don't Ask to Ask",
    description:
      "The good thing about chats is that questions don't have to be \
answered in real time. Therefore, it is a better idea to just state the question than ask to be helped.\n\n\
More information: https://dontasktoask.com/"
  },
  {
    keyword: "individual",
    title: "Individual Parts",
    description:
      "To download individual parts, first download the MSCZ, then use the webmscore website to convert: \
https://webmscore.librescore.org/\n\nYou can download MSCZ with the LibreScore app: https://github.com/LibreScore/app-librescore#installation",
    aliases: ["indparts", "parts"]
  },
  {
    keyword: "convert",
    title: "Convert to Other File Types",
    description: "To convert to file types other than MSCZ/MIDI/PDF/MP3, first download the MSCZ, then use the webmscore website to convert: \
https://webmscore.librescore.org/\n\nYou can download MSCZ with the LibreScore app: https://github.com/LibreScore/app-librescore#installation"
  }
];

export interface Factoid {
  keyword: string;
  title: string;
  description: string;
  footer?: string;
  aliases?: string[];
}
