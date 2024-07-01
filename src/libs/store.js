import {create} from 'zustand'
import { persist } from 'zustand/middleware'
import { apiFetch } from './request'

export const useStore = create(
  persist((set, state) => ({
    students: {},
    selected: {},
    doStudentSave: async payload => {
      const { students } = state()
      const response = await apiFetch({ payload, method: 'POST' })
      if(response) {
        const newValues = {...students, [response._id]: {...response}}
        set({ students: newValues})
      }
    },
    doFetchStudents: async () => {
      const response = await apiFetch({method: 'GET'})
      if (response) {
        set({ students: response.reduce((acc, current) => ({
          ...acc,
          [current._id]: {...current}
        }), {})
      })
      }
    },
    selectStudent: async id => {
      const { students } = state()
      return students[id]
    },
    setCurrentSelected: payload => {
      set({selected: payload})
    }
  }),
  {}
))
