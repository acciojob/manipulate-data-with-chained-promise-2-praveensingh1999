//your JS code here. If required.
 function delay(ms, value) {
      return new Promise(resolve => setTimeout(() => resolve(value), ms));
    }

    async function startProcess() {
      // Step 1: Initial promise resolves after 3s
      const arr = await delay(3000, [1, 2, 3, 4]);

      // Step 2: Filter out odd numbers
      const evens = arr.filter(num => num % 2 === 0);
      await delay(1000); // wait 1s before showing
      document.getElementById("output").innerText = evens;

      // Step 3: Multiply evens by 2
      const doubled = evens.map(num => num * 2);
      await delay(2000); // wait 2s before showing
      document.getElementById("output").innerText = doubled;
    }

    // Start automatically
    startProcess();