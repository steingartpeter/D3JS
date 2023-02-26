export class App {
  constructor(w, h) {
    if (w !== undefined) {
      this.WIDTH = w;
    } else {
      this.WIDTH = 960;
    }
    if (h !== undefined) {
      this.HEIGHT = h;
    } else {
      this.HEIGHT = 500;
    }
  }

  range = (n) => {
    const arr = [];
    for (let ix1 = 0; ix1 < n; ix1++) {
      arr.push(ix1);
    }

    return arr;
  };

  tstFunc = function () {
    console.log("Function OK => Javascript Arrays");
    const div = document.createElement("div");

    const p0 = document.createElement("p");
    p0.textContent = `The arrays are just a bunch of things, kept in one place together.`;
    p0.textContent += `The simplest array is: [], an empty array`;
    div.appendChild(p0);

    const array = ["A", "B"];
    const p1 = document.createElement("p");
    p1.textContent = `Some array function:`;
    p1.innerHTML += `<br>array.push;<br>array.length;<br>array.forEach;<br>array.sort;`;
    div.appendChild(p1);

    document.querySelector("body").appendChild(div);

    const arr1 = this.range(12);
    console.log("Array by range() function:");
    console.log(arr1);
  };

  foreachTest(arr) {
    arr.forEach((d) => {
      console.log(`The current element is ${d}`);
    });
  }

  sortTest(arr) {
    //arr.sort(d3.ascending);
    console.log(arr);
  }

  rndArr(len, min, max) {
    let arr = [];
    for (let ix1 = 0; ix1 < len; ix1++) {
      const lmnt = min + Math.ceil(Math.random() * max);
      arr.push(lmnt);
    }
    return arr;
  }

  d3SelectTest(slctr) {
    const svg = d3
      .select("body")
      .append("svg")
      .attr("width", this.WIDTH)
      .attr("height", this.HEIGHT);

    //<nn>
    // Convert the simple array to an array of objects with .map().
    //</nn>
    let t = 0;
    const rads = this.rndArr(15, 10, 30);
    //<nn>
    // Try to animate...
    //</nn>
    setInterval(() => {
      //let nrOfData = Math.floor(Math.random() * 75);
      let nrOfData = 10 + Math.sin(t) * 5;
      const data2 = d3.range(nrOfData).map((d) => ({
        x: d * 50,
        y: 100 + Math.sin(d * 0.5 + t) * 70,
      }));
      const rads = this.rndArr(nrOfData, 10, 15);
      // console.log("Object for chart:");
      // console.log(data2);

      const crcls = svg
        .selectAll("circle")
        .data(data2)
        .join("circle")
        .attr("r", (d, i) => rads[i])
        .attr("cx", (d) => d.x)
        .attr("cy", (d) => d.y)
        .attr("fill", "#FF4099");
      t = t + 0.1;
    }, 1000 / 60);
  }
}
