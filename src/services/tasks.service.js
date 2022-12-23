import TASKS from "@/Queries/taskQueries";
import { useQuery } from "@urql/vue";


const TaskSerivce = {
    getAllTasks: function() {
        return useQuery(TASKS.allTasks).data
    },
    getTaskWithTraders: function() {
        return useQuery(TASKS.TaskWithTraders).data
    }
}


export default TaskSerivce