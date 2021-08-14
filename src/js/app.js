class Team {
  constructor() {
    this.members = new Set();
  }

  add(obj) {
    if (!this.members.has(obj)) {
      this.members.add(obj);
    } else throw new Error('Персонаж уже добавлен');
  }

  addAll(...objs) {
    objs.forEach((item) => this.add(item));
  }

  toArray() {
    return Array.from(this.members);
  }
}

export default Team;
