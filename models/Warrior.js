class Warrior {
  /**
   * @param {string} name - The name of the warrior.
   * @param {number} id - The unique identifier of the warrior.
   * @param {string[]} roles - The roles of the warrior.
   */
  constructor(name, id, roles, unit, isInUnit) {
    this.name = name;
    this.id = id;
    this.currentPosition = null;
    this.nextPosition = null;
    this.rest = 0;
    this.roles = roles;
    this.unit = unit;
    this.whenGoingHome = 0;
    this.whenComingBack = 0;
    this.isInUnit = isInUnit;
  }

  getCurrentPosition() {
    return this.currentPosition;
  }

  getNextPosition() {
    return this.nextPosition;
  }
}
