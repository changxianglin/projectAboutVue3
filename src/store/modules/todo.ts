import { defineStore } from 'pinia'
import { computed, ref }  from 'vue'

const useTodoStore = defineStore('todo', () => {
  const todos = ref([{id: 1, title: '吃饭'}, {id: 2, title: '睡觉'}, {id: 3, title: '打豆豆'}])
  const arr = ref([1, 2, 3, 4, 5])

  const total = computed(() => {
    return arr.value.reduce((prev: number, next: number) => {
      return prev + next
    }, 0)
  })

  return {
    todos, 
    arr,
    total,
    updateTodo() {
      todos.value.push({id: 4, title: 'compositionApi'})
    }
  }
})

export default useTodoStore