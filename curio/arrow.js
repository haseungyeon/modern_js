data = {
    instances : [
        { state: "stop" },
        { state: "stop" },
        { state: "stop" },
        { state: "stop" },
        { state: "stop" },
        { state: "stop" },
        { state: "stop" },
        { state: "stop" },
        { state: "stop" },
        { state: "stop" },
    ]
}

const getActiveRuns = () => data.instances.filter((run) => run.state === 'running').length > 0;
console.log("getActiveRuns():", getActiveRuns());