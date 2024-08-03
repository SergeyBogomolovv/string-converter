export const defaultCase = {
  string:
    "Ятаган, Алеша, Фердинанд, Глускер, Сметанович, Гнутов, Глупень, Оборотень, оборона",
  expected: [
    "Алеша",
    "Глупень",
    "Глускер",
    "Гнутов",
    "оборона",
    "Оборотень",
    "Сметанович",
    "Фердинанд",
    "Ятаган",
  ],
};

export const dirtyCase = {
  string:
    " Ятаган,Алеша,Фердинанд,Глускер,   Сметанович,       Гнутов, Глупень, Оборотень, оборона    ",
  expected: [
    "Алеша",
    "Глупень",
    "Глускер",
    "Гнутов",
    "оборона",
    "Оборотень",
    "Сметанович",
    "Фердинанд",
    "Ятаган",
  ],
};

export const differentLangsCase = {
  string: "Grekas, Егор, Соловей, Zombie",
  expected: ["Grekas", "Zombie", "Егор", "Соловей"],
};
