export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://cdn.discordapp.com/attachments/836225187132473364/1015323826512478290/Thunar_New_Era.png",
      name: "Thunar",
      description: "Discord'un modern ve gelişmiş yeni nesil sistemlerine sahip en iyi Discord bekçi botu",
      link: "https://discord.com/api/oauth2/authorize?client_id=963406060150984764&permissions=8&scope=bot%20applications.commands",
    },
    {
      id: 2,
      image: "https://cdn.discordapp.com/attachments/838751131684569129/1031666756940476497/BUG_An_icy_wolf_right_in_front_of_the_icy_moon_that_turns_night_07e9012e-708f-44d3-b368-aaaeb559d293.png",
      name: "Thunar Client",
      description: "Thunar'ı Discord üzerinden değil masaüstü programınız ile ayarlayın... Çok yakında!",
      link: "#",
    }
  ];
  res.status(200).json(data);
};
