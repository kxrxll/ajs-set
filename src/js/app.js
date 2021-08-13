class Team {
  constructor() {
    this.members = new Set();
  }

  add(obj) {
    /* проверка выполняется по ссылке, использовано допущение
    что персонажи созданные идентичным образом (например если
    брата Боромира звали тоже Боромиром, а не Фарамиром, как всем
    известно) будут считаться разными персонажами */
    this.members.add(obj);
  }

  addAll(...objs) {
    objs.forEach((item) => this.add(item));
  }

  toArray() {
    return Array.from(this.members);
  }
}

export default Team;
