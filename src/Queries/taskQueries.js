
const TASKS = {
    allTasks: {
            query: `
            {
            tasks {
                id
                name
            }
        }`
    },
    TaskWithTraders: {
        query: `
        {
            tasks {
                id
                name
                trader {
                    name
                }
            }
        }`
    }
}

export default TASKS