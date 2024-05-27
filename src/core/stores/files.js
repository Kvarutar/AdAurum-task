import { defineStore } from 'pinia'

export const useFilesStore = defineStore('files', {
  state: () => ({ media: [], reports: [] }),
  getters: {
    getAllMedias: state => {
      return state.media
    },
    getLastMedias: state => {
      return (count = 4, multiplicator = 1) => {
        if (state.media.length < count * multiplicator) {
          return state.media
        }

        return state.media.slice(0, count * multiplicator)
      }
    },
    getAllReports: state => state.reports,
    getLastReports: state => {
      return (count, multiplicator = 1) => {
        if (state.reports.length < count * multiplicator) {
          return state.reports
        }

        return state.reports.slice(0, count * multiplicator)
      }
    },
  },
  actions: {
    addMedia(media) {
      this.media.unshift(media)
    },
    addReport(report) {
      this.reports.unshift(report)
    },
  },
})
