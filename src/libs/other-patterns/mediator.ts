import { sleep } from '../utils/promise'

interface Runway {
  getName(): string
  getIsClear(): boolean
  markAsBusy(): void
  markAsClear(): void
}

interface Airplane {
  land(runway: Runway): Promise<void>
  getName(): string
}

interface AirTrafficControl {
  requestToLand(airplane: Airplane): Promise<boolean>
}

class Boeing implements Airplane {
  private name: string

  constructor(name: string) {
    this.name = name
  }

  async land(runway: Runway) {
    console.log(`Boeing ${this.name} landing at runway ${runway.getName()}`)
    await sleep(1000)
    console.log(`Boeing ${this.name} landed at runway ${runway.getName()}`)
  }

  getName() {
    return this.name
  }
}

class TrafficTower implements AirTrafficControl {
  private runways: Runway[] = []

  constructor(runways: Runway[]) {
    this.runways = runways
  }

  async requestToLand(airplane: Airplane, retry = true): Promise<boolean> {
    const runway = this.getAvailableRunway()

    if (runway) {
      runway.markAsBusy()
      await airplane.land(runway)
      runway.markAsClear()
      return true
    } else {
      console.log(`Plane ${airplane.getName()} cannot land - all runways are busy`)

      if (retry) {
        console.log(`Plane ${airplane.getName()} is waiting for a runway to be cleared`)
        await sleep(1000)
        return this.requestToLand(airplane, false)
      }

      return false
    }
  }

  private getAvailableRunway() {
    return this.runways.find(runway => runway.getIsClear())
  }
}

class StandardRunway implements Runway {
  private isClear: boolean = true
  private name: string

  constructor(name: string) {
    this.name = name
  }

  getIsClear() {
    return this.isClear
  }

  markAsBusy() {
    this.isClear = false
  }

  markAsClear() {
    this.isClear = true
  }

  getName() {
    return this.name
  }
}

console.log('\n\n')

const runway1 = new StandardRunway('Runway 1')
const runway2 = new StandardRunway('Runway 2')

const trafficTower = new TrafficTower([runway1, runway2])
const airplane = new Boeing('A123')
const airplane2 = new Boeing('B456')
const airplane3 = new Boeing('C789')

trafficTower.requestToLand(airplane)
trafficTower.requestToLand(airplane2)
trafficTower.requestToLand(airplane3)
