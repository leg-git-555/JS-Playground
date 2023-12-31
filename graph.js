class Graph {
    constructor(){
        this.graph = {};
    }

    //add a node to the graph
    addNode(node) {
        if (!this.graph[node]) {
            this.graph[node] = [];
        }
    }

    addEdge(node1, node2) {
        if (!this.graph[node1] || !this.graph[node2]) {
            return 'Invalid node(s)';
        }

        this.graph[node1].push(node2);
        this.graph[node2].push(node1); //For an undirected graph, add both ways
    }

    getNeighbors(node) {
        return this.graph[node] || []
    }

    removeNode(node) {
        delete this.graph[node];
        for (const neighbor in this.graph){
            this.graph[neighbor] = this.graph[neighbor].filter((n) => n !== node);
        }
    }

    removeEdge(node1, node2) {
        if (!this.graph[node1] || !this.graph[node2]){
            return "invalid node(s)"
        }

        this.graph[node1] = this.graph[node1].filter((n) => n !== node2);
        this.graph[node2] = this.graph[node2].filter((n) => n !== node1 )
    }

    //shows key(node) and values(edges)
    printGraph(){
        console.log(this.graph)
    }

    checkConnection(node1, node2){
        if (this.graph[node1].includes(node2)){
            return true;
        }
        return false;
    }
}

const graph = new Graph();

graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");

graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("B", "D");

graph.printGraph();

console.log(graph.checkConnection('A', 'C'))
console.log(graph.checkConnection('A', 'B'))

//console.log("Neighbors of A:", graph.getNeighbors("A")); // Output: Neighbors of A: [ 'B' ]
//console.log("Neighbors of B:", graph.getNeighbors("B")); // Output: Neighbors of B: [ 'A', 'C' ]
