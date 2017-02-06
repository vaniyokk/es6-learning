class TaskCollection {
    constructor(tasks = []) {
        this.tasks = tasks;
    }

    log_no_arguments() {
        this.tasks.forEach(() => console.log("task"));
        return this;
    }

    log_1_arguments() {
        this.tasks.forEach(task => console.log(task));
        return this;
    }

    log_2_arguments() {
        this.tasks.forEach((task, index) => console.log(task, index));
        return this;
    }
}

class Task {

}

new TaskCollection([new Task, new Task, new Task])
    .log_no_arguments()
    .log_1_arguments()
    .log_2_arguments();

let names = ["Jeff", "Matt", "Sally"];

let coolGuys = names.map(function(item) {
    return item + " is cool.";
});

let coolGuysNew = names.map(item => item + " is cool");

console.log(coolGuys);

console.log(coolGuysNew);

