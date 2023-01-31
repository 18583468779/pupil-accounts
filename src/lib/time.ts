export class Time {
  date: Date
  constructor(p?: number | string | Date) {
    this.date = p ? new Date(p) : new Date()
  }

  parts() {
    const year = this.date.getFullYear()
    const month = this.date.getMonth() + 1
    const day = this.date.getDate()
    const hours = this.date.getHours()
    const minutes = this.date.getMinutes()
    const seconds = this.date.getSeconds()
    const ms = this.date.getMilliseconds()
    return {
      year, month, day, hours, minutes, seconds, ms
    }
  }
}
