class Mission {
  /**
   * @param {string} name - The name of the mission.
   * @param {number} shiftDuration - The duration of a shift in the mission.
   * @param {string[]} roles - The roles required for the mission.
   * @param {number} amountOfWarriors - The number of warriors required for the mission.
   */
  constructor(name, shiftDuration, roles, amountOfWarriors) {
    this.name = name;
    this.shiftDuration = shiftDuration;
    this.actualDuration = 0;
    this.roles = roles;
    this.amountOfWarriors = amountOfWarriors;
    this.warriors = [];
  }
}
