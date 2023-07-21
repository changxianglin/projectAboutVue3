import { defineStore } from 'pinia'

const useInfoStore = defineStore('info', {
    state: () => {
      return {
        count: 99,
        arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      }
    },
    actions: {
      updateNum() {
        this.count++
      }
    },
    getters: {
      total() {
        const result = this.arr.reduce((prev: number, next: number) => {
          return prev + next
        }, 0)

        return result
      }
    }
})

export default useInfoStore